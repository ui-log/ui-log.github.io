<template><div><p>테일윈드 4.0은 더 빠르고 더 좋을 거에요.</p>
<p><img src="@source/docs/Tech/2024-04-19-Tailwind40isComingandLooksGood/img/Tailwind40isComingandLooksGood_0.png" alt="이미지"></p>
<h1 id="알파-상태의-새로운-기능들을-오늘-바로-시도해보세요" tabindex="-1"><a class="header-anchor" href="#알파-상태의-새로운-기능들을-오늘-바로-시도해보세요" aria-hidden="true">#</a> 알파 상태의 새로운 기능들을 오늘 바로 시도해보세요</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 테일윈드 버전 4 패키지 설치하기</span>

$ npm install tailwindcss@next @tailwindcss<span class="token operator">/</span>vite@next
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Vite 구성</span>

<span class="token keyword">import</span> tailwindcss <span class="token keyword">from</span> <span class="token string">'@tailwindcss/vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">tailwindcss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 마지막으로, 주 CSS 파일인 app.css에서 Tailwind를 import합니다.</span>

@<span class="token keyword">import</span> <span class="token string">"tailwindcss"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러니 이제 Tailwind 버전 4에서 무엇이 새로운지 강조해 보겠습니다:</p>
<h1 id="구성-필요-없는-콘텐츠-감지" tabindex="-1"><a class="header-anchor" href="#구성-필요-없는-콘텐츠-감지" aria-hidden="true">#</a> 구성 필요 없는 콘텐츠 감지</h1>
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
<p>이전 버전에서는 tailwind.config.js를 생성하고 글로벌 CSS 파일에 세 가지 지시문을 추가해야 했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@tailwind base<span class="token punctuation">;</span>
@tailwind components<span class="token punctuation">;</span>
@tailwind utilities<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제는 config 대신 특별한 지시문 @theme과 함께 CSS 변수를 사용해야 하며, 하나의 지시문만 필요합니다. 아래와 같이 디자인해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token string">"tailwindcss"</span><span class="token punctuation">;</span>

