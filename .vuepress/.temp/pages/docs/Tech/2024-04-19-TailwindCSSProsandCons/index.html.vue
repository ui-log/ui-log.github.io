<template><div><h2 id="전통-css와-tailwindcss의-차이점" tabindex="-1"><a class="header-anchor" href="#전통-css와-tailwindcss의-차이점" aria-hidden="true">#</a> 전통 CSS와 TailwindCSS의 차이점</h2>
<p><img src="@source/docs/Tech/2024-04-19-TailwindCSSProsandCons/img/TailwindCSSProsandCons_0.png" alt="TailwindCSSProsandCons_0.png"></p>
<h2 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h2>
<p>프런트엔드 개발자 커뮤니티는 두 그룹으로 나뉘어 있는데, 하나는 전통적인 기본 CSS를 선호하는 그룹이고, 다른 하나는 프로젝트에서 추가로 필요 없는 코드를 없애기 위해 Tailwind를 선호하는 그룹입니다. 그래서, 우리는 Tailwind CSS로 전환하는 것이 미래인지, 아니면 전통 CSS를 유지해야 하는지에 대해 논의해보도록 할까요?</p>
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
<h2 id="다루는-주제" tabindex="-1"><a class="header-anchor" href="#다루는-주제" aria-hidden="true">#</a> 다루는 주제</h2>
<ul>
<li>TailwindCSS란 무엇인가</li>
<li>선행 요건</li>
<li>TailwindCSS의 장단점</li>
<li>기본 CSS와의 차이점</li>
<li>어떤 프로젝트에 사용해야 하는가</li>
<li>결론</li>
</ul>
<h1 id="tailwind-css란" tabindex="-1"><a class="header-anchor" href="#tailwind-css란" aria-hidden="true">#</a> Tailwind CSS란?</h1>
<p>Tailwind CSS는 유틸리티 우선 CSS 프레임워크로, 어떠한 제약도 없이 어떤 디자인이든 구축할 수 있는 저수준 CSS 유틸리티 클래스 세트를 제공합니다. 사용자 정의 CSS 코드를 작성하지 않고도 사용자 정의 디자인을 만들 수 있는 빌딩 블록을 제공합니다.</p>
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
<h1 id="tailwind-css를-사용하기-위한-선행-조건" tabindex="-1"><a class="header-anchor" href="#tailwind-css를-사용하기-위한-선행-조건" aria-hidden="true">#</a> Tailwind CSS를 사용하기 위한 선행 조건</h1>
<p>Tailwind CSS를 사용하기 전에는 프레임워크의 기능을 원활하게 활용하기 위해 고려해야 할 몇 가지 선행 조건이 있습니다. 여기에 몇 가지 중요한 것들이 있습니다:</p>
<ul>
<li>HTML에 대한 충분한 지식, 그 구조 및 작동 방식</li>
<li>CSS에 대한 튼튼한 기초 — 미디어 쿼리, 플렉스박스 및 그리드 시스템</li>
</ul>
<p>여기 두 접근 방식 간의 기본적인 차이점을 설명하는 빠른 예시가 있습니다:</p>
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
<p>기본 CSS를 사용하여:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex-container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>컨테이너 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>컨테이너 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>컨테이너 <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>flex<span class="token operator">-</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TailwindCSS를 사용하여:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex justify-center items-center text-red"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>컨테이너 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>컨테이너 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>컨테이너 <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이, 두 코드 세그먼트는 동일한 스타일을 만들어 냅니다. tailwindCSS는 더 적은 코드를 사용하며, 무엇보다도 별도의 CSS 파일이 필요하지 않습니다. 이는 개발자 경험을 향상시키고 코드 양을 줄입니다.</p>
<h1 id="tailwindcss의-장점" tabindex="-1"><a class="header-anchor" href="#tailwindcss의-장점" aria-hidden="true">#</a> TailwindCSS의 장점</h1>
<ul>
<li>속도: Tailwind CSS는 복잡한 레이아웃에 특히 유용하게 사용되어 CSS를 빠르게 작성할 수 있습니다.</li>
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
<p>이전 예시에서 확인했듯이, TailwindCSS로 적은 양의 코드를 작성하면 개발 시간이 크게 단축됨을 알 수 있습니다. 이는 CSS 클래스에 대한 변수 이름을 개발자가 만들 필요가 없어지므로, 이후에 이전 코드를 다시 확인할 때 나중에 개발할 때 악몽이 되는 상황이 없어집니다.</p>
<p>TailwindCSS</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"flex justify-center items-center"</span><span class="token operator">></span>
 <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text-3xl font-bold"</span><span class="token operator">></span>This is a heading<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FundamentalCSS</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">"display: flex; justify-content: center; align-items: center;"</span><span class="token operator">></span>
 <span class="token operator">&lt;</span>h1 style<span class="token operator">=</span><span class="token string">"font-size: 3rem; font-weight: bold;"</span><span class="token operator">></span>이것은 제목입니다<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>보시다시피 Tailwind CSS 코드는 훨씬 더 짧고 간결합니다. 이는 Tailwind CSS가 여러분이 요소를 스타일링하는 데 사용할 수 있는 다양한 미리 구축된 CSS 클래스를 제공하기 때문입니다. 특히 복잡한 레이아웃을 작업할 때, 많은 시간을 절약할 수 있습니다.</p>
