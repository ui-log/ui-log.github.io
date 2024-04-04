<template><div><h2 id="플러터-앱에서-도트-인디케이터-패키지를-구현하는-방법을-배워보세요-사용자-경험을-향상시킬-수-있습니다" tabindex="-1"><a class="header-anchor" href="#플러터-앱에서-도트-인디케이터-패키지를-구현하는-방법을-배워보세요-사용자-경험을-향상시킬-수-있습니다" aria-hidden="true">#</a> 플러터 앱에서 도트 인디케이터 패키지를 구현하는 방법을 배워보세요. 사용자 경험을 향상시킬 수 있습니다.</h2>
<p><img src="@source/docs/Tech/2024-03-28-FlutterPackageoftheDayPercentIndicator/img/FlutterPackageoftheDayPercentIndicator_0.png" alt="이미지"></p>
<p>제목: 플러터 앱에서 도트 인디케이터 패키지를 활용하여 내비게이션을 향상시켜보세요.</p>
<h2 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개:</h2>
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
<p>플러터 앱 개발에서는 온보딩 화면과 같은 다양한 화면 또는 섹션 간 전환 시 사용자에게 시각적 피드백을 제공하기 위해 인디케이터가 필요합니다. Dot Indicators 패키지는 플러터 애플리케이션에 도트 인디케이터를 통합하는 놀라운 쉬운 방법을 제공합니다. 이 글에서는 Dot Indicators 패키지를 통합하는 방법, 장점, 구현 단계 및 내비게이션 및 사용자 경험을 향상시키기 위한 사용 예제에 대해 배우게 됩니다.</p>
<h2 id="dot-indicators-패키지란" tabindex="-1"><a class="header-anchor" href="#dot-indicators-패키지란" aria-hidden="true">#</a> Dot Indicators 패키지란?</h2>
<p>Dot Indicators 패키지는 플러터 애플리케이션에 도트 인디케이터를 통합하는 놀라운 쉬운 방법을 제공합니다. 이러한 인디케이터는 주로 페이지 또는 섹션 모음 내에서 현재 위치를 시각화하는 데 사용됩니다. 예를 들어 이미지 캐러셀, 온보딩 화면 등에서 사용됩니다.</p>
<h2 id="dot-indicators-패키지의-장점" tabindex="-1"><a class="header-anchor" href="#dot-indicators-패키지의-장점" aria-hidden="true">#</a> Dot Indicators 패키지의 장점:</h2>
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
<li>사용자에 대한 시각적 피드백: 점 지시자는 페이지나 섹션 세트 내 현재 위치를 나타내어 사용자에게 명확한 시각적 피드백을 제공합니다.</li>
<li>쉬운 사용자 정의: 이 패키지를 사용하면 점의 크기, 색상, 간격 및 기타 속성을 쉽게 사용자 정의하여 앱의 디자인 요구를 맞출 수 있습니다.</li>
<li>유연성: 점 지시자는 PageViews, ListViews 또는 사용자 정의 네비게이션 위젯을 포함한 다양한 UI 구성 요소에 통합할 수 있습니다.</li>
<li>사용자 상호 작용: 시각적 네비게이션을 제공함으로써, 점 지시자는 사용자 참여를 향상시키고 전반적인 사용자 경험을 개선합니다.</li>
</ul>
<h2 id="dot-indicators-패키지-통합-방법" tabindex="-1"><a class="header-anchor" href="#dot-indicators-패키지-통합-방법" aria-hidden="true">#</a> Dot Indicators 패키지 통합 방법:</h2>
<p>Flutter 프로젝트에서 Dot Indicators 패키지를 구현하고 활용하는 단계를 살펴봅시다:</p>
<p>단계 1: 종속성 추가
pubspec.yaml 파일을 열고 Dot Indicators 패키지를 종속성으로 추가하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">dependencies</span><span class="token operator">:</span>
  <span class="token literal-property property">flutter</span><span class="token operator">:</span>
    <span class="token literal-property property">sdk</span><span class="token operator">:</span> flutter
  <span class="token literal-property property">dot_indicator</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">2.0</span><span class="token number">.0</span>  # 최신 버전으로 대체
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단계 2: 의존성 설치 다음 명령을 터미널에서 실행하여 패키지와 그 의존성을 가져오고 설치합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>flutter pub <span class="token keyword">get</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>단계 3: 패키지 가져오기 Dart 파일에서 Dot Indicators 패키지를 가져올 위치에 가져오세요:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'package:dot_indicator/dot_indicator.dart'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>스텝 4: 도트 인디케이터를 구현하세요. 적합한 도트 인디케이터 위젯 유형을 선택하고 (예: DotIndicator, SlidingDotIndicator) 귀하의 요구에 맞게 해당 속성을 사용자 정의하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">DotIndicator</span><span class="token punctuation">(</span>
  <span class="token literal-property property">itemCount</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">currentIndex</span><span class="token operator">:</span> _currentPage<span class="token punctuation">,</span>
  <span class="token literal-property property">indicatorRadius</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dotRadius</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dotColor</span><span class="token operator">:</span> Colors<span class="token punctuation">.</span>grey<span class="token punctuation">,</span>
  <span class="token literal-property property">dotSelectedColor</span><span class="token operator">:</span> Colors<span class="token punctuation">.</span>blue<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예시: 이 예시에서 pageLength는 표시할 총 도트 수를 나타내고 currentIndexPage는 강조할 위치 (활성 도트)를 나타냅니다.```</p>
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
<li>간단한 점 표시기:</li>
</ul>
<p><img src="https://miro.medium.com/v2/resize:fit:308/0*_vjhv_rQ7crzRHjI.gif" alt="dot-indicator"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">DotsIndicator</span><span class="token punctuation">(</span>
 <span class="token literal-property property">dotsCount</span><span class="token operator">:</span> pageLength<span class="token punctuation">,</span>
 <span class="token literal-property property">position</span><span class="token operator">:</span> currentIndexPage<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>사용자 정의 색상:</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">DotsIndicator</span><span class="token punctuation">(</span>
  <span class="token literal-property property">dotsCount</span><span class="token operator">:</span> pageLength<span class="token punctuation">,</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> currentIndexPage<span class="token punctuation">,</span>
  <span class="token literal-property property">decorator</span><span class="token operator">:</span> <span class="token function">DotsDecorator</span><span class="token punctuation">(</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> Colors<span class="token punctuation">.</span>black87<span class="token punctuation">,</span> <span class="token comment">// 비활성 상태 색상</span>
    <span class="token literal-property property">activeColor</span><span class="token operator">:</span> Colors<span class="token punctuation">.</span>redAccent<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>사용자 지정 크기 및 모양:</li>
</ol>
<p>기본 점 크기와 모양을 변경할 수 있습니다. 비활성 상태 및 활성 상태의 모양을 선택할 수 있습니다. 기본적으로 점의 모양은 CircleBorder이므로, 활성 상태의 점을 둥근 사각형 모양으로 바꾸려면 activeShape를 변경해야 합니다.</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:486/0*4d2CpQGgn3DE98Qr.gif" alt="image"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">DotsIndicator</span><span class="token punctuation">(</span>
  <span class="token literal-property property">dotsCount</span><span class="token operator">:</span> pageLength<span class="token punctuation">,</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> currentIndexPage<span class="token punctuation">,</span>
  <span class="token literal-property property">decorator</span><span class="token operator">:</span> <span class="token function">DotsDecorator</span><span class="token punctuation">(</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token keyword">const</span> Size<span class="token punctuation">.</span><span class="token function">square</span><span class="token punctuation">(</span><span class="token number">9.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">activeSize</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Size</span><span class="token punctuation">(</span><span class="token number">18.0</span><span class="token punctuation">,</span> <span class="token number">9.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">activeShape</span><span class="token operator">:</span> <span class="token function">RoundedRectangleBorder</span><span class="token punctuation">(</span>borderRadius<span class="token operator">:</span> BorderRadius<span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>사용자 지정 모양:</li>
</ol>
<p>기본 점 모양을 변경할 수 있습니다. 기본적으로 CircleBorder입니다. 활성화되지 않은 상태와 활성 상태의 점 모양을 변경할 수 있습니다.</p>
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
<img src="https://miro.medium.com/v2/resize:fit:458/0*qce82mHkrwb1ujXl.gif" />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">DotsIndicator</span><span class="token punctuation">(</span>
  <span class="token literal-property property">dotsCount</span><span class="token operator">:</span> pageLength<span class="token punctuation">,</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> currentIndexPage<span class="token punctuation">,</span>
  <span class="token literal-property property">decorator</span><span class="token operator">:</span> <span class="token function">DotsDecorator</span><span class="token punctuation">(</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Border</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">activeShape</span><span class="token operator">:</span> <span class="token function">RoundedRectangleBorder</span><span class="token punctuation">(</span>borderRadius<span class="token operator">:</span> BorderRadius<span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>더 많은 사용자 정의를 할 수 있어요.</p>
<p>이게 이번 글의 전부에요. 이것을 잘 활용해서 사용자 선호에 맞게 사용해 보세요.</p>
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
<p>제 도움이 되었기를 바라며, 제 정보와 업데이트를 계속 받고 싶다면 플러터에 관한 더 많은 유용한 정보를 얻기 위해 나를 팔로우해 주세요. 이 기사가 도움이 되었다면 반드시 박수를 보내주세요. 읽어 주셔서 감사합니다!</p>
<p>즐거운 플러터 개발하시길 ✅!</p>
</div></template>
