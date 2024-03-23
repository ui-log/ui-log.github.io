<template><div><p><img src="@source/docs/Tech/2024-03-23-CreatingCustomWidgetswithJSandCSSinWordPress/img/Creating-Custom-Widgets-with-JS-and-CSS-in-WordPress_0.png" alt="Creating-Custom-Widgets-with-JS-and-CSS-in-WordPress_0.png"></p>
<p>WordPress에서 위젯은 사이드바, 풋터 및 기타 위젯 사용 가능한 영역에 다양한 기능과 기능을 추가하는 데 사용되는 중요한 요소입니다. 그러나 기본 위젯 세트는 항상 웹 사이트의 고유한 요구 사항이나 비전을 충족시키지 못할 수 있습니다. 이것이 사용자 정의 위젯이 필요한 이유이며, 웹 사이트의 사용자 경험을 향상시키는 특수한 기능과 스타일을 만들 수 있게 해줍니다. 이 기사에서는 JavaScript(JS)와 Cascading Style Sheets(CSS)를 사용하여 WordPress에서 사용자 정의 위젯을 개발하는 과정을 안내합니다.</p>
<h1 id="wordpress에서-위젯-이해하기" tabindex="-1"><a class="header-anchor" href="#wordpress에서-위젯-이해하기" aria-hidden="true">#</a> WordPress에서 위젯 이해하기</h1>
<p>WordPress의 위젯은 최신 게시물 표시, 검색 막대 또는 사용자 정의 메뉴와 같은 특정 기능을 수행하는 모듈식 블록입니다. 워드프레스 대시 보드를 통해 테마 코드를 수정할 필요 없이 사이트의 지정된 영역에 손쉽게 배치할 수 있도록 설계되었습니다.</p>
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
<p>HTML 태그에 대한 자세한 안내 https://medium.com/@volodymyrzh/html-tags-a-comprehensive-guide-9c00427861b8 을 읽어보세요.</p>
<h1 id="단계-1-위젯-계획하기" tabindex="-1"><a class="header-anchor" href="#단계-1-위젯-계획하기" aria-hidden="true">#</a> 단계 1: 위젯 계획하기</h1>
<p>코드 작성에 들어가기 전에 사용자 정의 위젯의 기능과 디자인을 확인하세요. 위젯이 무엇을 할지, 어떻게 보이며, 사이트의 어디에 사용될지 결정하세요. 소셜 미디어 피드, 맞춤형 연락처 양식, 또는 상호작용 맵 등이 될 수 있지만 명확한 계획은 개발 프로세스를 간소화할 것입니다.</p>
<h1 id="단계-2-위젯-클래스-생성" tabindex="-1"><a class="header-anchor" href="#단계-2-위젯-클래스-생성" aria-hidden="true">#</a> 단계 2: 위젯 클래스 생성</h1>
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
<p>워드프레스 위젯은 WP_Widget 클래스를 확장하는 PHP 클래스입니다. 테마 또는 플러그인 디렉토리에 새 PHP 파일을 만들고 WP_Widget를 확장하는 클래스를 정의하여 시작하세요.</p>
<h1 id="위젯-클래스-예시" tabindex="-1"><a class="header-anchor" href="#위젯-클래스-예시" aria-hidden="true">#</a> 위젯 클래스 예시</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">My_Custom_Widget</span> <span class="token keyword">extends</span> <span class="token class-name">WP_Widget</span> <span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parent</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">__construct</span><span class="token punctuation">(</span>
      <span class="token string">'my_custom_widget'</span><span class="token punctuation">,</span> <span class="token comment">// 기본 ID</span>
      <span class="token string">'내 맞춤 위젯'</span><span class="token punctuation">,</span> <span class="token comment">// 이름</span>
      <span class="token function">array</span><span class="token punctuation">(</span> <span class="token string">'description'</span> <span class="token operator">=></span> <span class="token function">__</span><span class="token punctuation">(</span> <span class="token string">'위젯에 대한 설명.'</span><span class="token punctuation">,</span> <span class="token string">'text_domain'</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token comment">// 인수</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">widget</span><span class="token punctuation">(</span> <span class="token parameter">$args<span class="token punctuation">,</span> $instance</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    echo $args<span class="token punctuation">[</span><span class="token string">'before_widget'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 여기에 위젯 콘텐츠 삽입</span>
    echo $args<span class="token punctuation">[</span><span class="token string">'after_widget'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">form</span><span class="token punctuation">(</span> <span class="token parameter">$instance</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 위젯 설정을 위한 폼 필드가 여기에 들어갑니다</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span> <span class="token parameter">$new_instance<span class="token punctuation">,</span> $old_instance</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 저장될 위젯 옵션을 처리합니다</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-3-위젯-등록-및-로드" tabindex="-1"><a class="header-anchor" href="#단계-3-위젯-등록-및-로드" aria-hidden="true">#</a> 단계 3: 위젯 등록 및 로드</h1>
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
<p>WordPress에 새 위젯을 알리려면 widgets_init 액션 훅을 사용하여 해당 위젯을 등록해야 합니다.</p>
<h1 id="위젯-등록" tabindex="-1"><a class="header-anchor" href="#위젯-등록" aria-hidden="true">#</a> 위젯 등록</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">register_my_custom_widget</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">register_widget</span><span class="token punctuation">(</span><span class="token string">"My_Custom_Widget"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string">"widgets_init"</span><span class="token punctuation">,</span> <span class="token string">"register_my_custom_widget"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-4-사용자-정의-스타일-및-스크립트-추가" tabindex="-1"><a class="header-anchor" href="#단계-4-사용자-정의-스타일-및-스크립트-추가" aria-hidden="true">#</a> 단계 4: 사용자 정의 스타일 및 스크립트 추가</h1>
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
<p>지금 CSS와 JS를 사용하여 위젯에 스타일과 기능을 추가하세요. 필요한 위치에 로드되도록 WordPress에 스크립트와 스타일을 올바르게 enqueue하세요.</p>
<h1 id="스타일-및-스크립트-enqueue하기" tabindex="-1"><a class="header-anchor" href="#스타일-및-스크립트-enqueue하기" aria-hidden="true">#</a> 스타일 및 스크립트 enqueue하기</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">enqueue_custom_widget_scripts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">wp_enqueue_style</span><span class="token punctuation">(</span> <span class="token string">'my-custom-widget-style'</span><span class="token punctuation">,</span> <span class="token function">get_template_directory_uri</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">'/css/custom-widget-style.css'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">wp_enqueue_script</span><span class="token punctuation">(</span> <span class="token string">'my-custom-widget-script'</span><span class="token punctuation">,</span> <span class="token function">get_template_directory_uri</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">'/js/custom-widget-script.js'</span><span class="token punctuation">,</span> <span class="token function">array</span><span class="token punctuation">(</span> <span class="token string">'jquery'</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span><span class="token punctuation">(</span> <span class="token string">'wp_enqueue_scripts'</span><span class="token punctuation">,</span> <span class="token string">'enqueue_custom_widget_scripts'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-5-js-및-css-구현하기" tabindex="-1"><a class="header-anchor" href="#단계-5-js-및-css-구현하기" aria-hidden="true">#</a> 단계 5: JS 및 CSS 구현하기</h1>
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
<p>귀하의 스크립트와 스타일이 큐에 들어 있으므로, 이제 위젯을 독특하게 만드는 구체적인 기능과 디자인 요소를 구현할 수 있습니다.</p>
<h1 id="사용자-정의-위젯-스타일-css" tabindex="-1"><a class="header-anchor" href="#사용자-정의-위젯-스타일-css" aria-hidden="true">#</a> 사용자 정의 위젯 스타일 (CSS)</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>my<span class="token operator">-</span>custom<span class="token operator">-</span>widget <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #f9f9f9<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 2px 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="사용자-정의-위젯-기능-js" tabindex="-1"><a class="header-anchor" href="#사용자-정의-위젯-기능-js" aria-hidden="true">#</a> 사용자 정의 위젯 기능 (JS)</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">jQuery</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">$</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 위젯에 상호 작용 요소 또는 애니메이션 추가하기</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="wordpress-사이트에-편리한-호스팅" tabindex="-1"><a class="header-anchor" href="#wordpress-사이트에-편리한-호스팅" aria-hidden="true">#</a> WordPress 사이트에 편리한 호스팅</h1>
<p>WordPress 사이트를 위한 좋은 호스팅을 찾고 계신가요? Host4Biz에 주목해보세요. 유럽에 현대적인 서버와 우크라이나 팀을 갖춘 신뢰할 수 있는 호스팅입니다.</p>
<p>그리고 첫 결제 시 MYHOST10 프로모션 코드를 사용하시면 10% 할인 혜택을 받을 수 있습니다. 이를 위해 여기서 등록하고 결제 전에 코드를 입력해주세요.</p>
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
<p>워드프레스 호스팅의 또 다른 좋은 옵션은 Hostinger입니다. 링크 https://hostinger.com.ua?REFERRALCODE=1VOLODYMYR55를 통해 계정을 등록하고 내 블로그의 업데이트를 확인해보세요</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>워드프레스에서 사용자 정의 위젯을 만드는 것은 사이트의 기능과 외관을 특정한 요구사항과 브랜딩에 맞게 조정할 수 있게 합니다. PHP를 활용하여 위젯 구조를, CSS를 스타일링을, 그리고 JavaScript를 추가 상호작용 기능을 위해 활용하여 사이트 사용자 경험을 향상시킬 수 있는 독특한 위젯을 개발할 수 있습니다. 사용자 정의 위젯이 최적으로 작동하고 사이트와 원활하게 통합될 수 있도록 스크립트와 스타일을 enqueuing하는 데 워드프레스 표준을 준수하는 것을 기억해주세요.</p>
<p>참고: 위에서 제공된 링크에 제휴 링크가 포함되어 있으며 무언가를 구매하면 별도 비용 없이 커미션을 받게 됩니다.</p>
</div></template>
