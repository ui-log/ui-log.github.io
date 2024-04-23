<template><div><p><img src="@source/docs/Tech/2024-04-19-TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode/img/TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode_0.png" alt="매직 버튼을 사용해야 하는 이유"></p>
<p>매직 버튼이 필요한 이유는 누가 원하지 않겠어요? 항상 작동하는 버튼!</p>
<p>예상대로 작동하고 원하는 위치에 두고 지정한 크기로 유지되는 버튼입니다. 이미 충분히 레이아웃과 반응성 문제가 있으니 나쁜 버튼 문제를 더할 필요는 없을 것 같아요. 버튼이라고 해서 왜 엔지니어링을 과도하게 해야 할까요?</p>
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
<p>한 번의 코드 작성으로 끝나지만 믿지 않는다면, 다음에서 코드를 검토할 수 있어요:</p>
<ul>
<li>CodePen</li>
<li>GitHub</li>
</ul>
<p>그런데 마법의 버튼을 만든 방법을 이해하고 싶다면 계속 읽어주세요!</p>
<h1 id="html-button-button-정말-간단하지-않아요" tabindex="-1"><a class="header-anchor" href="#html-button-button-정말-간단하지-않아요" aria-hidden="true">#</a> HTML <code v-pre>&lt;button&gt;&lt;/button&gt;</code>, 정말 간단하지 않아요!</h1>
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
<p>버튼을 누르면 어떤 일이 발생한다면 <code v-pre>button``/button</code>를 사용하세요.</p>
<ul>
<li>버튼 타입을 추가하십시오: 이 버튼이 어떻게 동작하는지 브라우저에 알리기 위해 또는 다른 버튼 타입.</li>
<li>버튼이 아이콘만 포함하고 &quot;텍스트가 없는&quot; 경우 aria-label=&quot;설명&quot;을 추가하십시오.</li>
<li>버튼이 비활성화된 경우 disabled 및 aria-disabled=&quot;true&quot;을 추가하십시오.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"Button"</span><span class="token operator">></span>일반<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"별"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"Button"</span><span class="token operator">></span><span class="token operator">*</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> disabled aria<span class="token operator">-</span>disabled<span class="token operator">=</span><span class="token string">"true"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"Button"</span><span class="token operator">></span>비활성화<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>버튼을 누를 때 다른 페이지로 이동한다면 Anchor 요소를 사용하세요.</p>
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
<li>이 링크의 역할을 브라우저에 지정하기 위해 role=&quot;button&quot;을 추가하세요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span> role<span class="token operator">=</span><span class="token string">"button"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"Button"</span><span class="token operator">></span>링크 버튼<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그러나 어떤 것을 사용해야할지 모르는 경우를 위해서 다음을 읽어보는 것을 추천합니다: Anchors vs Buttons</p>
<p>만약 버튼으로 사용할 다른 것을 생각하고 있다면, Mozilla의 현명한 사람들이 왜 이것이 바보 같은 아이디어인지에 대해 알려주는 메시지를 읽어보세요.</p>
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
<h1 id="css로-정말-잘-작동하는-것" tabindex="-1"><a class="header-anchor" href="#css로-정말-잘-작동하는-것" aria-hidden="true">#</a> CSS로 정말 잘 작동하는 것!</h1>
<p><img src="@source/docs/Tech/2024-04-19-TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode/img/TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode_1.png" alt="버튼 이미지"></p>
<p>내가 고백하고 싶은 게 있어; 나는 버튼에 집착하는 사람이야!</p>
<p>항상 완벽한 버튼을 만드는 데 흥미를 느꼈어요. 새로운 라이브러리를 시도할 때는 그들이 어떻게 버튼을 만들었는지 먼저 확인해요. 심지어 버튼에 특별히 관심을 가지고 라이브러리를 만들었어요. 그 라이브러리는 오직 중요한 요소만 높은 품질로 제공하고 있어요. 거기에는 더 많이 오버엔진이 된 버튼도 있을 거예요. 만약 이를 받고 싶거나 고품질 리액트 컴포넌트를 이용해 프론트엔드 세계를 개선하고 싶다면 Moon-RockUI를 방문해주세요.</p>
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
<p>1.0.0 버전을 빠르게 출시할 수 있도록 도와주세요!</p>
<h1 id="시작하기-전에-기본-사항" tabindex="-1"><a class="header-anchor" href="#시작하기-전에-기본-사항" aria-hidden="true">#</a> 시작하기 전에 기본 사항:</h1>
<ul>
<li>나는 rem과 em을 자주 사용하고 다른 css 단위를 사용할 거에요. 더 알고 싶다면, 이 글을 읽어보시는 걸 추천해요: CSS 단위 설명</li>
<li>일반적으로 나는 CSS 사용자 지정 속성을 내 코드에 사용해. 그것은 제게 수퍼파워를 주지만, 이 글에서는 사용하지 않을 거에요</li>
</ul>
<h1 id="버튼-크기" tabindex="-1"><a class="header-anchor" href="#버튼-크기" aria-hidden="true">#</a> 버튼 크기:</h1>
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
<p><img src="@source/docs/Tech/2024-04-19-TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode/img/TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode_2.png" alt="The Button that every Front-End developer should use the written once-and-forgotten code"></p>
<p>여기서 중요한 점은 고정 크기를 지정하는 것이 아니라, 가장 큰 크기와 가장 작은 크기에 제한을 둘 것입니다. 버튼 크기는 주로 폰트 크기에 따라 달라질 것이기 때문에 크기를 결정하기 위해 기본적인 디자인 규칙을 따를 것입니다. 더 자세한 내용을 알고 싶다면 이 문서를 참고하는 것을 추천합니다: 버튼 디자인 - 웹사이트 및 모바일 앱용</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>Button <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> fit<span class="token operator">-</span>content<span class="token punctuation">;</span>
    max<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">,</span> 100vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
