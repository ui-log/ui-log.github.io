<template><div><p>Tailwind를 많이 사용하는 편인데, 그 유연성 때문이죠. Tailwind 4.0은 빠르고 더 좋을 거에요. 변경 사항을 살펴보도록 해요.</p>
<p><img src="@source/docs/Nextjs/2024-04-04-Tailwind40isComingandLooksInteresting/img/Tailwind40isComingandLooksInteresting_0.png" alt="제목 없음"></p>
<h2 id="간단한-구성" tabindex="-1"><a class="header-anchor" href="#간단한-구성" aria-hidden="true">#</a> 간단한 구성</h2>
<p>현재 버전에서는 tailwind.config.js 파일을 만들고 css 파일에 세 가지 지시문을 추가해야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@tailwind 기본<span class="token punctuation">;</span>
@tailwind 구성 요소<span class="token punctuation">;</span>
@tailwind 유틸리티<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 하나의 지시문으로 변경하고, 설정 대신 특별한 지시문 @theme을 사용하여 css 변수를 사용해야 합니다. 아래와 같이 정의합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token string">"tailwindcss"</span><span class="token punctuation">;</span>

@theme <span class="token punctuation">{</span>
  <span class="token operator">--</span>font<span class="token operator">-</span>family<span class="token operator">-</span>display<span class="token operator">:</span> <span class="token string">"Satoshi"</span><span class="token punctuation">,</span> <span class="token string">"sans-serif"</span><span class="token punctuation">;</span>

  <span class="token operator">--</span>breakpoint<span class="token operator">-</span>3xl<span class="token operator">:</span> 1920px<span class="token punctuation">;</span>

  <span class="token operator">--</span>color<span class="token operator">-</span>neon<span class="token operator">-</span>pink<span class="token operator">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span><span class="token number">71.7</span><span class="token operator">%</span> <span class="token number">0.25</span> <span class="token number">360</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>neon<span class="token operator">-</span>lime<span class="token operator">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span><span class="token number">91.5</span><span class="token operator">%</span> <span class="token number">0.258</span> <span class="token number">129</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">--</span>color<span class="token operator">-</span>neon<span class="token operator">-</span>cyan<span class="token operator">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span><span class="token number">91.3</span><span class="token operator">%</span> <span class="token number">0.139</span> <span class="token number">195.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>현재 버전에서는 css 변수를 정의하고 구성에서 사용해야 했습니다. 구성에 정의한대로 구성 요소에서 사용할 수 있습니다.```</p>
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
<p>이제 위와 같이 사용할 수 있는 색상 중에 예를 들면, 노랑색-라임이 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"text-neon-lime"</span><span class="token operator">></span>예쁜 텍스트<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="그들은-rust를-사용할-것이에요" tabindex="-1"><a class="header-anchor" href="#그들은-rust를-사용할-것이에요" aria-hidden="true">#</a> 그들은 Rust를 사용할 것이에요</h2>
<p>만약 깃허브에서 현재 저장소를 확인하면, Rust가 프로젝트에서는 작은 부분을 차지하고 있는 것을 볼 수 있어요. 이 상황을 바꿔야 하는데, 그들은 가장 비용이 많이 드는 부분을 Rust로 다시 작성할 계획이에요.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-04-Tailwind40isComingandLooksInteresting/img/Tailwind40isComingandLooksInteresting_1.png" alt="Tailwind 2.0 is Coming and Looks Interesting"></p>
<p>Also, the new engine should be 35% times smaller, so we can expect a 10x times faster build.</p>
<h2 id="lightning-css" tabindex="-1"><a class="header-anchor" href="#lightning-css" aria-hidden="true">#</a> Lightning CSS</h2>
<p>The new engine will depend on Lightning CSS. We talked about the speed, so this will help as well. From the docs we can see that:</p>
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
<h2 id="언제-릴리스될까요" tabindex="-1"><a class="header-anchor" href="#언제-릴리스될까요" aria-hidden="true">#</a> 언제 릴리스될까요?</h2>
<p>약속은 하기 싫지만 현재 우리는 알파 버전을 사용할 수 있어요.</p>
<h2 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h2>
<p>Tailwind 4.0은 새로운 Vite 플러그인을 제공합니다. 설치는 매우 간단합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install tailwindcss@next @tailwindcss<span class="token operator">/</span>vite@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vite.config.ts</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> tailwindcss <span class="token keyword">from</span> <span class="token string">'@tailwindcss/vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">tailwindcss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 지시문을 사용합니다...</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token string">"tailwindcss"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그게 다야. 새 버전이 기대돼요. 더 많은 기능이 추가되었는데, 모두 읽어보고 싶다면 아래 링크를 확인해보세요. 👇👇👇</p>
<p>출처: Tailwind CSS v4.0에서 진행 중인 작업을 오픈소스로 공개합니다.</p>
<p>이 글이 마음에 들었다면 우리의 성장하는 커뮤니티에 참여하고 싶다면 팔로우 버튼을 눌러주세요. 함께 지식 여행을 떠나봐요.</p>
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
</div></template>