<ol start="2">
<li>일관성: Tailwind CSS를 사용하면 팀 내에서 더 일관된 디자인을 만들 수 있습니다.</li>
</ol>
<p>기본 CSS는 코드 개발 방법에 대한 다양성이 많습니다. 예를 들어, 일부 개발자는 폰트 크기에 px 대신 rem을 사용하는 것이 적절하다고 생각할 수 있고, 일부 개발자는 hex 코드 대신 RGB를 사용하는 것을 선호할 수 있습니다. TailwindCSS에서는 테마 색상과 폰트를 별도의 global.css 파일로 만들어 이러한 상황을 극복할 수 있으며, 전통적인 CSS처럼 필요에 따라 참조할 수 있습니다.</p>
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
<p>TailwindCSS</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* tailwind.config.js */</span>
<span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">'#007bff'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">secondary</span><span class="token operator">:</span> <span class="token string">'#6c757d'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fonts</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sans</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Roboto'</span><span class="token punctuation">,</span> <span class="token string">'sans-serif'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* global.css */</span>
body <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>font<span class="token operator">-</span>sans<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token operator">-</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn"</span><span class="token operator">></span>Click Me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
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
<p>이 예시에서는 우리 애플리케이션에서 사용할 색상 및 글꼴을 정의하는 Tailwind CSS 테마 파일을 만들었습니다. 이렇게 하면 전역 CSS 파일 및 HTML 코드에서 이러한 변수를 참조할 수 있습니다. 이를 통해 디자인이 애플리케이션 전체에서 일관되게 유지되도록할 수 있습니다.</p>
<p>유연성: Tailwind CSS는 매우 유연하며 간단한 것부터 복잡한 디자인까지 만들 수 있습니다.</p>
<p>Tailwind CSS의 또 다른 장점은 전통적인 CSS의 너무 많은 제어와 부트스트랩 패키지의 제어가 없는 중간 지점에 위치한다는 것입니다. 이는 사용자 정의 CSS의 제어와 부트스트랩의 테마 및 보일러플레이트 코드의 완벽한 조합을 가지고 있음을 의미합니다. 이는 UI에 템플릿 중심의 외형이 아닌 신선한 외형을 제공합니다.</p>
<div class="flex flex-col items-center justify-between h-full">
  <header class="flex flex-row items-center justify-between px-6 py-4">
    <h1 class="text-xl font-bold">My App</h1>
    <nav class="flex flex-row items-center justify-between">
      <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
      <a href="#" class="text-gray-700 hover:text-gray-900">About</a>
      <a href="#" class="text-gray-700 hover:text-gray-900">Contact</a>
    </nav>
  </header>
  <main class="flex-1 overflow-y-auto">
    <section class="px-6 py-4">
      <h2 class="text-xl font-bold">This is my main content</h2>
      <p>This is a paragraph of text.</p>
    </section>
  </main>
  <footer class="flex flex-row items-center justify-between px-6 py-4">
    <p class="text-gray-700">Copyright &copy; 2023 My App</p>
    <a href="#" class="text-gray-700 hover:text-gray-900">Privacy Policy</a>
  </footer>
