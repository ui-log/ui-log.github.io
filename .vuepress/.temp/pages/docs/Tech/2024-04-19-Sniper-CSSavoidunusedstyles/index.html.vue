<template><div><h2 id="앱-성능-향상하기" tabindex="-1"><a class="header-anchor" href="#앱-성능-향상하기" aria-hidden="true">#</a> 앱 성능 향상하기</h2>
<p>안녕하세요! 이 짧은 안내서에서는 CSS를 212kB에서 32.1kB로 줄이면서 (84.91%의 코드 감소) 여전히 3rd-party 스타일 라이브러리를 사용하고 앱의 미학을 완전히 유지하는 방법을 공유하고 싶어요.</p>
<p>이 예제 프로젝트는 Astro를 사용하여 만들어졌어요.</p>
<p><img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_0.png" alt="이미지"></p>
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
<p>우리는 이런 과정을 거치게 될 거에요:</p>
<ul>
<li>3rd-party CSS에서 필요할 때만 사용하는 맞춤 CSS로 변경하기.</li>
<li>다른 CSS 코드 리소스를 검토하고 개선하기.</li>
<li>CSS 구조 작성 방법을 다시 생각해보기.</li>
</ul>
<p>시작해볼까요? ✨</p>
<h1 id="_1-3rd-party-css에서-필요할-때만-사용하는-맞춤-css로-변경하기" tabindex="-1"><a class="header-anchor" href="#_1-3rd-party-css에서-필요할-때만-사용하는-맞춤-css로-변경하기" aria-hidden="true">#</a> 1. 3rd-party CSS에서 필요할 때만 사용하는 맞춤 CSS로 변경하기.</h1>
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
<p>일일 프론트엔드 개발자의 일상에서 스타일 라이브러리(예: 부트스트랩, Tailwind)를 사용하는 것은 흔한 작업입니다.</p>
<p>만약 여러분이 Lighthouse에 의해 보고된 사이트 성능을 향상시켜본 적이 있다면, 몇 가지 권장 사항 중에는 사용되지 않는 스타일/스크립트 코드를 줄이라는 것을 알고 계실 겁니다.</p>
<p>Chrome의 개발자 도구에는 Coverage라는 매우 흥미로운 도구가 제공되는데, 이는 앱과의 완전한 상호작용 이후에 전혀 사용되지 않은 코드 섹션이 무엇인지 알 수 있도록 도와줍니다.*</p>
<p>*이에 대해 자세히 이해하려면 Coverage 도구 사용 설명서를 확인해 보세요.</p>
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
<h2 id="우리가-있는-곳" tabindex="-1"><a class="header-anchor" href="#우리가-있는-곳" aria-hidden="true">#</a> 우리가 있는 곳.</h2>
<p>이 예제를 부트스트랩을 사용하여 공유하려고 합니다. 우선 주목해야 할 첫 번째 것은 프로젝트 종속성으로 사용하지 않고 CDN을 통해 사용한다는 것이며, 그 이유가 있습니다. 왜냐하면 그 이유를 알게 될 것입니다.</p>
<p>부트스트랩의 CDN을 사용하여 우리가 무엇을 하는지 간단히 되짚어보겠습니다.</p>
<p>공식 부트스트랩 문서에서는 전체 미니파이드 패키지(225.97 kB)를 설치하라고 안내합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> integrity<span class="token operator">=</span><span class="token string">"sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"</span> crossorigin<span class="token operator">=</span><span class="token string">"anonymous"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>하지만 이 경우에는 Bootstrap 라이브러리 전체를 가져오고 싶지 않습니다. 필요한 것만 가져오려고 합니다. 필요한 내용을 확인하려면 루트 CSS CDN의 제공 페이지로 이동하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>cdn<span class="token punctuation">.</span>jsdelivr<span class="token punctuation">.</span>net<span class="token operator">/</span>npm<span class="token operator">/</span>bootstrap@<span class="token number">5.3</span><span class="token number">.0</span><span class="token operator">-</span>alpha2<span class="token operator">/</span>dist<span class="token operator">/</span>css<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>내 경우에는 유틸리티.css (104.09 kB)와 그리드.css (68.28 kB)만 필요하다는 것을 알고 있습니다.```</p>
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
<p>이 시점에서, 우리는 다음과 같은 커버리지를 가지고 있어요. 사용되지 않는 스타일이 92%라구요.</p>
<p>너무 많아요.</p>
<p><img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_1.png" alt="Sniper-CSSavoidunusedstyles_1"></p>
<p><img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_2.png" alt="Sniper-CSSavoidunusedstyles_2"></p>
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
<p>지금은 부트스트랩에 집중해보죠. 🧙‍♂️ 마법 같은 기술이 나옵니다.</p>
<h2 id="실습" tabindex="-1"><a class="header-anchor" href="#실습" aria-hidden="true">#</a> 실습</h2>
<p>사이트에서 사용된 CSS만 내보내려고 애썼는데.. 가능할까요?</p>
<p>그렇게 된다면 좋겠죠?</p>
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
<p>여기 내 최신 기여물이 있어요:</p>
<p><strong>'Sniper CSS'</strong>:</p>
<p><img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_3.png" alt="Sniper CSS"></p>
<p>설치한 후 사용하기 정말 쉬워요. 사이트를 열고 확장 프로그램을 클릭한 후 '스나이퍼 활성화' 버튼을 클릭하면 플러그인이 작업을 수행해줄 거에요!</p>
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
<p>이 확장 프로그램은 사이트의 모든 가능한 시나리오를 수집하려고 합니다: 다양한 클라이언트 디스플레이, 사용자 에이전트, 다크 및 라이트 테마, 전체 페이지 스크롤, 각 요소의 가상 상태 등등.</p>
<p>자동으로 최적화된 CSS 파일을 생성하고 다운로드할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Astrojs와 VSCode를 사용 중이라면 이 정규식을 사용해 :where(.astro-whatever)를 모두 빈 공간으로 교체하세요.</span>
<span class="token comment">// 이렇게 하면 Astro가 추가한 모든 사용자 정의 클래스를 제거하여 스타일을 깨지 않게 합니다.</span>
<span class="token operator">:</span>where\<span class="token punctuation">(</span>\<span class="token punctuation">.</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token punctuation">[</span>aA<span class="token operator">-</span>zZ<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token punctuation">[</span>aA<span class="token operator">-</span>zZ<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">+</span>\<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="결과" tabindex="-1"><a class="header-anchor" href="#결과" aria-hidden="true">#</a> 결과</h2>
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
<p>우리는 여전히 기본 Astro 스타일을 사용하고 있지만 이제는 Sniper-CSS bootstrap_custom.css 파일을 갖고 있어요.</p>
<p><img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_4.png" alt="이미지1"></p>
<p><img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_5.png" alt="이미지2"></p>
<p>우리는 212kB의 스타일로 시작했지만 지금은 딱 32.1kB만 남았어요. 🔥</p>
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
<p>작업 후 스타일이 약간 증가했습니다. 이는 일부 인라인 코드나 로컬 스타일이 중복되었을 수 있기 때문입니다.</p>
<h2 id="_2-다른-css-코드-리소스를-검토하고-개선하기" tabindex="-1"><a class="header-anchor" href="#_2-다른-css-코드-리소스를-검토하고-개선하기" aria-hidden="true">#</a> 2. 다른 CSS 코드 리소스를 검토하고 개선하기</h2>
<p>스크린샷에서 본바와 같이, 우리가 개선할 수 있는 다른 CSS 리소스가 있다는 것을 알 수 있었습니다. 예를 들어, 구글 폰트 등이 있습니다.</p>
<p>구글 폰트 사용에 대한 커버리지 탭의 내용을 확인해보세요.</p>
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
<img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_6.png" />
<p>사용되고 있지 않은 코드들이 있는 것 같네요. 이건 옳지 않죠. 하지만 우리가 얼마나 많은 코드가 불필요한지 확인할 수 있어요.</p>
<p>이 경우에는 Google Fonts가 다른 언어를 위해 Montserrat와 MuseoModerno를 지원하고 있습니다.</p>
<p>더 많은 정보를 알고 싶다면 Quora를 확인해보세요. 또는 Google이 이에 대해 어떻게 생각하는지 읽어볼 수도 있어요.</p>
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
<p>다시 한번 이 예시 사이트에서 전 세계 모든 언어에 대한 완전한 지원을 원하지 않는다는 것을 알았어요. 라틴어만 지원하면 돼요.</p>
<p>라틴어 언어를 지원하는 모든 글꼴 무게를 사용하는 &quot;fonts.css&quot;라는 새 파일을 만드세요. 차이는 여기 있어요:</p>
<p><img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_7.png" alt="fonts.css"></p>
<h3 id="_3-css-구조를-어떻게-다시-작성할지-다시-생각해보세요" tabindex="-1"><a class="header-anchor" href="#_3-css-구조를-어떻게-다시-작성할지-다시-생각해보세요" aria-hidden="true">#</a> 3. CSS 구조를 어떻게 다시 작성할지 다시 생각해보세요.</h3>
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
<p>만약 CSS를 개선하고 싶다면, 여기 몇 가지 조언이 있어요:</p>
<h2 id="서버에서-로컬-콘텐츠로-변환하기" tabindex="-1"><a class="header-anchor" href="#서버에서-로컬-콘텐츠로-변환하기" aria-hidden="true">#</a> 서버에서 로컬 콘텐츠로 변환하기</h2>
<p>개발 단계에서는 보통 3rd-party 콘텐츠를 사용하겠지만, 프로젝트를 완료하면 라이브러리와 함께 작업한 내용에 기반한 사용자 정의 CSS 파일과 구성을 사용하게 될 거예요.</p>
<p>이것을 기억해두세요. 이것은 사이트 메트릭스를 개선하려고 시도할 때 이상적으로 한 번 해야 하는 작업이에요.</p>
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
<h2 id="어떤-규칙을-잃어버리셨나요-혹은-반복된-규칙을-발견하셨나요" tabindex="-1"><a class="header-anchor" href="#어떤-규칙을-잃어버리셨나요-혹은-반복된-규칙을-발견하셨나요" aria-hidden="true">#</a> 어떤 규칙을 잃어버리셨나요? 혹은 반복된 규칙을 발견하셨나요?</h2>
<p>'Sniper CSS' 확장 프로그램은 모든 가능한 CSS를 내보냅니다. 그 역할을 충분히 잘 하지만 향후 업그레이드를 통해 더 개선해야 할 부분이 있습니다. 따라서 스타일을 교체하고 무엇이 누락되었는지 확인해보세요.</p>
<p>스타일 손실을 피하기 위해 Keyframes 및 기타 At-Rules를 따로 파일에 보관해두는 것이 좋습니다.</p>
<h1 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h1>
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
<p>Coverage를 비교해보겠습니다. 이전과 이후에 어떻게 변화되었는지 살펴보죠.</p>
<h2 id="이전" tabindex="-1"><a class="header-anchor" href="#이전" aria-hidden="true">#</a> 이전:</h2>
<p>사용하지 않는 코드의 92%를 포함한 212kB의 스타일이 있었습니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_8.png" alt="이미지"></p>
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
<h2 id="이후" tabindex="-1"><a class="header-anchor" href="#이후" aria-hidden="true">#</a> 이후:</h2>
<p>이제 사용하지 않는 코드의 비율이 26%인 스타일 시트가 32.1kB 있습니다. 🔥</p>
<p><img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_9.png" alt="이미지"></p>
<p>전체 CSS 양을 84.91% 줄였습니다. 🎉</p>
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
<p>하지만 더 줄일 수도 있어요!</p>
<p>만일 여러분이 사이트에서 사용되지 않는 스타일을 0%로 만드는 방법을 알고 있다면, 여러분의 글을 공유해 주세요!!!</p>
<p>참고로, 이 글은 Three.js, GSAP, 그리고 Scrollbooster와 같은 리치 인터랙션 라이브러리를 사용하여 앱의 성능을 상당히 향상시키는 방법에 대해 쓰는 시리즈 중 일부에요.</p>
<p><img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_10.png" alt="Sniper-CSSavoidunusedstyles_10.png"></p>
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
<img src="@source/docs/Tech/2024-04-19-Sniper-CSSavoidunusedstyles/img/Sniper-CSSavoidunusedstyles_11.png" />
<p>프로젝트 저장소: <a href="https://github.com/GiustiRo/as-next-astro" target="_blank" rel="noopener noreferrer">https://github.com/GiustiRo/as-next-astro<ExternalLinkIcon/></a></p>
</div></template>
