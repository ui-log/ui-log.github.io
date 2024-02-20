<template><div><h1 id="html-css로-이미지-수평-중앙-정렬하는-방법" tabindex="-1"><a class="header-anchor" href="#html-css로-이미지-수평-중앙-정렬하는-방법" aria-hidden="true">#</a> html css로 이미지 수평 중앙 정렬하는 방법</h1>
<div class="custom-container tip"><p class="custom-container-title">💡이 포스팅을 읽으면</p>
<p>브라우저 사이즈에 상관 없이 이미지를 수평 중앙 정렬할 수 있습니다.</p>
</div>
<p>이미지 수평 정렬하는 케이스는 여러가지가 있는데요. <br>
<strong>브라우저 사이즈에 상관없이 이미지를 화면의 수평 중앙 정렬 시키는 방법</strong>에 대해 알아보겠습니다.</p>
<img src="@source/docs/CSS/2022-12-22-html-css로-이미지-반응형-중앙-정렬하는-방법/img/1.png"  />
<p>수평 정렬이면 그냥 <code v-pre>margin: auto</code> 쓰면 되는거 아냐? 라고 생각하실 수 있지만<br>
이미지보다 너비가 작은 레이아웃에서도 이미지를 중앙 정렬 시킬 때는 <code v-pre>margin: auto</code> 속성만으로는 동작이 안됩니다.</p>
<p>이미지 수평 정렬의 경우 이미지를 감싸고 있는 요소의 상태에 따라서 나눠서 생각해볼 수 있는데요.
아래와 같이 두 가지 케이스로 나누어서 정리해보겠습니다.</p>
<ol>
<li>전체 레이아웃이 고정 너비를 가지는 경우</li>
<li>전체 레이아웃의 너비와 상관 없는 정렬방법</li>
</ol>
<h3 id="_1-전체-레이아웃이-고정-너비를-가지는-경우" tabindex="-1"><a class="header-anchor" href="#_1-전체-레이아웃이-고정-너비를-가지는-경우" aria-hidden="true">#</a> 1. 전체 레이아웃이 고정 너비를 가지는 경우</h3>
<p>이미지가 전체 레이아웃의 너비보다 큰 경우가 있을 수 있는데요.
이런 경우에도 이미지를 중앙 정렬 시킬 수 있습니다. <br>
예를 들어 이미지의 너비는 1920, wrapper의 최소 너비는 1420으로 고정이 되어있을 경우에 아래와 같이 중앙정렬 시킬 수 있습니다.</p>
<h4 id="_1-1-wrapper의-최소-width-값을-갖는-태그로-이미지-감싸기" tabindex="-1"><a class="header-anchor" href="#_1-1-wrapper의-최소-width-값을-갖는-태그로-이미지-감싸기" aria-hidden="true">#</a> 1.1 wrapper의 최소 width 값을 갖는 태그로 이미지 감싸기</h4>
<p>1920사이즈의 이미지를 고정 레이아웃 너비인 1420px 인 div로 감싸줍니다.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>banner<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>banner_img_wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./img/@collections_head.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1920<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>445<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>banner_img<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.banner</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #8abefa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.banner_img_wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1420px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2022-12-22-html-css로-이미지-반응형-중앙-정렬하는-방법/img/2.png"  />
<h4 id="_1-2-banner-img-wrapper중앙정렬" tabindex="-1"><a class="header-anchor" href="#_1-2-banner-img-wrapper중앙정렬" aria-hidden="true">#</a> 1.2 <code v-pre>banner_img_wrapper</code>중앙정렬</h4>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.banner_img_wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1420px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2022-12-22-html-css로-이미지-반응형-중앙-정렬하는-방법/img/3.png"  />
<p>이렇게 이미지를 감싸는 요소에 추가하면 <code v-pre>banner_img_wrapper</code>가 항상 화면 중앙에 위치하게됩니다. <br>
하지만 실제 이미지의 위치 값은 <code v-pre>banner_img_wrapper</code>를 기준으로 시작하기 때문에 우측으로 치우치게 됩니다. <br>
1920사이즈의 이미지는 1420 요소에 넣게 되면 500px이 넘치게 되므로 이것의 절반만큼 이동시켜준다면 이미지 또한 화면의 중앙에 올 수 있습니다.</p>
<h4 id="_1-3-이미지-위치-보정" tabindex="-1"><a class="header-anchor" href="#_1-3-이미지-위치-보정" aria-hidden="true">#</a> 1-3 이미지 위치 보정</h4>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.banner_img</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -250px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2022-12-22-html-css로-이미지-반응형-중앙-정렬하는-방법/img/4.png"  />
<img src="@source/docs/CSS/2022-12-22-html-css로-이미지-반응형-중앙-정렬하는-방법/img/5.png"  />
<p>이미지가 중앙 정렬된 모습을 확인하실 수 있습니다. <br>
이런 방법은 레이아웃도 1420px로 고정되어있고 이미지도 1920px로 고정되어있는 경우에만 사용할 수 있다는 제약이 있습니다. <br>
요즘 서비스의 경우 이렇게 고정 너비를 사용하는 서비스가 많지 않기 때문에 이렇게 해결할 수 있는 경우는 드물 것이라고 생각되네요.</p>
<h3 id="_2-wrapper의-사이즈에-상관-없는-정렬방법" tabindex="-1"><a class="header-anchor" href="#_2-wrapper의-사이즈에-상관-없는-정렬방법" aria-hidden="true">#</a> 2. wrapper의 사이즈에 상관 없는 정렬방법</h3>
<p>그럼 이제 고정 레이아웃이 아닌 레이아웃의 너비에 상관 없이
이미지를 수평 중앙 정렬할 수 있는 방법에 대해서 정리해봅니다.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>banner<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./img/@collections_head.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1920<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>445<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>banner_img<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.banner</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #8abefa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.banner_img</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이번에는 이미지를 감싸는 요소는 없이 작업이 가능합니다.</p>
<ol>
<li>이미지를 화면의 절만만큼 오른쪽으로 이동</li>
<li>이미지를 이미지의 절반만큼 왼쪽으로 이동</li>
</ol>
<p>위와 같은 방식으로 이미지 위치를 이동시키면 <strong>레이아웃의 너비에 상관 없이 항상 이미지는 중앙에 위치</strong>할 수 있습니다.</p>
<h4 id="_2-1-이미지를-화면의-절만만큼-오른쪽으로-이동" tabindex="-1"><a class="header-anchor" href="#_2-1-이미지를-화면의-절만만큼-오른쪽으로-이동" aria-hidden="true">#</a> 2.1 이미지를 화면의 절만만큼 오른쪽으로 이동</h4>
<p>left:50% 속성을 통해서 현재 레이아웃에 50% 지점에서 이미지가 위치할 수 있도록 작성해줍니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.banner_img</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2022-12-22-html-css로-이미지-반응형-중앙-정렬하는-방법/img/6.png"  />
<h4 id="_2-2-이미지를-이미지의-절반만큼-왼쪽으로-이동" tabindex="-1"><a class="header-anchor" href="#_2-2-이미지를-이미지의-절반만큼-왼쪽으로-이동" aria-hidden="true">#</a> 2.2 이미지를 이미지의 절반만큼 왼쪽으로 이동</h4>
<p>그 다음에는 이미지를 왼쪽으로 이미지 사이즈의 절반만큼 이동시켜야합니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.banner_img</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -960px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이미지 사이즈의 절반인 960만큼 margin-left의 - 값으로 이동시켰는데요. <br>
이렇게 이미지의 사이즈가 고정적인 경우에는 css에 값을 넣어두는 방식으로 작성할 수 있지만
이미지의 값이 유동적일 경우 이렇게 값을 지정해둘 수 없는데요.</p>
<p>그럴 경우에는 아래와 같이 transform속성을 통해서 작성할 수 있습니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.banner_img</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2022-12-22-html-css로-이미지-반응형-중앙-정렬하는-방법/img/7.png"  />
<h4 id="_2-3-스크롤-블락" tabindex="-1"><a class="header-anchor" href="#_2-3-스크롤-블락" aria-hidden="true">#</a> 2.3 스크롤 블락</h4>
<p>이런 방식으로 이미지를 중앙에 위치시키게 되면
이미지 사이즈가 브라우저 사이즈보다 크게 되기 때문에
스크롤이 발생하기 때문에 이미지를 감싸는 태그에 <code v-pre>overflow:hidden</code>을 줘야합니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.banner</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이런식으로 이미지를 수평 중앙 정렬하는 방법에 대해서 정리해보았습니다.
다음은 이미지를 수직 정렬하는 방법에 대해서 정리해보도록 하겠습니다.</p>
</div></template>
