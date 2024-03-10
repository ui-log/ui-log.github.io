<template><div><h1 id="html-css-js를-활용한-음악-플레이어-만들기" tabindex="-1"><a class="header-anchor" href="#html-css-js를-활용한-음악-플레이어-만들기" aria-hidden="true">#</a> HTML, CSS, JS를 활용한 음악 플레이어 만들기</h1>
<p>이 글에서는 HTML, CSS 및 JavaScript를 사용하여 음악 플레이어와 재생 목록을 만드는 방법을 배웁니다.
음악, 재생, 일시 정지를 위한 썸네일이 있습니다. JavaScript를 사용하여 이전 및 다음 곡 기능을 구현할 수 있습니다.
또한 곡 타이머를 클릭하여 곡 타이밍을 건너뛸 수도 있습니다.</p>
<img src="@source/docs/HTML/2024-03-10-HTML-CSS-JS로-음악-플레이어-만들기/img/Create-Music-Player-With-Playlist-using-HTMLCSS-and-JavaScript_0.png" />
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
<h1 id="음악-플레이어를-위한-html-코드" tabindex="-1"><a class="header-anchor" href="#음악-플레이어를-위한-html-코드" aria-hidden="true">#</a> 음악 플레이어를 위한 HTML 코드</h1>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>player<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>player__header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>player__img player__img--absolute slider<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>player__button player__button--absolute--nw playlist<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://physical-authority.surge.sh/imgs/icon/playlist.svg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>playlist-icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>player__button player__button--absolute--center play<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://physical-authority.surge.sh/imgs/icon/play.svg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>play-icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://physical-authority.surge.sh/imgs/icon/pause.svg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pause-icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slider__content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img slider__img<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://physical-authority.surge.sh/imgs/1.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cover<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token comment">&lt;!-- 재생목록 이미지들 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>player__controls<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>player__button back<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://physical-authority.surge.sh/imgs/icon/back.svg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>back-icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>player__context slider__context<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slider__name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>player__title slider__title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>player__button next<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://physical-authority.surge.sh/imgs/icon/next.svg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>next-icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>progres<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>progres__filled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>player__playlist list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 재생 목록 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>음악 플레이어의 모든 HTML 코드가 여기에 있습니다. 이제 CSS 및 JavaScript 없이 출력을 볼 수 있습니다. 그런 다음 음악 플레이어를 위해 CSS 및 JavaScript를 작성하겠습니다.</p>
<p>CSS 및 JavaScript 없이 음악 플레이어의 HTML 코드 출력입니다.</p>
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
<img src="@source/docs/HTML/2024-03-10-HTML-CSS-JS로-음악-플레이어-만들기/img/Create-Music-Player-With-Playlist-using-HTMLCSS-and-JavaScript_1.png" />
<img src="@source/docs/HTML/2024-03-10-HTML-CSS-JS로-음악-플레이어-만들기/img/Create-Music-Player-With-Playlist-using-HTMLCSS-and-JavaScript_2.png" />
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
<h1 id="음악-플레이어를-위한-css-코드" tabindex="-1"><a class="header-anchor" href="#음악-플레이어를-위한-css-코드" aria-hidden="true">#</a> 음악 플레이어를 위한 CSS 코드</h1>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"https://fonts.googleapis.com/css2?family=Quicksand:wght@700&amp;display=swap"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">--parent-height</span><span class="token punctuation">:</span> 20em<span class="token punctuation">;</span>
  <span class="token property">--duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
  <span class="token property">--duration-text-wrap</span><span class="token punctuation">:</span> 12s 1.5s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.82<span class="token punctuation">,</span> 0.82<span class="token punctuation">,</span> 1<span class="token punctuation">,</span> 1.01<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--cubic-header</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--duration<span class="token punctuation">)</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.71<span class="token punctuation">,</span> 0.21<span class="token punctuation">,</span> 0.3<span class="token punctuation">,</span> 0.95<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--cubic-slider</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--duration<span class="token punctuation">)</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.4<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--cubic-play-list</span><span class="token punctuation">:</span> 0.35s <span class="token function">var</span><span class="token punctuation">(</span>--duration<span class="token punctuation">)</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0.85<span class="token punctuation">,</span> 0.11<span class="token punctuation">,</span> 1.64<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--cubic-slider-context</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> -0.01<span class="token punctuation">,</span> 1<span class="token punctuation">,</span> 1.01<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">html *,