@theme <span class="token punctuation">{</span>
  <span class="token operator">--</span>font<span class="token operator">-</span>family<span class="token operator">-</span>display<span class="token operator">:</span> <span class="token string">"Satoshi"</span><span class="token punctuation">,</span> <span class="token string">"sans-serif"</span><span class="token punctuation">;</span>
  <span class="token operator">--</span>breakpoint<span class="token operator">-</span>4xl<span class="token operator">:</span> 1920px<span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>neon<span class="token operator">-</span>pink<span class="token operator">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span><span class="token number">71.7</span><span class="token operator">%</span> <span class="token number">0.25</span> <span class="token number">360</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>neon<span class="token operator">-</span>lime<span class="token operator">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span><span class="token number">91.5</span><span class="token operator">%</span> <span class="token number">0.258</span> <span class="token number">129</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>neon<span class="token operator">-</span>cyan<span class="token operator">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span><span class="token number">91.3</span><span class="token operator">%</span> <span class="token number">0.139</span> <span class="token number">195.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>@theme 지시어는 Tailwind에게 새로운 유틸리티와 변형을 변수에 기반하여 사용할 수 있도록 하도록 지시합니다. 이를 통해 4xl:text-neon-lime과 같은 클래스를 마크업에서 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"max-w-lg 4xl:max-w-xl"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"font-display text-4xl"</span><span class="token operator">></span>
    Data to <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text-neon-cyan"</span><span class="token operator">></span>enrich<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span> your online business
  <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>새로운 CSS 변수를 추가하는 것은 이전 버전의 프레임워크에서 extend가 작동했던 것과 같은 방식으로 동작하지만, --color-*: initial과 같은 구문을 사용하여 사용자 정의 값들을 정의하기 전에 변수 네임스페이스를 지우는 것으로 모든 사용자 정의 값들을 재정의할 수 있습니다:</p>
<p>main.css</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@테마 <span class="token punctuation">{</span>
  <span class="token operator">--</span>color<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">:</span> 초기값<span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>gray<span class="token operator">-</span><span class="token number">50</span><span class="token operator">:</span> #f8fafc<span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>gray<span class="token operator">-</span><span class="token number">100</span><span class="token operator">:</span> #f1f5f9<span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>gray<span class="token operator">-</span><span class="token number">200</span><span class="token operator">:</span> #e2e8f0<span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>green<span class="token operator">-</span><span class="token number">800</span><span class="token operator">:</span> #3f6212<span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>green<span class="token operator">-</span><span class="token number">900</span><span class="token operator">:</span> #<span class="token number">365314</span><span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>green<span class="token operator">-</span><span class="token number">950</span><span class="token operator">:</span> #1a2e05<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본 테마를 명시적으로 지우고 처음부터 시작하고 싶지 않은 경우, &quot;tailwindcss/preflight&quot;와 &quot;tailwindcss/utilities&quot;를 가져와서 기본 테마를 가져오지 않고 바로 시작할 수 있습니다:</p>
<p>main.css</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token string">"tailwindcss"</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">"tailwindcss/preflight"</span> <span class="token function">layer</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">"tailwindcss/utilities"</span> <span class="token function">layer</span><span class="token punctuation">(</span>utilities<span class="token punctuation">)</span><span class="token punctuation">;</span>

@테마 <span class="token punctuation">{</span>
  <span class="token operator">--</span>color<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">:</span> 초기값<span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>gray<span class="token operator">-</span><span class="token number">50</span><span class="token operator">:</span> #f8fafc<span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>gray<span class="token operator">-</span><span class="token number">100</span><span class="token operator">:</span> #f1f5f9<span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>gray<span class="token operator">-</span><span class="token number">200</span><span class="token operator">:</span> #e2e8f0<span class="token punctuation">;</span>
  <span class="token comment">/* ... */</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>green<span class="token operator">-</span><span class="token number">800</span><span class="token operator">:</span> #3f6212<span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>green<span class="token operator">-</span><span class="token number">900</span><span class="token operator">:</span> #<span class="token number">365314</span><span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>green<span class="token operator">-</span><span class="token number">950</span><span class="token operator">:</span> #1a2e05<span class="token punctuation">;</span>
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
<h1 id="조합-가능한-변형" tabindex="-1"><a class="header-anchor" href="#조합-가능한-변형" aria-hidden="true">#</a> 조합 가능한 변형</h1>
<p>새 아키텍처를 통해 다른 선택기에 영향을 주는 변형을 함께 구성할 수 있게 되었습니다. 예를 들어 group-<em>, peer-</em>, has-* 및 새로운 not-*와 같은 변형이 있습니다.</p>
<p>이전 릴리스에서는 group-has-*와 같은 변형이 명시적으로 프레임워크에 정의되었습니다. 그러나 이제 group-<em>는 기존 has-</em> 변형과 함께 구성될 수 있으며, 이는 focus와 같은 다른 변형과도 조립될 수 있습니다.</p>
<p>index.html</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group-has-[&amp;:focus]:opacity-100"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group-has-focus:opacity-100"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="변경-사항" tabindex="-1"><a class="header-anchor" href="#변경-사항" aria-hidden="true">#</a> 변경 사항</h1>
<ul>
<li>PostCSS 플러그인과 CLI는 별도의 패키지로 나뉘어졌습니다 — 이제 주요 tailwindcss 패키지에 이들이 포함되어 있지 않습니다. 모두가 필요하지는 않기 때문에 대신 @tailwindcss/postcss와 @tailwindcss/cli를 사용하여 별도로 설치해야 합니다.</li>
<li>기본 테두리 색상이 없습니다 — 테두리 유틸리티는 과거에는 gray-200으로 기본 설정되어 있었지만, 이제 브라우저처럼 currentColor가 기본값입니다. 주로 아연(Abzinc)이나 슬레이트(Slate)와 같은 다른 회색을 주 색상으로 사용하는 경우 프로젝트에 잘못된 회색이 실수로 포함되는 것을 방지하기 위해 이 변경을 하였습니다.</li>
<li>링은 기본적으로 1픽셀입니다 — 링 유틸리티는 과거에는 기본적으로 3픽셀 블루 링이었지만, 이제는 currentColor를 사용하여 1픽셀 링이 기본값입니다. 저희는 프로젝트에서 테두리 대신 링-* 유틸리티를 사용하고 있으며, 포커스 링을 위해서는 outline-*을 사용하고 있기 때문에 일관성 있는 변경이 도움이 될 것이라고 생각합니다.</li>
</ul>
<h1 id="_4-0-버전-도입-계획" tabindex="-1"><a class="header-anchor" href="#_4-0-버전-도입-계획" aria-hidden="true">#</a> 4.0 버전 도입 계획</h1>
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
<li>명시적 콘텐츠 경로 구성 - 템플릿이 자동 콘텐츠 감지에 충분하지 않을 때 Tailwind에게 정확한 템플릿 위치를 알려줄 수 있게 합니다.</li>
<li>다른 다크 모드 지원 - 현재는 미디어 쿼리를 사용해서 다크 모드만 지원하고 있습니다. 선택기 및 변형 전략을 다시 구현해야 합니다.</li>
<li>접두사 지원 - 아직 클래스에 접두사를 구성할 수 있는 방법이 없지만, 반드시 다시 제공할 것입니다.</li>
<li>Safelists 및 blocklists - 아직 Tailwind에게 특정 클래스를 생성하도록 강제할 수도, 생성하지 못하도록 막을 수도 없습니다.</li>
<li>!important 구성 지원 - 지금은 모든 유틸리티가 !important와 함께 생성될 수 있는 방법이 없지만, 구현할 계획이 있습니다.</li>
<li>theme() 함수 지원 - 지금은 var()를 사용할 수 있기 때문에 새 프로젝트에는 필요 없지만, 역호환성을 위해 구현할 예정입니다.</li>
<li>독립형 CLI - 새 엔진을 위한 독립형 CLI에 대해서는 아직 작업하지 않았지만, v4.0 릴리스 전에 반드시 구현할 것입니다.</li>
</ul>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>Tailwind CSS 4는 웹 개발자들이 작업 흐름을 최적화하고 아름다운 반응형 웹사이트를 만드는 데 유용한 강력하고 다재다능한 도구입니다. 성능 향상, 확장된 색상 팔레트, 개선된 사용자 정의 기능, 새로운 유틸리티 클래스, 접근성에 중점을 둔 Tailwind CSS 4는 개발자들에게 필수 도구가 될 것입니다. 작은 프로젝트든 대규모 응용프로그램이든, Tailwind CSS 4는 웹 디자인을 현실로 만드는 데 필요한 기능과 유연성을 제공합니다.</p>
<p>❤️ 만약 제 작업을 좋아하신다면, 제를 팔로우하고 구독해주세요 ❤️</p>
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
<li>나를 팔로우하세요</li>
<li>구독하기</li>
<li>LinkedIn</li>
<li>Front-end World를 방문하고 구독하세요.</li>
</ul>
</div></template>
