<template><div><h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>가끔씩 사랑하는 프레임워크에 대한 업데이트가 나오고 그것이 동일한 기본을 변경하려고 할 때가 있습니다. 제가 알아채지 못한 무언가가 있는지도 모르지만, 저는 플러터의 불규칙성을 프레임워크 업데이트 그 자체에 돌리는 것을 선호합니다. 이 블로그를 쓰는 시점에서 플러터에서 무슨 일이 벌어지고 있는지 일부 점들을 기록하는 데 도움을 드리겠습니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-RowsColumnsContainersandImagesinFlutterversion3193/img/RowsColumnsContainersandImagesinFlutterversion3193_0.png" alt="플러터 버전 3.19.3에서의 행, 열, 컨테이너 및 이미지"></p>
<h1 id="열-행-및-이상한-차원들" tabindex="-1"><a class="header-anchor" href="#열-행-및-이상한-차원들" aria-hidden="true">#</a> 열, 행 및 이상한 차원들</h1>
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
<p>이 두 위젯은 자식 위젯의 높이와 너비를 차지합니다. 이제, 내 코딩 역사 중 어딘가에서 그들이 부모 위젯에 의해 제공된 전체 높이와 너비를 차지했을 때가 있었던 것 같아요. 그러나 현재는 이렇게 되었어요. 그러니까 이 특정 요소를 생성해야 한다면:</p>
<img src="@source/docs/Tech/2024-03-28-RowsColumnsContainersandImagesinFlutterversion3193/img/RowsColumnsContainersandImagesinFlutterversion3193_1.png" />
<p>여기 위젯 트리를 이해해야 해요. 각 요소를 가능한 한 작게 분해하고, 어디에 column, row, container를 넣을지 파악해야 해요. 똑똑한 사람이면 stack을 사용했을 거예요. 우리 둘 모두에게 불행하게도, 저는 가끔 그렇게 똑똑하지 않아요.</p>
<p>이미지를 설정된 높이 컨테이너에 배경으로 넣었어요. 이 높이는 디자인에서 제공되었지만, 기억할 것이 있어요:</p>
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
<p>화면 크기에 따라 다양하게 변하는 위젯을 만들어보세요. 가능한 곳에서는 정적 제약을 피하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Container</span><span class="token punctuation">(</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">285</span><span class="token punctuation">,</span>  <span class="token comment">// 문제 생성자</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> double<span class="token punctuation">.</span>infinity<span class="token punctuation">,</span>
        <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token function">BoxDecoration</span><span class="token punctuation">(</span>
            <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">DecorationImage</span><span class="token punctuation">(</span>
              <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token function">AssetImage</span><span class="token punctuation">(</span><span class="token string">"lib/assets/images/dubai.jpeg"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token literal-property property">fit</span><span class="token operator">:</span> BoxFit<span class="token punctuation">.</span>cover<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> BorderRadius<span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 실수로 배울테니 걱정하지 마세요. 이미지 사용 방법 섹션에서 이 문제를 고치는 방법을 알려줄 테니 기다려 주세요. 그러니까, 이미지를 확인한 뒤에 다음 기능인 통계 막대를 확인해 보세요. 요소 위의 공간 높이가 카드 높이와 같다는 걸 알 수 있습니다. 여기서 컨테이너에 정적 높이를 지정했기 때문에, stats 카드의 높이를 제공된 높이의 절반으로 쉽게 지정하고 다음과 같이 하단에 맞춥니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Container</span><span class="token punctuation">(</span>
          <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">285</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> double<span class="token punctuation">.</span>infinity<span class="token punctuation">,</span>
          <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token function">BoxDecoration</span><span class="token punctuation">(</span>
              <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">DecorationImage</span><span class="token punctuation">(</span>
                <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token function">AssetImage</span><span class="token punctuation">(</span><span class="token string">"lib/assets/images/dubai.jpeg"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">fit</span><span class="token operator">:</span> BoxFit<span class="token punctuation">.</span>cover<span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> BorderRadius<span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token keyword">const</span> EdgeInsets<span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>left<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Align</span><span class="token punctuation">(</span>
            <span class="token literal-property property">alignment</span><span class="token operator">:</span> Alignment<span class="token punctuation">.</span>bottomCenter<span class="token punctuation">,</span>
            <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Container</span><span class="token punctuation">(</span>height<span class="token operator">:</span> <span class="token number">142</span><span class="token punctuation">,</span> <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">HeroCard</span><span class="token punctuation">(</span>theme<span class="token operator">:</span> theme<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>하지만 이미지 크기에 맞게 부모 컨테이너를 동적으로 만들었다면, 컬럼을 사용하여 높이를 동적으로 관리하는 방법이 있습니다. 이제 컬럼 위젯이 자식 위젯에 맞게 맞추어지기 때문에 정말 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Column</span><span class="token punctuation">(</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token function">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">Expanded</span><span class="token punctuation">(</span>child<span class="token operator">:</span> <span class="token function">HeroCard</span><span class="token punctuation">(</span>theme<span class="token operator">:</span> theme<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Expanded 위젯은 Column이 부모인 Container의 최대 높이를 가져가고, HeroCard 위젯도 동일하게 처리합니다. Spacer 위젯은 가능한 많은 빈 공간을 만듭니다. 함께 사용하면 카드와 빈 공간이 항상 같아지도록 보장합니다.</p>
<p>그럼 여기서 말하는 위젯의 동적 높이란 무엇을 의미할까요?</p>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">HeroCard</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token class-name">HeroCard</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">,</span> required <span class="token keyword">this</span><span class="token punctuation">.</span>theme<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">LightTheme</span> theme<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
      decoration<span class="token punctuation">:</span> <span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> theme<span class="token punctuation">.</span>primaryColor<span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token class-name">BorderRadius</span><span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token class-name">Padding</span><span class="token punctuation">(</span>
            padding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>left<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> right<span class="token punctuation">:</span> <span class="token number">14</span><span class="token punctuation">,</span> top<span class="token punctuation">:</span> <span class="token number">14</span><span class="token punctuation">,</span> bottom<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>mainAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">MainAxisAlignment</span><span class="token punctuation">.</span>spaceBetween<span class="token punctuation">,</span> children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token class-name">ImageHeaderTag</span><span class="token punctuation">(</span>theme<span class="token punctuation">:</span> theme<span class="token punctuation">,</span> icon<span class="token punctuation">:</span> weather<span class="token punctuation">,</span> mainLabel<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"19℃"</span></span><span class="token punctuation">,</span> secondaryLabel<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"흐림"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token class-name">ImageHeaderTag</span><span class="token punctuation">(</span>theme<span class="token punctuation">:</span> theme<span class="token punctuation">,</span> icon<span class="token punctuation">:</span> calender<span class="token punctuation">,</span> mainLabel<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"1월 30일"</span></span><span class="token punctuation">,</span> secondaryLabel<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"월"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token class-name">ImageHeaderTag</span><span class="token punctuation">(</span>theme<span class="token punctuation">:</span> theme<span class="token punctuation">,</span> icon<span class="token punctuation">:</span> time<span class="token punctuation">,</span> mainLabel<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"오후 8:45"</span></span><span class="token punctuation">,</span> secondaryLabel<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"GMT+4"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token class-name">ImageHeaderTag</span><span class="token punctuation">(</span>theme<span class="token punctuation">:</span> theme<span class="token punctuation">,</span> icon<span class="token punctuation">:</span> currency<span class="token punctuation">,</span> mainLabel<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"AED"</span></span><span class="token punctuation">,</span> secondaryLabel<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"1\$ = 3.67 AD"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">Container</span><span class="token punctuation">(</span>height<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> theme<span class="token punctuation">.</span>accentColor1<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">Expanded</span><span class="token punctuation">(</span>
            child<span class="token punctuation">:</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
              width<span class="token punctuation">:</span> double<span class="token punctuation">.</span>infinity<span class="token punctuation">,</span>
              child<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
                mainAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">MainAxisAlignment</span><span class="token punctuation">.</span>spaceEvenly<span class="token punctuation">,</span>
                children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                  <span class="token class-name">HeaderButtons</span><span class="token punctuation">(</span>
                      theme<span class="token punctuation">:</span> theme<span class="token punctuation">,</span>
                      icon<span class="token punctuation">:</span> direction<span class="token punctuation">,</span>
                      label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"길 찾기"</span></span><span class="token punctuation">,</span>
                      onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">ScaffoldMessenger</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showSnackBar</span><span class="token punctuation">(</span><span class="token class-name">SnackBar</span><span class="token punctuation">(</span>
                            duration<span class="token punctuation">:</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                            content<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'길 찾는 중'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token class-name">Padding</span><span class="token punctuation">(</span>
                    padding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>top<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> bottom<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
                      width<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                      color<span class="token punctuation">:</span> theme<span class="token punctuation">.</span>accentColor1<span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token class-name">HeaderButtons</span><span class="token punctuation">(</span>
                      theme<span class="token punctuation">:</span> theme<span class="token punctuation">,</span>
                      icon<span class="token punctuation">:</span> call<span class="token punctuation">,</span>
                      label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"공항 전화"</span></span><span class="token punctuation">,</span>
                      onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">ScaffoldMessenger</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showSnackBar</span><span class="token punctuation">(</span><span class="token class-name">SnackBar</span><span class="token punctuation">(</span>
                            duration<span class="token punctuation">:</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                            content<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'공항에 전화 걸기 중'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드에서 위젯의 높이를 지정한 곳은 없고(너비가 1인 수평선을 가진 컨테이너를 제외하고) 모두 패딩 및 텍스트, 아이콘 등의 자연스러운 높이를 사용하고 있습니다. 이렇게 하면 애플리케이션에서 RenderBox Overflow 오류를 방지할 수 있습니다(대부분).</p>
<h1 id="column-위젯-가운데-정렬하기" tabindex="-1"><a class="header-anchor" href="#column-위젯-가운데-정렬하기" aria-hidden="true">#</a> Column 위젯 가운데 정렬하기</h1>
<p>Column 위젯 및 따라서 일련의 위젯을 화면에 가운데 정렬하려면 여러 가지 방법이 있지만 가장 간단한 답을 제공해 드리겠습니다. Column의 폭을 double.infinity를 사용하여 너비의 100%로 설정하거나 너비가 100%인 자식 위젯을 가져야 합니다.</p>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        backgroundColor<span class="token punctuation">:</span> theme<span class="token punctuation">.</span>backgroundColor<span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
          mainAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">MainAxisAlignment</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
          crossAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">CrossAxisAlignment</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// 여기에 있는 children은</span>
            <span class="token comment">// 부모 위젯에서 가운데 정렬됩니다</span>
            <span class="token comment">// 여기에 Scaffold</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="이미지-작업" tabindex="-1"><a class="header-anchor" href="#이미지-작업" aria-hidden="true">#</a> 이미지 작업</h1>
<p>이미지를 다루는 더 나은 방법부터 시작해봅시다. 이 위젯에 대해 무엇을 보시나요?</p>
<p><img src="@source/docs/Tech/2024-03-28-RowsColumnsContainersandImagesinFlutterversion3193/img/RowsColumnsContainersandImagesinFlutterversion3193_2.png" alt="화면에 표시되는 이미지"></p>
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
<table>
<thead>
<tr>
<th>폴더</th>
<th>이름</th>
<th>크기</th>
</tr>
</thead>
<tbody>
<tr>
<td>폴더1</td>
<td>파일1</td>
<td>2KB</td>
</tr>
<tr>
<td>폴더2</td>
<td>파일2</td>
<td>3KB</td>
</tr>
</tbody>
</table>
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
<p>&quot;double.infinity&quot;은 이미지의 최대 너비로 설정하고 이미지를 BoxFit.fitWidth로 설정합니다. 이렇게 하면 이미지가 너비에 맞게 늘어나며 스택 위젯을 포함하는 컨테이너는 이미지의 너비와 높이를 얻습니다(Stack이 없어도 작동하지만, 다른 위젯을 겹쳐 놓으려면 Stack이 필요합니다).</p>
<p>배경으로 이미지를 넣는 것과 어떻게 다른가요? 이미지를 배경으로 넣을 때, 컨테이너는 이미지의 치수를 얻지 않고 반대로 작동합니다. 그래서 사용 사례에 따라 다를 수 있지만, 디자인에 표시된 대로 원한다면 가능한 최상의 방법입니다.</p>
<p>이제 스택의 치수가 이미지와 일치하므로, 엘리베이트된 버튼에 중앙 위젯을 사용하고 하루를 마무리할 수 있습니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>플러터에서 혼란스러운 시간을 함께 해결해 드리고 싶어요. 글을 쓰는 걸 좋아하고 배우는 걸 즐겨 하니까 새로 알게 된 것, 발생한 오류, 플러터 커뮤니티에서 다루지 않은 내용 중 내가 해결하고 이해한 것들을 계속 추적하려고 노력할 거예요. 여러분을 도와드리기 위해요. 여러분의 신이 되어드리기 위해요. 마치 column 위젯이 부모 높이를 사용하는 방법, 컨테이너가 모든 공간을 채우는 방법, 강력한 AI 플러터 애플리케이션을 만드는 방법 같은 질문들의 바다를 넘어 가도록 도와드리겠어요. 아마 마지막 건 아니겠지만요.</p>
</div></template>
