<template><div><p>당신의 위젯으로 부터 자동으로 로딩 위젯을 생성하는 위젯.</p>
<p>플러터 앱에서 콘텐츠가 로딩될 때 지루한 로딩 화면을 바라보는 것에 지쳤나요? Redacted 위젯을 만나보세요 - 로딩 화면을 화사하게 바꿔주고 사용자를 계속해서 이끌어주는 새로운 친구! API에서 데이터를 가져오거나 이미지를 로드하는 경우, Redacted 위젯은 반짝이는 효과로 대기 게임에 우아함과 흥미를 더해줍니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-IntroducingtheRedactedWidgetforFlutterEnhanceYourLoadingExperience/img/IntroducingtheRedactedWidgetforFlutterEnhanceYourLoadingExperience_0.png" alt="Redacted Widget"></p>
<h1 id="redacted-widget" tabindex="-1"><a class="header-anchor" href="#redacted-widget" aria-hidden="true">#</a> Redacted Widget</h1>
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
<p>플러터 앱에 Redacted 위젯을 통합하는 것은 매우 간단해요! 프로젝트에 패키지를 가져와서 사용하면 됩니다. Redacted 위젯으로 로딩 콘텐츠를 감싸면 나머지는 그 위젯이 알아서 처리해 줍니다. 이 위젯은 레이아웃과 디자인을 유지하면서 보다 정교한 플레이스홀더를 제공해줍니다.</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:redacted_example/src/redacted_widget.dart'</span></span><span class="token punctuation">;</span>

<span class="token comment">// 로딩 콘텐츠를 Redacted 위젯으로 감싸보세요</span>
<span class="token keyword">const</span> loadingWidget <span class="token operator">=</span> <span class="token class-name">ShoeWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">redacted</span><span class="token punctuation">(</span>
  context<span class="token punctuation">:</span> context<span class="token punctuation">,</span>
  redact<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-03-28-IntroducingtheRedactedWidgetforFlutterEnhanceYourLoadingExperience/img/IntroducingtheRedactedWidgetforFlutterEnhanceYourLoadingExperience_1.png" alt="Redacted Widget"></p>
<p><img src="https://miro.medium.com/v2/resize:fit:1200/1*EwZVQb8pRTss34ZQ39M3Bw.gif" alt="Redacted Widget"></p>
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
<h1 id="레드액트-위젯-사용의-장점" tabindex="-1"><a class="header-anchor" href="#레드액트-위젯-사용의-장점" aria-hidden="true">#</a> 레드액트 위젯 사용의 장점</h1>
<h1 id="_1-매력적인-사용자-경험" tabindex="-1"><a class="header-anchor" href="#_1-매력적인-사용자-경험" aria-hidden="true">#</a> 1. 매력적인 사용자 경험</h1>
<ul>
<li>사용자들을 재미있게 끌어들이고, 시각적으로 매력적인 자리표시자로 로딩 기간 동안 사용자들의 관심을 유지합니다.</li>
<li>로딩 및 로드된 콘텐츠 간의 원활한 전환을 제공하여 사용자 관심을 유지하고 이탈율을 줄입니다.</li>
</ul>
<h1 id="_2-사용자-정의-가능한-디자인" tabindex="-1"><a class="header-anchor" href="#_2-사용자-정의-가능한-디자인" aria-hidden="true">#</a> 2. 사용자 정의 가능한 디자인</h1>
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
<li>앱의 브랜딩과 스타일에 맞춰 플레이스홀더의 모양을 맞춤 설정하세요.</li>
<li>어플리케이션의 분위기에 맞게 플레이스홀더 지속 시간, 애니메이션, 모양을 쉽게 조정하세요.</li>
</ul>
<h3 id="_3-빠른-속도-인식" tabindex="-1"><a class="header-anchor" href="#_3-빠른-속도-인식" aria-hidden="true">#</a> 3. 빠른 속도 인식</h3>
<ul>
<li>최종 콘텐츠와 유사한 플레이스홀더를 제공하여 더 빨라 보이는 로딩 시간을 만드세요.</li>
<li>앱의 성능과 반응성에 대한 사용자 인식을 향상시키세요.</li>
</ul>
<h3 id="_4-쉬운-통합" tabindex="-1"><a class="header-anchor" href="#_4-쉬운-통합" aria-hidden="true">#</a> 4. 쉬운 통합</h3>
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
<li>기존의 Flutter 프로젝트에 Redacted 위젯을 방대한 수정 없이 통합하세요.</li>
<li>텍스트부터 이미지, 콘텐츠의 전체 섹션까지 앱의 다양한 구성요소에 이 위젯을 활용하세요.</li>
</ul>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">ShoeWidget</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">ShoeWidget</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
      crossAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">CrossAxisAlignment</span><span class="token punctuation">.</span>start<span class="token punctuation">,</span>
      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token class-name">AspectRatio</span><span class="token punctuation">(</span>
          aspectRatio<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
            width<span class="token punctuation">:</span> double<span class="token punctuation">.</span>infinity<span class="token punctuation">,</span>
            decoration<span class="token punctuation">:</span> <span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>
              borderRadius<span class="token punctuation">:</span> <span class="token class-name">BorderRadius</span><span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>grey<span class="token punctuation">.</span>shade200<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token class-name">Image</span><span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"assets/shoe.png"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">const</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
          height<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">Row</span><span class="token punctuation">(</span>
          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span>
              <span class="token string-literal"><span class="token string">"\$180.99"</span></span><span class="token punctuation">,</span>
              style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
                fontWeight<span class="token punctuation">:</span> <span class="token class-name">FontWeight</span><span class="token punctuation">.</span>w600<span class="token punctuation">,</span>
                fontSize<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
                color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span>shade300<span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">const</span> <span class="token class-name">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">Icon</span><span class="token punctuation">(</span>
              <span class="token class-name">Icons</span><span class="token punctuation">.</span>star<span class="token punctuation">,</span>
              color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span>shade300<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
              <span class="token string-literal"><span class="token string">"4.1"</span></span><span class="token punctuation">,</span>
              style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
                fontWeight<span class="token punctuation">:</span> <span class="token class-name">FontWeight</span><span class="token punctuation">.</span>w700<span class="token punctuation">,</span>
                fontSize<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">const</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
          height<span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
          <span class="token string-literal"><span class="token string">"Nike ACG Mountain"</span></span><span class="token punctuation">,</span>
          style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
            fontSize<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-03-28-IntroducingtheRedactedWidgetforFlutterEnhanceYourLoadingExperience/img/IntroducingtheRedactedWidgetforFlutterEnhanceYourLoadingExperience_3.png" alt="Redacted Widget 소개"></p>
<p>이 정보가 유용했기를 바랍니다. 읽어주셔서 감사합니다. 피드백과 제안을 언제든 환영합니다.</p>
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
