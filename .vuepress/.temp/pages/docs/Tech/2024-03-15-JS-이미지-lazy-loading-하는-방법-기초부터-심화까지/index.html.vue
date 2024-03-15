<template><div><h1 id="js-이미지-lazy-loading-하는-방법-기초부터-심화까지" tabindex="-1"><a class="header-anchor" href="#js-이미지-lazy-loading-하는-방법-기초부터-심화까지" aria-hidden="true">#</a> JS 이미지 lazy loading 하는 방법 기초부터 심화까지</h1>
<p>이미지 lazy loading은 웹사이트의 로딩 속도를 크게 향상시킬 수 있는 간단한 방법입니다. Lazy loading의 기본 구현은 단 한 줄의 코드를 추가하는 것만으로 이루어집니다. 그러나 lazy loading 경험을 향상시킬 수 있는 더 심화된 기술들도 있습니다. 이러한 기술들을 사용하면 흐릿한 플레이스홀더를 표시하고 플레이스홀더 이미지에서 전체 이미지로의 부드러운 전환을 달성할 수 있습니다. 이 글에서는 lazy loading에 대해 알아야 할 모든 것과 고급 lazy loading 효과를 생성하는 방법에 대해 설명하겠습니다.</p>
<img src="@source/docs/Tech/2024-03-15-JS-이미지-lazy-loading-하는-방법-기초부터-심화까지/img/Lazy-Loading-Images-Basics-to-Advanced_0.png" />
<img src="@source/docs/Tech/2024-03-15-JS-이미지-lazy-loading-하는-방법-기초부터-심화까지/img/Lazy-Loading-Images-Basics-to-Advanced_1.png" />
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
<h1 id="그런데-lazy-loading이-뭔가요" tabindex="-1"><a class="header-anchor" href="#그런데-lazy-loading이-뭔가요" aria-hidden="true">#</a> 그런데 Lazy Loading이 뭔가요?</h1>
<p>Lazy loading은 이미지와 같은 특정 자산의 로딩을 실제로 필요한 시점까지 지연시키는 기술입니다. 특히 이미지에 대해 말하자면, lazy loading은 사용자가 화면에서 이미지가 실제로 보이게 되는 지점까지 스크롤할 때까지 이미지를 다운로드하지 않도록 합니다. 이 접근 방식은 사이트 성능 측면에서 중요한 이점을 제공합니다. 왜냐하면 사용자가 실제로 볼 이미지만 다운로드하기 때문입니다.</p>
<p>Lazy loading은 많은 이미지를 포함하는 웹사이트에 특히 유용합니다. 왜냐하면 사용자가 즉시 보이지 않는 이미지의 불필요한 다운로드를 피함으로써 대역폭을 절약할 수 있기 때문입니다. 빠른 인터넷 연결을 가지고 있거나 일반적으로 작고 최적화된 이미지를 가진 사이트를 브라우징하는 경우에는 lazy loading의 이점을 완전히 이해하기 어려울 수 있습니다. 그러나 많은 사용자들에게는 lazy loading이 게임 체인저가 될 수 있습니다. 특히 인터넷 연결이 느린 사용자들에게 말이죠. 이미지는 사용자가 다운로드해야 하는 가장 큰 자산이기 때문에 빠른 연결이 있더라도 lazy loading 이미지는 웹사이트의 전체 로딩 시간을 줄이는 데 상당한 차이를 만들어 낼 수 있습니다.</p>
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
<h1 id="간단한-lazy-loading" tabindex="-1"><a class="header-anchor" href="#간단한-lazy-loading" aria-hidden="true">#</a> 간단한 Lazy Loading</h1>
<p>이미 언급했듯이 이미지에 대한 lazy loading을 구현하는 것은 매우 간단합니다. 이미지 태그에 단일 속성을 추가하는 것만 필요합니다. 해당 이미지의 &quot;loading&quot; 속성을 &quot;lazy&quot;로 설정하여 lazy loading을 활성화합니다. 그러면 브라우저가 화면의 보이는 부분과의 근접성을 기준으로 이미지를 다운로드할 최적의 시기를 결정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"image.jpg"</span> loading<span class="token operator">=</span><span class="token string">"lazy"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>단점 - 이 기본적인 lazy loading의 가장 큰 단점은 이미지가 완전히 다운로드될 때까지 사용자가 이미지가 있어야 할 자리에 빈 공간을 보게 된다는 것입니다.</p>
<p>앞서 설명한 기본적인 lazy loading 기술은 이미지가 완전히 다운로드될 때까지 사용자가 이미지가 있어야 할 자리에 빈 공간을 보게 되므로 사용자 경험이 좋지 않을 수 있습니다. 사용자 경험을 향상시키기 위해 이어지는 부분에서는 lazy loading을 활용하여 흐릿한 플레이스홀더 이미지를 표시하고 전체 이미지가 다운로드될 때까지 사용자에게 이미지의 시각적 표현을 제공하는 방법에 대해 설명하겠습니다. 이렇게 하면 사용자에게 더 매력적이고 무결점인 경험을 제공할 수 있습니다.</p>
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
<h1 id="고급-lazy-loading" tabindex="-1"><a class="header-anchor" href="#고급-lazy-loading" aria-hidden="true">#</a> 고급 Lazy Loading</h1>
<h1 id="흐릿한-플레이스홀더-이미지-사용하기" tabindex="-1"><a class="header-anchor" href="#흐릿한-플레이스홀더-이미지-사용하기" aria-hidden="true">#</a> 흐릿한 플레이스홀더 이미지 사용하기</h1>
<p>흐릿한 플레이스홀더 이미지를 생성하기 위해서는 원본 이미지의 저해상도 버전을 만들면 됩니다. 이를 달성하는 여러 가지 방법이 있습니다. 예를 들어, BlurHash와 같은 서비스를 사용하거나 Figma와 같은 디자인 도구를 사용하여 이미지의 크기를 수동으로 조정하거나 ffmpeg와 같은 자동화 도구를 사용할 수 있습니다. 이 글에서는 유연성과 쉬운 자동화를 제공하는 ffmpeg를 사용하겠습니다. 플레이스홀더 이미지를 생성하기 위해 다음 명령을 명령줄에서 실행하면 됩니다. 이미지가 위치한 디렉토리에 있는지 확인하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ffmpeg <span class="token operator">-</span>i imageName<span class="token punctuation">.</span>jpg <span class="token operator">-</span>vf scale<span class="token operator">=</span><span class="token number">20</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span> imageName<span class="token operator">-</span>small<span class="token punctuation">.</span>jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령에서 &quot;imageName.jpg&quot;는 원본 이미지 파일의 이름을 나타내며 &quot;imageName-small.jpg&quot;는 생성된 플레이스홀더 이미지 파일의 이름을 나타냅니다. &quot;scale=20:-1&quot; 인</p>
<p>수는 플레이스홀더 이미지의 너비가 20픽셀이 되도록하면서 원본 이미지의 가로세로비를 유지하도록 지정합니다. 너비를 원하는대로 조정할 수 있지만 일반적으로 대부분의 이미지에 대해 20픽셀의 너비가 잘 작동하고 느린 인터넷 연결에서도 거의 즉시 로딩되도록 보장합니다. 이 방법으로 생성된 플레이스홀더 이미지의 크기는 일반적으로 1kB 미만입니다.</p>
<img src="@source/docs/Tech/2024-03-15-JS-이미지-lazy-loading-하는-방법-기초부터-심화까지/img/Lazy-Loading-Images-Basics-to-Advanced_2.png" />
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
<p>작은 플레이스홀더 이미지를 생성한 후, 다음 단계는 <code v-pre>&lt;div&gt;</code> 요소를 생성하고 그 배경 이미지를 이전에 생성한 매우 작은 이미지로 설정하는 것입니다. 이 <code v-pre>&lt;div&gt;</code>는 전체 이미지가 다운로드될 때까지 표시되는 플레이스홀더 이미지로 작동합니다. 다음은 예제 코드 스니펫입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"blurred-img"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CSS에서 .blurred-img 클래스의 스타일링을 정의하여 배경 이미지를 설정하고 모양을 조정하고 올바르게 표시합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>blurred<span class="token operator">-</span>img <span class="token punctuation">{</span>
  background<span class="token operator">-</span>image<span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span>imageName<span class="token operator">-</span>small<span class="token punctuation">.</span>jpg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>repeat<span class="token operator">:</span> no<span class="token operator">-</span>repeat<span class="token punctuation">;</span>
  background<span class="token operator">-</span>size<span class="token operator">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ㄹ이 코드에서 imageName-small.jpg는 ffmpeg 또는 다른 방법을 사용하여 생성한 작은 플레이스홀더 이미지의 파일 이름을 나타냅니다. background-repeat: no-repeat; 속성은 이미지가 반복되지 않도록하고 background-size: cover; 속성은 이미지가 전체 <code v-pre>&lt;div&gt;</code> 요소를 커버하도록합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"blurred-img"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"imageName.jpg"</span> loading<span class="token operator">=</span><span class="token string">"lazy"</span> <span class="token operator">/</span><span class="token operator">></span>
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
<p>이 CSS에서는 이미지가 로드될 때까지 <code v-pre>&lt;img&gt;</code>의 투명도를 0으로 설정하여 숨깁니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>blurred<span class="token operator">-</span>img img <span class="token punctuation">{</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>브라우저가 이미지를 확대시키므로 흐릿한 효과가 자동으로 발생합니다. 더 많은 흐림이 필요한 경우 CSS 필터 속성을 사용하여 .blurred-img 클래스에 흐림 필터를 적용할 수 있습니다. 그러나 이 경우에는 추가적인 흐림이 필요하지 않을 수도 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>blurred<span class="token operator">-</span>img <span class="token punctuation">{</span>
  <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>로딩 효과를 더 향상시키려면 플레이스홀더 이미지에 펄스 애니메이션을 추가할 수 있습니다. 이렇게하면 이미지가 로드되고 있다는 것이 더욱 뚜렷해집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>blurred<span class="token operator">-</span>img<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">inset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> pulse <span class="token number">2</span><span class="token punctuation">.</span>5s infinite<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@keyframes pulse <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token number">50</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 CSS 코드를 추가하면 플레이스홀더 이미지에 펄스 애니메이션이 적용되어 서서히 나타났다가 사라지는 효과가 생깁니다.</p>
<p>이미지가 로드되면 전체 이미지를 페이드 인시키기 위해 JavaScript 코드를 추가해야합니다. 아래는 코드의 분해 과정입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"blurred-img"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"imageName.jpg"</span> loading<span class="token operator">=</span><span class="token string">"lazy"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>COPY</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> blurredImageDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".blurred-image"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> img <span class="token operator">=</span> blurredImageDiv<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">loaded</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  blurredImageDiv<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"loaded"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>img<span class="token punctuation">.</span>complete<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">loaded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  img<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"load"</span><span class="token punctuation">,</span> loaded<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>JavaScript 코드에서 .blurred-img div와 그 안의 <code v-pre>&lt;img&gt;</code> 요소를 선택합니다. 이미지가 이미로드되었는지 확인하기 위해 이미지의 complete 속성을 확인합니다. 로드되었다면 loaded() 함수를 직접 호출합니다. 그렇지 않으면 이미지에 로드 이벤트를 위한 이벤트 리스너를 추가합니다. 로드 이벤트는 이미지가 로드될 때 발생하며 이미지가 로드되면 loaded() 함수가 호출됩니다. 이 함수는 .blurred-img div에 loaded 클래스를 추가합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>blurred<span class="token operator">-</span>img <span class="token punctuation">{</span>
  background<span class="token operator">-</span>repeat<span class="token operator">:</span> no<span class="token operator">-</span>repeat<span class="token punctuation">;</span>
  background<span class="token operator">-</span>size<span class="token operator">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>blurred<span class="token operator">-</span>img<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">inset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> pulse <span class="token number">2</span><span class="token punctuation">.</span>5s infinite<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>text<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@keyframes pulse <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token number">50</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>blurred<span class="token operator">-</span>img<span class="token punctuation">.</span>loaded<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>blurred<span class="token operator">-</span>img img <span class="token punctuation">{</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> opacity 250ms ease<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>blurred<span class="token operator">-</span>img<span class="token punctuation">.</span>loaded img <span class="token punctuation">{</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>CSS 코드에서 몇 가지 변경 사항을 만듭니다. 이미지가 로드되면 .blurred-img::before 요소에서 애니메이션과 콘텐츠를 제거하여 펄스 애니메이션을 중지합니다. 또한 .blurred-img img 요소에 트랜지션 속성을 추가하여 loaded 클래스가 .blurred-img div에 추가되면 이미지가 부드럽게 페이드 인되도록합니다. 마지막으로 .blurred-img img의 투명도를 1</p>
<p>로 설정하여 로드되면 이미지가 표시되도록합니다.</p>
<p>이러한 변경 사항을 적용하면 최종 결과는 흐릿한 플레이스홀더 이미지가 로드된 후 전체 이미지가 페이드 인되는 것입니다. 개발자 도구에서 네트워크 속도를 조정하여 로딩 애니메이션을 확인할 수 있습니다.</p>
<h1 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h1>
<p>이미지 lazy loading은 웹사이트의 사용자 경험을 개선하는 간단한 기술입니다. 이미지를 필요한 시점까지 로딩을 지연시킴으로써 대역폭을 절약하고 성능을 최적화할 수 있습니다. 단 한 줄의 코드로 기본적인 lazy loading을 구현할 수 있습니다. 또한 저해상도 플레이스홀더 이미지를 생성하고 흐릿한 효과나 애니메이션과 같은 시각적 효과를 추가하여 로딩 프로세스를 향상시킬 수 있습니다. 부드러운 전환을 위해 JavaScript를 사용하여 전체 이미지가 로드된 후에 이미지를 페이드 인할 수 있습니다. 이러한 기술을 적용하여 효율적인 이미지 로딩과 웹사이트에서의 긍정적인 사용자 경험을 보장할 수 있습니다.</p>
</div></template>