</div>
```
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
<p>이 예시는 Tailwind CSS를 사용하여 다양한 요소를 포함하는 복잡한 레이아웃을 만드는 방법을 보여줍니다. Tailwind CSS는 요소를 자유롭게 원하는 대로 스타일링할 수 있는 다양한 CSS 클래스를 제공합니다. 이는 응용 프로그램의 디자인에 대한 유연성을 제공합니다.</p>
<p>유지 관리성: Tailwind CSS 코드는 일반적으로 전통적인 CSS 코드보다 유지 및 업데이트하기 쉬운 편입니다.</p>
<p>Tailwind 클래스가 이미 사전 정의된 키워드로 제공되므로 코드가 유지관리 가능하며, 개발자들은 이전 코드를 방문하여 스타일링을 즉시 시각화할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"flex justify-center items-center"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text-3xl font-bold"</span><span class="token operator">></span>이것은 제목입니다<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* global.css */</span>
<span class="token punctuation">.</span>text<span class="token operator">-</span>3xl <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 3rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>font<span class="token operator">-</span>bold <span class="token punctuation">{</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tailwind CSS 코드는 일반적으로 전통적인 CSS 코드보다 유지 및 업데이트하기 쉽습니다. 이는 Tailwind CSS 클래스가 서술적이고 스스로 설명하는 특징을 가지고 있기 때문입니다. 예를 들어, text-3xl 클래스는 요소가 3rem의 글꼴 크기를 가질 것임을 알려줍니다. 이렇게 하면 이 코드가 무슨 일을 하는지 이해하기 쉽습니다. 이전에 본 적이 없어도요.</p>
<h1 id="tailwindcss의-단점" tabindex="-1"><a class="header-anchor" href="#tailwindcss의-단점" aria-hidden="true">#</a> TailwindCSS의 단점</h1>
<p>그러나 의문이 제기됩니다. 장점이 전통적 CSS 작성에서 몇 년 동안 완벽하게 소화해 온 프론트엔드 개발자를 위한 것에서 새로운 것으로 전환하는 것을 정당화하는데 충분한 효과가 있는 것일까요?```</p>
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
<ul>
<li>학습 곡선: Tailwind CSS는 특히 이에 새로운 개발자들에게는 학습 곡선이 있어요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* Tailwind CSS */</span>
<span class="token punctuation">.</span>flex<span class="token punctuation">.</span>justify<span class="token operator">-</span>center<span class="token punctuation">.</span>items<span class="token operator">-</span>center <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 기본 CSS */</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>보시다시피, Tailwind CSS 코드는 기본 CSS 코드보다 조금 더 많아요. 이것은 Tailwind CSS 클래스가 더 구체적이기 때문이에요. 예를 들어, 클래스 .flex.justify-center.items-center은 요소가 정확히 어떻게 표시되어야 하는지 알려줘요. 반면 클래스 .container은 더 일반적이에요.</p>
<ol start="2">
<li>파일 크기: Tailwind CSS는 CSS 파일의 크기를 늘릴 수 있지만, 이는 최소화와 gzip 압축으로 완화할 수 있어요.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* Tailwind CSS */</span>
@tailwind base<span class="token punctuation">;</span>
@tailwind components<span class="token punctuation">;</span>
@tailwind utilities<span class="token punctuation">;</span>