html *::before,
html *::after</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">scrollbar-width</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #e5e7e9<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Quicksand"</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> background-color <span class="token function">var</span><span class="token punctuation">(</span>--cubic-slider<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.img</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">object-fit</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.list</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.uppercase</span> <span class="token punctuation">{</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 17.15em<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.22em<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 1.35em<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--parent-height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__header</span> <span class="token punctuation">{</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 0 0.4em<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 5.85em<span class="token punctuation">;</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.95em 0.6em 0 1.2em<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 6px 1px #0000001f<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> height <span class="token function">var</span><span class="token punctuation">(</span>--cubic-header<span class="token punctuation">)</span><span class="token punctuation">,</span> box-shadow <span class="token function">var</span><span class="token punctuation">(</span>--duration<span class="token punctuation">)</span><span class="token punctuation">,</span> padding <span class="token function">var</span><span class="token punctuation">(</span>--duration<span class="token punctuation">)</span> ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__header.open-header</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__img</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 3.22em<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 3.22em<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 1.32em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__img--absolute</span> <span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 1.4em<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.slider</span> <span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> width <span class="token function">var</span><span class="token punctuation">(</span>--cubic-header<span class="token punctuation">)</span><span class="token punctuation">,</span> height <span class="token function">var</span><span class="token punctuation">(</span>--cubic-header<span class="token punctuation">)</span><span class="token punctuation">,</span> top <span class="token function">var</span><span class="token punctuation">(</span>--cubic-header<span class="token punctuation">)</span><span class="token punctuation">,</span> left <span class="token function">var</span><span class="token punctuation">(</span>--cubic-header<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.slider.open-slider</span> <span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 14.6em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.slider__content</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform <span class="token function">var</span><span class="token punctuation">(</span>--cubic-slider<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.slider__img</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">brightness</span><span class="token punctuation">(</span>75%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.slider__name,
.slider__title</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text-wrap</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> pre<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> fit-content<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> text-wrap <span class="token function">var</span><span class="token punctuation">(</span>--duration-text-wrap<span class="token punctuation">)</span> infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> text-wrap</span> <span class="token punctuation">{</span>
  <span class="token selector">75%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>-51.5%<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>-51.5%<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__button</span> <span class="token punctuation">{</span>
  <span class="token property">all</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 2.5em<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 2.5em<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.playlist</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--duration<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.slider.open-slider .playlist</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform <span class="token function">var</span><span class="token punctuation">(</span>--cubic-play-list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__button--absolute--nw</span> <span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 5.5%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 5.5%<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__button--absolute--center</span> <span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">img[alt="pause-icon"]</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__controls</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 77%<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 0.5em 0<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">will-change</span><span class="token punctuation">:</span> contents<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform <span class="token function">var</span><span class="token punctuation">(</span>--cubic-header<span class="token punctuation">)</span><span class="token punctuation">,</span> width <span class="token function">var</span><span class="token punctuation">(</span>--cubic-header<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__controls.move</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 88%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>-1.1em<span class="token punctuation">,</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--parent-height<span class="token punctuation">)</span> - 153%<span class="token punctuation">)</span><span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__context</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.8<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> capitalize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.slider__context</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 56.28%<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0.2em<span class="token punctuation">;</span>
  <span class="token property">will-change</span><span class="token punctuation">:</span> contents<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> width <span class="token function">var</span><span class="token punctuation">(</span>--cubic-header<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--duration<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--cubic-slider-context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> opacity</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">90%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__controls.move .slider__context</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 49.48%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.7em<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #00000086<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.progres</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0.25em<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">touch-action</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #e5e7ea<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> width <span class="token function">var</span><span class="token punctuation">(</span>--cubic-header<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__controls.move .progres</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 98%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.progres__filled</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #78adfe<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.progres__filled::before</span> <span class="token punctuation">{</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0.35em<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">" "</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0.35em<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #5781bd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__playlist</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1.05em 0.9em 0 1.2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__playlist::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__song</span> <span class="token punctuation">{</span>
  <span class="token comment">/* gap: 0 .65em ; */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0.7em<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 0.1em solid #d8d8d859<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__song .player__context</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 0.65em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__song-name</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.88em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.player__song-time</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.65em<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #00000079<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> fit-content<span class="token punctuation">;</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.audio</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none <span class="token important">!important</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기 음악 플레이어의 CSS 코드가 있습니다.</p>
<p>CSS 및 JavaScript가 추가된 음악 플레이어의 최종 출력입니다.</p>
<img src="@source/docs/HTML/2024-03-10-HTML-CSS-JS로-음악-플레이어-만들기/img/Create-Music-Player-With-Playlist-using-HTMLCSS-and-JavaScript_3.png" />
<h1 id="음악-플레이어-및-재생-목록을-위한-javascript-코드" tabindex="-1"><a class="header-anchor" href="#음악-플레이어-및-재생-목록을-위한-javascript-코드" aria-hidden="true">#</a> 음악 플레이어 및 재생 목록을 위한 JavaScript 코드</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Designed by: Mauricio Bucardo</span>
<span class="token comment">// Original image: https://dribbble.com/shots/6957353-Music-Player-Widget</span>
<span class="token string">"use strict"</span><span class="token punctuation">;</span>
<span class="token comment">// add elemnts</span>
<span class="token keyword">const</span> bgBody <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"#e5e7e9"</span><span class="token punctuation">,</span> <span class="token string">"#ff4545"</span><span class="token punctuation">,</span> <span class="token string">"#f8ded3"</span><span class="token punctuation">,</span> <span class="token string">"#ffc382"</span><span class="token punctuation">,</span> <span class="token string">"#f5eda6"</span><span class="token punctuation">,</span> <span class="token string">"#ffcbdc"</span><span class="token punctuation">,</span> <span class="token string">"#dcf3f3"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
<span class="token keyword">const</span> player <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".player"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> playerHeader <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".player__header"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> playerControls <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".player__controls"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> playerPlayList <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">".player__song"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> playerSongs <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">".audio"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> playButton <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".play"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> nextButton <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".next"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> backButton <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".back"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> playlistButton <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".playlist"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> slider <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".slider"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sliderContext <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".slider__context"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sliderName <span class="token operator">=</span> sliderContext<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".slider__name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sliderTitle <span class="token operator">=</span> sliderContext<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".slider__title"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sliderContent <span class="token operator">=</span> slider<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".slider__content"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sliderContentLength <span class="token operator">=</span> playerPlayList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sliderWidth <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> song <span class="token operator">=</span> playerSongs<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isPlay <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pauseIcon <span class="token operator">=</span> playButton<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"img[alt = 'pause-icon']"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> playIcon <span class="token operator">=</span> playButton<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"img[alt = 'play-icon']"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> progres <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".progres"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> progresFilled <span class="token operator">=</span> progres<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".progres__filled"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isMove <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token comment">// creat functions</span>
<span class="token keyword">function</span> <span class="token function">openPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  playerHeader<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"open-header"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  playerControls<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"move"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  slider<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"open-slider"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">closePlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  playerHeader<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"open-header"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  playerControls<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"move"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  slider<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"open-slider"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">=</span> index <span class="token operator">||</span> count<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> sliderContentLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  left <span class="token operator">=</span> <span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> sliderWidth<span class="token punctuation">;</span>
  left <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> sliderContentLength <span class="token operator">*</span> sliderWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>
  sliderContent<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">translate3d(-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%, 0, 0)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">back</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">=</span> index <span class="token operator">||</span> count<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  left <span class="token operator">=</span> <span class="token punctuation">(</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> sliderWidth<span class="token punctuation">;</span>
  left <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  sliderContent<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">translate3d(-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%, 0, 0)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  count<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">changeSliderContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sliderContext<span class="token punctuation">.</span>style<span class="token punctuation">.</span>animationName <span class="token operator">=</span> <span class="token string">"opacity"</span><span class="token punctuation">;</span>
  sliderName<span class="token punctuation">.</span>textContent <span class="token operator">=</span> playerPlayList<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".player__title"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>
  sliderTitle<span class="token punctuation">.</span>textContent <span class="token operator">=</span> playerPlayList<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".player__song-name"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>sliderName<span class="token punctuation">.</span>textContent<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> textWrap <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"span"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    textWrap<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">"text-wrap"</span><span class="token punctuation">;</span>
    textWrap<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> sliderName<span class="token punctuation">.</span>textContent <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> sliderName<span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>
    sliderName<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    sliderName<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>textWrap<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>sliderTitle<span class="token punctuation">.</span>textContent<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> textWrap <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"span"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    textWrap<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">"text-wrap"</span><span class="token punctuation">;</span>
    textWrap<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> sliderTitle<span class="token punctuation">.</span>textContent <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> sliderTitle<span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>
    sliderTitle<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    sliderTitle<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>textWrap<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">changeBgBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> bgBody<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">selectSong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  song <span class="token operator">=</span> playerSongs<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> playerSongs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">!=</span> song<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      item<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      item<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isPlay<span class="token punctuation">)</span> song<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">changeSliderContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">changeBgBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">selectSong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">playSong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>song<span class="token punctuation">.</span>paused<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    song<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    playIcon<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span>
    pauseIcon<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"block"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    song<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    isPlay <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    playIcon<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    pauseIcon<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">progresUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> progresFilledWidth <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentTime <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>duration<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">"%"</span><span class="token punctuation">;</span>
  progresFilled<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> progresFilledWidth<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isPlay <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>duration <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> sliderContentLength <span class="token operator">&amp;&amp;</span> song<span class="token punctuation">.</span>currentTime <span class="token operator">==</span> song<span class="token punctuation">.</span>duration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    playIcon<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"block"</span><span class="token punctuation">;</span>
    pauseIcon<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    isPlay <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">scurb</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// If we use e.offsetX, we have trouble setting the song time, when the mousemove is running</span>
  <span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>clientX <span class="token operator">-</span> progres<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">/</span> progres<span class="token punctuation">.</span>offsetWidth<span class="token punctuation">)</span> <span class="token operator">*</span> song<span class="token punctuation">.</span>duration<span class="token punctuation">;</span>
  song<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">durationSongs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>duration <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> min <span class="token operator">=</span> <span class="token string">"0"</span> <span class="token operator">+</span> min<span class="token punctuation">;</span>
  <span class="token keyword">let</span> sec <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>duration <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>sec <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> sec <span class="token operator">=</span> <span class="token string">"0"</span> <span class="token operator">+</span> sec<span class="token punctuation">;</span>
  <span class="token keyword">const</span> playerSongTime <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>min<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sec<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">closest</span><span class="token punctuation">(</span><span class="token string">".player__song"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".player__song-time"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>playerSongTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">changeSliderContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// add events</span>
sliderContext<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> openPlayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
sliderContext<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"animationend"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>sliderContext<span class="token punctuation">.</span>style<span class="token punctuation">.</span>animationName <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
playlistButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> closePlayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
nextButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
backButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">back</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
playButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isPlay <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token function">playSong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
playerSongs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">song</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  song<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"loadeddata"</span><span class="token punctuation">,</span> durationSongs<span class="token punctuation">)</span><span class="token punctuation">;</span>
  song<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"timeupdate"</span><span class="token punctuation">,</span> progresUpdate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
progres<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"pointerdown"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">scurb</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  isMove <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"pointermove"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isMove<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">scurb</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    song<span class="token punctuation">.</span>muted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"pointerup"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isMove <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  song<span class="token punctuation">.</span>muted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
playerPlayList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  item<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">back</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기 음악 플레이어 및 재생 목록의 JavaScript 코드가 있습니다.</p>
<h1 id="음악-플레이어의-최종-출력" tabindex="-1"><a class="header-anchor" href="#음악-플레이어의-최종-출력" aria-hidden="true">#</a> 음악 플레이어의 최종 출력</h1>
<img src="@source/docs/HTML/2024-03-10-HTML-CSS-JS로-음악-플레이어-만들기/img/Create-Music-Player-With-Playlist-using-HTMLCSS-and-JavaScript_4.png" />
<p>이제 HTML, CSS, JavaScript로 완성된 음악 플레이어를 확인할 수 있습니다. 음악 플레이어를 사용하여 음악을 즐기시길 바랍니다.</p>
<p>HTML, CSS, JavaScript를 사용하여 간단한 음악 플레이어에 대한 자주 묻는 질문 (FAQ)</p>
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
<h1 id="이-음악-플레이어에서-음악-파일을-첨부해야-하나요-아니면-온라인-음악으로-작동하나요" tabindex="-1"><a class="header-anchor" href="#이-음악-플레이어에서-음악-파일을-첨부해야-하나요-아니면-온라인-음악으로-작동하나요" aria-hidden="true">#</a> 이 음악 플레이어에서 음악 파일을 첨부해야 하나요, 아니면 온라인 음악으로 작동하나요?</h1>
<p>네, 여기에 음악 파일을 추가하고 HTML 코드의 src 속성에 연결할 수 있으며 잘 작동합니다. 또한 온라인 오디오 URL과 연결할 수 있습니다. 현재 이 코드는 온라인 오디오 URL과 작동합니다.</p>
<h1 id="이-음악-플레이어-프로젝트에서-어떤-프로그래밍-언어를-사용했나요" tabindex="-1"><a class="header-anchor" href="#이-음악-플레이어-프로젝트에서-어떤-프로그래밍-언어를-사용했나요" aria-hidden="true">#</a> 이 음악 플레이어 프로젝트에서 어떤 프로그래밍 언어를 사용했나요?</h1>
<p>우리는 음악 플레이어의 구조를 만들기 위해 HTML 코드를 사용하고, 플레이어에 스타일을 적용하기 위해 CSS 코드를 사용하며, JavaScript를 사용하여 음악을 제어합니다.</p>
</div></template>