@supports <span class="token function">not</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">width</span><span class="token operator">:</span> fit<span class="token operator">-</span>content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span>Button <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="width-fit-content" tabindex="-1"><a class="header-anchor" href="#width-fit-content" aria-hidden="true">#</a> width: fit-content;</h1>
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
<li>fit-content를 사용하면 사용 가능한 공간을 사용하지만 max-content보다는 절대 넘지 않습니다.</li>
</ul>
<h1 id="max-width-min-100-100vw" tabindex="-1"><a class="header-anchor" href="#max-width-min-100-100vw" aria-hidden="true">#</a> max-width: min(100%, 100vw);</h1>
<ul>
<li>요소가 달성할 수 있는 가장 큰 너비를 지정합니다.</li>
<li>min()을 사용하여 100%와 parent element의 크기에 연결된 최소값을 선택하고, parent element의 크기의 반일 수도 있는 화면 크기와 연결된 100vw입니다.
이렇게 함으로써 원하는 경우 요소가 부모 크기나 화면 크기로 확장되어 오버플로우 없이 표시할 수 있습니다.</li>
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
<h1 id="버튼-레이아웃-디스플레이-및-정렬" tabindex="-1"><a class="header-anchor" href="#버튼-레이아웃-디스플레이-및-정렬" aria-hidden="true">#</a> 버튼 레이아웃, 디스플레이 및 정렬:</h1>
<p>이전에는 display: block을 사용했고, 그 다음에는 display: inline을 사용했었어요. 그런데 React를 공부하다가 MUI를 발견했는데, 그들이 버튼을 어떻게 만들었는지 살펴보았더니 inline-flex를 사용했다는 걸 알게 되었어요!</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>Button <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>flex<span class="token punctuation">;</span>
 justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
 align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
 vertical<span class="token operator">-</span>align<span class="token operator">:</span> middle<span class="token punctuation">;</span>
 text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Flex의 마법을 사용하여 이 버튼 안에 있는 모든 항목을 중앙에 위치시킬 거에요. 함께 사용해보세요:</p>
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
<li>justify-content</li>
<li>align-items</li>
</ul>
<p>일반적으로 텍스트 정렬 및 수직 정렬과 같은 속성을 사용하여:</p>
<ul>
<li>추가 이미지나 이상한 텍스트가 항상 중앙에 있도록 함.</li>
<li>어떤 이유로 인해 플렉스가 작동하지 않을 때, 오래된 브라우저를 사용하는 사람을 위한 브라우저 지원을 위해.</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-19-TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode/img/TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode_3.png" alt="이미지"></p>
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
<h1 id="버튼-속성-패딩-및-글꼴-크기" tabindex="-1"><a class="header-anchor" href="#버튼-속성-패딩-및-글꼴-크기" aria-hidden="true">#</a> 버튼 속성, 패딩 및 글꼴 크기:</h1>
<p>이 곳에는이 버튼이 모든 경우와 모든 크기에서 작동하는 마법이 담겨 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>Button <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>5em<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem<span class="token punctuation">)</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">.</span>5em<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">.</span>5rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>875rem<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">.</span>7rem <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">.</span>7vw<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">.</span>375rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
@supports <span class="token function">not</span> <span class="token punctuation">(</span><span class="token parameter">font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>875rem<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">.</span>7rem <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">.</span>7vw<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">.</span>375rem<span class="token punctuation">)</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span>Button <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 max-width 트릭보다 더 과도해 보일 수 있지만, 이 코드를 한 번만 복사하면 모든 경우에 작동합니다.</p>
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
<li>padding: max(0.5em, 0.5rem) max(1.5em, 1.5rem); 여기서의 요령은 max() 함수를 사용하는 것입니다. 주목할 점은 한 번은 rem으로 한 번은 em으로 동일한 값을 사용한다는 것이지만 왜 그렇게 할까요?</li>
</ul>
<p>max() 함수의 목적은 어떤 값이 더 큰지를 선택하는 것입니다. 보통 em이 더 큽니다. 만약 버튼의 글꼴 크기가 24px이라고 가정한다면요.</p>
<p>그렇다면 왜 이런 일을 하는 걸까요? 일반적으로 12px와 같이 작은 글꼴 크기를 사용할 때, em만 사용한다면 버튼의 크기가 너무 좁아질 수 있습니다. 글꼴 크기와 관련이 있기 때문입니다. 그러나 rem은 가장 크게 됩니다.</p>
<p>우리는 이 요령을 사용하여 버튼 안의 최소 공간을 정의하고 동시에 글꼴 크기에 따라 버튼이 커지도록 허용합니다.</p>
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
<p><img src="@source/docs/Tech/2024-04-19-TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode/img/TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode_4.png" alt="이미지"></p>
<ul>
<li>font-size: clamp(0.875rem, 0.7rem + 0.7vw, 1.375rem); 솔직히, 여기에서 이러한 값을 선택하는 방법을 설명할 수 없습니다. 다른 기사가 필요할 것입니다.</li>
</ul>
<p>간단히 말해서 clamp()를 사용하면 화면 크기에 반응하는 글꼴을 사용할 수 있습니다. 최소값은 0.875rem이고 최대값은 1.375rem입니다(예를 들어).</p>
<p>웹 개발 전반적으로 도움이 될 것이라고 생각되는 이 기사들을 꼭 읽으시기를 권장합니다:</p>
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
<li>CSS clamp()를 사용하여 글꼴 크기를 선형으로 조절하기</li>
<li>CSS Clamp를 사용하여 유동적인 글꼴 크기 스케일 만들기</li>
<li>CSS Clamp로 현대적인 유동적 타이포그래피 만들기</li>
</ul>
<h1 id="버튼-위의-체리" tabindex="-1"><a class="header-anchor" href="#버튼-위의-체리" aria-hidden="true">#</a> 버튼 위의 체리:</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>Button <span class="token punctuation">{</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    white<span class="token operator">-</span>space<span class="token operator">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    user<span class="token operator">-</span>select<span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">appearance</span><span class="token operator">:</span> button<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>overflow: hidden; 버튼 바깥으로 나오는 것을 방지합니다.</li>
<li>white-space: nowrap; 텍스트가 한 줄을 초과하지 않도록합니다.</li>
<li>cursor: pointer; 커서가 링크를 나타내는 포인터입니다. 일반적으로 손가락을 가리키는 이미지입니다.</li>
<li>user-select: none; 요소 및 하위 요소의 텍스트를 선택할 수 없도록합니다.</li>
<li>'user-select'는 Safari, iOS의 Safari에서 지원되지 않습니다. 버튼에 중요한 텍스트가 포함되어 있으면 허용할 수 있습니다.</li>
<li>appearance: button; CSS 속성을 사용하여 UI 컨트롤의 네이티브 모양을 제어합니다. 이는 운영 체제의 테마에 기반한 것입니다.</li>
<li>'appearance'는 iOS의 Safari에서 15.4버전에서 지원되지 않습니다.</li>
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
<h1 id="버튼-호버-및-포커스" tabindex="-1"><a class="header-anchor" href="#버튼-호버-및-포커스" aria-hidden="true">#</a> 버튼 호버 및 포커스:</h1>
<img src="@source/docs/Tech/2024-04-19-TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode/img/TheButtonthateveryFront-Enddevelopershouldusethewrittenonce-and-forgottencode_5.png" />
<p>아무것도 특별한 것은 없어요. 다만 버튼이 다른 상황에서 어떻게 동작하는지 결정해 보았고, CSS의 왕으로부터 배운 멋진 포커스 링 트릭을 사용했어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>Button <span class="token punctuation">{</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>4em <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>6em <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">253</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span> box<span class="token operator">-</span>shadow 400ms cubic<span class="token operator">-</span><span class="token function">bezier</span><span class="token punctuation">(</span><span class="token number">0.66</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.27</span><span class="token punctuation">,</span> <span class="token number">1.15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>Button<span class="token operator">:</span>active<span class="token punctuation">,</span>
<span class="token punctuation">.</span>Button<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>Button<span class="token operator">:</span>focus<span class="token operator">-</span>visible <span class="token punctuation">{</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">.</span>3em <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">.</span>5em <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">253</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>Button<span class="token operator">:</span>focus <span class="token punctuation">{</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
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
<h1 id="결론-무료-선물" tabindex="-1"><a class="header-anchor" href="#결론-무료-선물" aria-hidden="true">#</a> 결론 + 무료 선물!</h1>
<p>약속을 지켰기를 바랍니다!</p>
<p>“한 번 쓰고 잊혀진 코드&quot;를 이제 코드를 복사하러 가보세요. 내가 너에게 약속한 것을 이행하고 싶어요. 다음 프로젝트에서 좀 더 복잡한 버튼을 사용하고 싶다면 Moon-RockUI를 방문해주세요. 거기서 최고의 버튼을 만드는 데 도움을 줄 수 있어요.</p>
<p>버전 1.0.0 곧 출시됩니다!</p>
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
<h1 id="무료-선물" tabindex="-1"><a class="header-anchor" href="#무료-선물" aria-hidden="true">#</a> 무료 선물:</h1>
<p>언제나 완벽하게 만들려고 노력해요.</p>
<p>이 글을 완벽하게 만들기 위해 노력하는 것처럼, 제 웹사이트들도 가능한 최상의 품질로 만들기 위해 노력해요. 제 웹사이트가 항상 최상의 품질을 유지할 수 있도록 헌신하는 마음으로, 이 헌신을 여러분에게 전하고 싶어요 — 그래서 무료 선물을 즐기세요!</p>
<p>무료 웹사이트 속도 최적화 서비스 — 무료로 웹사이트 성능 향상하세요.</p>
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
<p>이 통계는 당신을 깜짝 놀라게 하려는 것이 아니에요. 제 무료 서비스에 가입하라는 게 목적이 아니에요.</p>
<ul>
<li>페이지 로드 시간이 1초 지연되면 이탈률이 32% 증가할 수 있어요.</li>
<li>성능 문제를 경험한 온라인 쇼핑자 중 79%가 웹사이트로 되돌아오지 않고, 그 중 44%가 나쁜 경험을 친구들에게 공유할 거에요.</li>
</ul>
<p>하지만 당신을 탓하기보다는 워드프레스와 템플릿을 탓해야겠죠! — 무료 웹사이트 속도 최적화 서비스</p>
<h1 id="전체-코드" tabindex="-1"><a class="header-anchor" href="#전체-코드" aria-hidden="true">#</a> 전체 코드:</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>Button <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> fit<span class="token operator">-</span>content<span class="token punctuation">;</span>
    max<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">,</span> 100vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    vertical<span class="token operator">-</span>align<span class="token operator">:</span> middle<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    <span class="token literal-property property">appearance</span><span class="token operator">:</span> button<span class="token punctuation">;</span>
    user<span class="token operator">-</span>select<span class="token operator">:</span> none<span class="token punctuation">;</span>
    text<span class="token operator">-</span>transform<span class="token operator">:</span> capitalize<span class="token punctuation">;</span>
    white<span class="token operator">-</span>space<span class="token operator">:</span> nowrap<span class="token punctuation">;</span>
    text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>5em<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem<span class="token punctuation">)</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">.</span>5em<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">.</span>5rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>875rem<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">.</span>7220363289rem <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">.</span>7648183556vw<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">.</span>375rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>4em <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>6em <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">253</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span> box<span class="token operator">-</span>shadow 400ms cubic<span class="token operator">-</span><span class="token function">bezier</span><span class="token punctuation">(</span><span class="token number">0.66</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.27</span><span class="token punctuation">,</span> <span class="token number">1.15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>Button<span class="token operator">:</span>active<span class="token punctuation">,</span>
<span class="token punctuation">.</span>Button<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>Button<span class="token operator">:</span>focus<span class="token operator">-</span>visible <span class="token punctuation">{</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">.</span>3em <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">.</span>5em <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">253</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>Button<span class="token operator">:</span>focus <span class="token punctuation">{</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
@supports <span class="token function">not</span> <span class="token punctuation">(</span><span class="token parameter">font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>875rem<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">.</span>7rem <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">.</span>7vw<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">.</span>375rem<span class="token punctuation">)</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span>Button <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
@supports <span class="token function">not</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">width</span><span class="token operator">:</span> fit<span class="token operator">-</span>content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span>Button <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