body <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> blue<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 기본 CSS */</span>
body <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> blue<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tailwind CSS 코드는 기본 CSS 코드보다 약간 큽니다. 이는 Tailwind CSS가 여러 미리 만들어진 CSS 클래스를 포함하기 때문입니다. 그러나 파일 크기의 차이는 중요하지 않으며 최소화 및 gzip 압축으로 완화할 수 있습니다.</p>
<ol start="3">
<li>벤더 락인: Tailwind CSS를 사용하기 시작하면 다른 CSS 프레임워크나 라이브러리로 전환하기가 어려울 수 있습니다. 이는 Tailwind CSS가 매우 포관적인 프레임워크이기 때문입니다. 모든 요소의 스타일링에 대한 클래스를 제공합니다. 다른 프레임워크로 전환하면 모든 CSS 코드를 다시 작성해야 합니다.</li>
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
<ol start="4">
<li>코드 가독성: TailwindCSS는 HTML 및 JSX 파일의 가독성을 해치기 때문에, HTML 및 CSS 파일이 분리된 경우에는 깔끔한 코드가 방해됩니다.</li>
</ol>
<p>전통적인 HTML 및 CSS 파일을 사용하는 경우:</p>
<p>HTML</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>내 앱<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>내 앱<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>홈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>소개<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>문의<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>이것은 내 주요 내용입니다<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>이것은 텍스트 단락입니다.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>저작권 <span class="token entity named-entity" title="&copy;">&amp;copy;</span> 2023 My App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>개인정보 처리방침<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>CSS</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header,
footer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header</span> <span class="token punctuation">{</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">footer</span> <span class="token punctuation">{</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">nav</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">nav a</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #777<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">nav a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1,
h2</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">section</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>동일한 디자인을 얻기 위해 tailwind 사용</p>
<p>HTML 파일만 포함</p>
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
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex flex-col items-center justify-between h-full<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex flex-row items-center justify-between px-6 py-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-xl font-bold<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>내 앱<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex flex-row items-center justify-between<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-gray-700 hover:text-gray-900<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>홈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-gray-700 hover:text-gray-900<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>소개<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-gray-700 hover:text-gray-900<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>연락처<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-1 overflow-y-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>px-6 py-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-xl font-bold<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>이것이 내 주요 콘텐츠입니다<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>이것은 텍스트 단락입니다.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex flex-row items-center justify-between px-6 py-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>저작권 <span class="token entity named-entity" title="&copy;">&amp;copy;</span> 2023 내 앱<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-gray-700 hover:text-gray-900<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>개인정보 보호정책<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>코드 가독성에 대한 단점은 주관적입니다. 일부 사람들은 Tailwind CSS 코드가 전통적인 CSS 코드보다 더 읽기 쉽다고 생각하지만, 다른 사람들은 그 반대라고 생각할 수도 있습니다. 궁극적으로 각 개발자가 스스로 어떤 프레임워크가 더 잘 맞는지를 결정해야 합니다.</p>
<h1 id="tailwindcss와-기본-css의-차이점" tabindex="-1"><a class="header-anchor" href="#tailwindcss와-기본-css의-차이점" aria-hidden="true">#</a> TailwindCSS와 기본 CSS의 차이점</h1>
<p>전통적인 CSS는 각 요소를 스타일링하기 위해 사용자 정의 CSS 규칙을 작성하는 보다 기본적인 방법입니다. 그에 반해 Tailwind CSS는 유틸리티 중심적인 접근 방식으로, 사전에 구축된 CSS 클래스를 사용하여 요소를 스타일링합니다.</p>
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
<p>또 다른 중요한 차이점은 Tailwind CSS가 매우 반응형이라는 것입니다. 이는 디자인이 모든 장치(폰부터 데스크톱까지)에서 잘 보일 것을 의미합니다. 전통적인 CSS는 디자인이 반응형이 되도록 추가 CSS를 작성해야 합니다.</p>
<h1 id="tailwind를-사용할-프로젝트는" tabindex="-1"><a class="header-anchor" href="#tailwind를-사용할-프로젝트는" aria-hidden="true">#</a> Tailwind를 사용할 프로젝트는?</h1>
<p>Tailwind CSS는 다음과 같은 다양한 프로젝트에 좋은 선택지입니다:</p>
<ul>
<li>작고 정적인 웹사이트: Tailwind CSS를 사용하면 빠르고 쉽게 작고 정적인 웹사이트를 만들 수 있습니다.</li>
<li>크고 동적인 웹사이트: Tailwind CSS 또한 크고 동적인 웹사이트를 만드는 데 사용할 수 있지만, 복잡한 프로젝트에 대한 학습 곡선이 높다는 점을 명심해야 합니다.</li>
<li>웹 애플리케이션: Tailwind CSS는 웹 애플리케이션을 구축하는 데 좋은 선택이며, 특히 사용자 정의 디자인을 만들어야 할 경우에 유용합니다.</li>
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
<p>한 가지 유의해야 할 점은, 프론트엔드 프레임워크를 사용하지 않고 풀 스택 프로젝트에 tailwind를 사용하는 경우 TailwindCSS가 그 시나리오에 가장 적합하지 않을 수 있다는 것입니다. 프론트엔드가 순수 HTML, CSS, JS인 경우 구성 요소의 재사용이 없으므로 불필요한 반복 코드와 긴 classNames가 생성되어 유지하기 어려울 수 있으며 개발 경험과 속도에 영향을 미칠 수 있습니다.</p>
<p>프론트엔드 프레임워크를 사용하지 않고 풀 스택 프로젝트를 진행 중이라면 Bootstrap 또는 Foundation과 같은 다른 CSS 프레임워크를 고려해 볼 수 있습니다. 이러한 프레임워크는 응용 프로그램 전체에서 재사용할 수 있는 미리 만들어진 구성 요소 세트를 제공합니다. 이를 통해 더 적은 코드를 작성하고 더 일관된 디자인을 만들 수 있습니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>Tailwind CSS는 CSS를 빠르게 작성하고 일관된 유지보수 가능한 디자인을 만드는 데 도움이 되는 강력한 도구입니다. 그러나 프로젝트에 사용할지 여부를 결정하기 전에 장단점을 고려하는 것이 중요합니다.</p>
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
<h1 id="추가적인-생각들" tabindex="-1"><a class="header-anchor" href="#추가적인-생각들" aria-hidden="true">#</a> 추가적인 생각들</h1>
<p>테일윈드 CSS는 비교적 새로운 프레임워크이지만, 금방 프런트엔드 개발자들 사이에서 인기를 얻었습니다. 아직 발전 중이지만 밝은 미래를 가지고 있어요.</p>
<p>테일윈드 CSS를 사용해볼 계획이라면, 작은 프로젝트부터 시작해보는 것을 추천해요. 기초를 익힌 후에는 더 크고 복잡한 프로젝트에도 활용할 수 있을 거예요.</p>
<p>테일윈드 CSS 문서와 커뮤니티 포럼도 꼭 살펴보세요. 테일윈드 CSS를 배우고 활용하는 데 도움이 되는 다양한 자료들이 많이 있습니다.</p>
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
<h1 id="참고-자료" tabindex="-1"><a class="header-anchor" href="#참고-자료" aria-hidden="true">#</a> 참고 자료</h1>
<ul>
<li><a href="https://kinsta.com/blog/tailwind-css/#:~:text=You%20can%20use%20Tailwind%20CSS,%2C%20Vite%2C%20Gatsby%2C%20etc." target="_blank" rel="noopener noreferrer">Kinsta 블로그<ExternalLinkIcon/></a> 에서 참고하실 수 있습니다.</li>
</ul>
</div></template>
