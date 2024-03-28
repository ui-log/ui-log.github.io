<template><div><p>아마도 기본 애니메이션을 Flutter에서 만드는 방법에 대해 이미 알고 계실 것입니다. 하지만 이러한 간단한 위젯들을 멋진 애니메이션으로 변환하는 것은 어떠세요? 함께 알아보고, 아래에서 볼 수 있는 멋진 애니메이션부터 시작해보죠 👇</p>
<p><img src="https://miro.medium.com/v2/resize:fit:512/1*cUtGMspuEwSFT05zelLt2A.gif" alt="animation"></p>
<h2 id="그래서-시작해봅시다" tabindex="-1"><a class="header-anchor" href="#그래서-시작해봅시다" aria-hidden="true">#</a> 그래서, 시작해봅시다</h2>
<p>새로운 Flutter 프로젝트를 생성하거나 기존 프로젝트를 사용할 수 있습니다. 애니메이션의 검은 구멍은 사실 이미지이므로 해당 이미지를 프로젝트에 추가해봅시다. 그 다음, 애니메이션 페이지를 생성해봅시다. 제가 그것을 CardHiddenAnimationPage라고 부를 것입니다.</p>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">CardHiddenAnimationPage</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">CardHiddenAnimationPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CardHiddenAnimationPage</span><span class="token punctuation">></span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
      <span class="token class-name">CardHiddenAnimationPageState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CardHiddenAnimationPageState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CardHiddenAnimationPage</span><span class="token punctuation">></span></span>
    <span class="token keyword">with</span> <span class="token class-name">TickerProviderStateMixin</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> cardSize <span class="token operator">=</span> <span class="token number">150.0</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      floatingActionButton<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
        mainAxisSize<span class="token punctuation">:</span> <span class="token class-name">MainAxisSize</span><span class="token punctuation">.</span>min<span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token class-name">FloatingActionButton</span><span class="token punctuation">(</span>
            onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>remove<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token keyword">const</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">FloatingActionButton</span><span class="token punctuation">(</span>
            onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>add<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// TODO: add body</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 TickerProviderStateMixin을 사용한 StatefulWidget이며, 우리는 오른쪽 하단에 두 개의 플로팅 버튼을 가지고 cardSize = 150을 정의했습니다.</p>
<h2 id="블랙홀-애니메이션" tabindex="-1"><a class="header-anchor" href="#블랙홀-애니메이션" aria-hidden="true">#</a> 블랙홀 애니메이션</h2>
<p>계획은 간단합니다. 마이너스 버튼을 클릭하면 블랙홀이 나타나고 잠시 후 사라집니다. 이러한 시나리오에서 Tween 위젯은 매우 유용합니다. 이를 보여드리겠습니다.```</p>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code>늦은 최종 holeSizeTween <span class="token operator">=</span> <span class="token class-name">Tween</span><span class="token generics"><span class="token punctuation">&lt;</span>double<span class="token punctuation">></span></span><span class="token punctuation">(</span>
  begin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  end<span class="token punctuation">:</span> <span class="token number">1.5</span> <span class="token operator">*</span> cardSize<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
늦은 최종 holeAnimationController <span class="token operator">=</span> <span class="token class-name">AnimationController</span><span class="token punctuation">(</span>
  vsync<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
  duration<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
double <span class="token keyword">get</span> holeSize <span class="token operator">=</span><span class="token operator">></span> holeSizeTween<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span>holeAnimationController<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, 애니메이션 변경 사항을 청취하고 더 이상 필요하지 않을 때 적절히 dispo‌se해야 합니다.</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token metadata function">@override</span>
<span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  holeAnimationController<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token metadata function">@override</span>
<span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  holeAnimationController<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>애니메이션 설정이 완료되었습니다. 이제 페이지에 넣어 보겠습니다. 아래 코드에서 TODO: add body를 변경하세요.👇</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token function">Center</span><span class="token punctuation">(</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">SizedBox</span><span class="token punctuation">(</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> cardSize <span class="token operator">*</span> <span class="token number">1.25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> double<span class="token punctuation">.</span>infinity<span class="token punctuation">,</span>
    <span class="token comment">// TODO: ClipPath로 Stack을 랩핑하세요</span>
    <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Stack</span><span class="token punctuation">(</span>
      <span class="token literal-property property">alignment</span><span class="token operator">:</span> Alignment<span class="token punctuation">.</span>bottomCenter<span class="token punctuation">,</span>
      <span class="token literal-property property">clipBehavior</span><span class="token operator">:</span> Clip<span class="token punctuation">.</span>none<span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">SizedBox</span><span class="token punctuation">(</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> holeSize<span class="token punctuation">,</span> <span class="token comment">// 블랙홀 애니메이션 적용</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> Image<span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span>
            <span class="token string">'images/hole.png'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fit</span><span class="token operator">:</span> BoxFit<span class="token punctuation">.</span>fill<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// TODO: Hello world 카드</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>시작할 시간이에요! 마이너스 플로팅 액션 버튼으로 돌아가서 onPressed 함수를 비동기로 만들어 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">FloatingActionButton</span><span class="token punctuation">(</span>
  <span class="token literal-property property">onPressed</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
    <span class="token keyword">await</span> holeAnimationController<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Future<span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token function">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> holeAnimationController<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 해야 할 것은 애니메이션이 먼저 끝나도록 하고, 200밀리초를 기다린 후에 애니메이션을 역방향으로 실행하는 것입니다.</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:1000/1*mJXfx3gxflS9-j9aNHtR7Q.gif" alt="Card animation"></p>
<h2 id="카드-애니메이션" tabindex="-1"><a class="header-anchor" href="#카드-애니메이션" aria-hidden="true">#</a> 카드 애니메이션</h2>
<p>먼저, 카드를 만들어 봅시다. 이를 HelloWorldCard라고 지어보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">HelloWorldCard</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">HelloWorldCard</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    Key<span class="token operator">?</span> key<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>elevation<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token operator">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  final double size<span class="token punctuation">;</span>
  final double elevation<span class="token punctuation">;</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Material</span><span class="token punctuation">(</span>
      <span class="token literal-property property">elevation</span><span class="token operator">:</span> elevation<span class="token punctuation">,</span>
      <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> BorderRadius<span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">child</span><span class="token operator">:</span> SizedBox<span class="token punctuation">.</span><span class="token function">square</span><span class="token punctuation">(</span>
        <span class="token literal-property property">dimension</span><span class="token operator">:</span> size<span class="token punctuation">,</span>
        <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">DecoratedBox</span><span class="token punctuation">(</span>
          <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token function">BoxDecoration</span><span class="token punctuation">(</span>
            <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> BorderRadius<span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> Colors<span class="token punctuation">.</span>blue<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Center</span><span class="token punctuation">(</span>
            <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span>
              <span class="token string">'Hello\nWorld'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">textAlign</span><span class="token operator">:</span> TextAlign<span class="token punctuation">.</span>center<span class="token punctuation">,</span>
              <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token function">TextStyle</span><span class="token punctuation">(</span>color<span class="token operator">:</span> Colors<span class="token punctuation">.</span>white<span class="token punctuation">,</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>지금까지 다 했습니다. 블랙홀과 헬로 월드 카드를 추가했습니다. 사용자가 마이너스 버튼을 클릭하면, 카드가 아래로 이동하여 약간 회전하고 고도가 증가할 계획입니다. 이를 위해 홀 크기를 애니메이션하는 데 사용한 Tween 기술을 사용할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>late final cardOffsetAnimationController <span class="token operator">=</span> <span class="token function">AnimationController</span><span class="token punctuation">(</span>
  <span class="token literal-property property">vsync</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

late final cardOffsetTween <span class="token operator">=</span> Tween<span class="token operator">&lt;</span>double<span class="token operator">></span><span class="token punctuation">(</span>
  <span class="token literal-property property">begin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token operator">*</span> cardSize<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">chain</span><span class="token punctuation">(</span><span class="token function">CurveTween</span><span class="token punctuation">(</span>curve<span class="token operator">:</span> Curves<span class="token punctuation">.</span>easeInBack<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
late final cardRotationTween <span class="token operator">=</span> Tween<span class="token operator">&lt;</span>double<span class="token operator">></span><span class="token punctuation">(</span>
  <span class="token literal-property property">begin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">chain</span><span class="token punctuation">(</span><span class="token function">CurveTween</span><span class="token punctuation">(</span>curve<span class="token operator">:</span> Curves<span class="token punctuation">.</span>easeInBack<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
late final cardElevationTween <span class="token operator">=</span> Tween<span class="token operator">&lt;</span>double<span class="token operator">></span><span class="token punctuation">(</span>
  <span class="token literal-property property">begin</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

double <span class="token keyword">get</span> <span class="token parameter">cardOffset</span> <span class="token operator">=></span>
    cardOffsetTween<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span>cardOffsetAnimationController<span class="token punctuation">)</span><span class="token punctuation">;</span>
double <span class="token keyword">get</span> <span class="token parameter">cardRotation</span> <span class="token operator">=></span>
    cardRotationTween<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span>cardOffsetAnimationController<span class="token punctuation">)</span><span class="token punctuation">;</span>
double <span class="token keyword">get</span> <span class="token parameter">cardElevation</span> <span class="token operator">=></span>
    cardElevationTween<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span>cardOffsetAnimationController<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>initState에서 변경 사항을 관찰하는 리스너를 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cardOffsetAnimationController<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>더 이상 필요하지 않을 때 dispose하는 것을 잊지 마세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cardOffsetAnimationController<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>우리의 HelloWorldCard로 돌아가서 offset, angle, elevation 값을 업데이트해 봅시다. 이러한 변경을 완료하면 다음과 같이 보일 것입니다👇</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Positioned</span><span class="token punctuation">(</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Center</span><span class="token punctuation">(</span>
    <span class="token literal-property property">child</span><span class="token operator">:</span> Transform<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span>
      <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token function">Offset</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> cardOffset<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// Offset 업데이트</span>
      <span class="token literal-property property">child</span><span class="token operator">:</span> Transform<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>
        <span class="token literal-property property">angle</span><span class="token operator">:</span> cardRotation<span class="token punctuation">,</span> <span class="token comment">// angle 업데이트</span>
        <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Padding</span><span class="token punctuation">(</span>
          <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token keyword">const</span> EdgeInsets<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">20.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">HelloWorldCard</span><span class="token punctuation">(</span>
            <span class="token literal-property property">size</span><span class="token operator">:</span> cardSize<span class="token punctuation">,</span>
            <span class="token literal-property property">elevation</span><span class="token operator">:</span> cardElevation<span class="token punctuation">,</span> <span class="token comment">// elevation 업데이트</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마이너스 버튼으로 돌아가서 클릭하면 카드 애니메이션도 시작해 보세요</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>holeAnimationController<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> cardOffsetAnimationController<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Future<span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token function">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> holeAnimationController<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>카드 오프셋 애니메이션 컨트롤러의 기간이 1000밀리초로 설정되어 있습니다. 홀 애니메이션이 끝나면 카드 애니메이션이 완료될 때까지 기다려서 그 후에 역방향으로 실행하고 싶다면 카드 오프셋 애니메이션 컨트롤러 앞에 await를 넣어주시면 됩니다.</p>
<p>마지막으로, 플러스 버튼을 누를 때 할 일은 모든 애니메이션을 역방향으로 실행하는 것뿐입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cardOffsetAnimationController<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
holeAnimationController<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:960/1*biIYYvKWmvCFKiGD0dgysg.gif" alt="애니메이션"></p>
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
<h2 id="벽-customclipper" tabindex="-1"><a class="header-anchor" href="#벽-customclipper" aria-hidden="true">#</a> 벽 - CustomClipper</h2>
<p>블랙홀이 표시되고 카드가 예상대로 애니메이션이 되지만, 우리가 목표로 하는 효과를 완전히 만들지는 못하고 있어요. 우리는 카드가 블랙홀 쪽으로 이동한 후 다시 블랙홀에서 돌아오는 느낌을 줄 것을 원해요. 이것은 ClipPath와 CustomClipper로 해결할 수 있어요. 먼저, CustomClipper인 'BlackHoleClipper'를 만들어봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BlackHoleClipper</span> <span class="token keyword">extends</span> <span class="token class-name">CustomClipper</span><span class="token operator">&lt;</span>Path<span class="token operator">></span> <span class="token punctuation">{</span>
  @override
  Path <span class="token function">getClip</span><span class="token punctuation">(</span><span class="token parameter">Size size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    final path <span class="token operator">=</span> <span class="token function">Path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    path<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> size<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    path<span class="token punctuation">.</span><span class="token function">arcTo</span><span class="token punctuation">(</span>
      Rect<span class="token punctuation">.</span><span class="token function">fromCenter</span><span class="token punctuation">(</span>
        <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token function">Offset</span><span class="token punctuation">(</span>size<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> size<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> size<span class="token punctuation">.</span>width<span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> size<span class="token punctuation">.</span>height<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      pi<span class="token punctuation">,</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 높이에 상관없이 카드가 위쪽에서 잘림을 방지하기 위해 -1000을 사용합니다</span>
    path<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    path<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>size<span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    path<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> path<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @override
  bool <span class="token function">shouldReclip</span><span class="token punctuation">(</span><span class="token parameter">BlackHoleClipper oldClipper</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>// TODO:</code> 구간에 Stack을 ClipPath로 감싸고, Stack 위젯을 ClipPath로 감싸고 BlackHoleClipper를 클리퍼로 지정해주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">ClipPath</span><span class="token punctuation">(</span>
  <span class="token literal-property property">clipper</span><span class="token operator">:</span> <span class="token function">BlackHoleClipper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Stack</span><span class="token punctuation">(</span> <span class="token operator">...</span><span class="token punctuation">.</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://miro.medium.com/v2/resize:fit:960/1*kBJprwps2mBgkypDYgb_Ng.gif" />
<p>우리 성공했어요! 🎉 이제 우리가 의도한 대로 정확하게 보입니다. 내 눈에는 매끄럽고 만족스럽게 보입니다. 참고로 여기에 전체 소스 코드가 있습니다. 제 지시를 따르는 데 어려움이 있으면 알려주세요.</p>
<p>뭔가 잘못된 부분이 있는가요? 댓글로 알려주세요. 개선할 수 있어서 기쁠 거예요.</p>
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
