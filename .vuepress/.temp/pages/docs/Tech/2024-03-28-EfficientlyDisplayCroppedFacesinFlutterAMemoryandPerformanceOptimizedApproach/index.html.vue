<template><div><p><img src="@source/docs/Tech/2024-03-28-EfficientlyDisplayCroppedFacesinFlutterAMemoryandPerformanceOptimizedApproach/img/EfficientlyDisplayCroppedFacesinFlutterAMemoryandPerformanceOptimizedApproach_0.png" alt="Efficiently Display Cropped Faces in Flutter: A Memory and Performance-Optimized Approach"></p>
<p>소개:
Flutter 앱 개발에서 이미지에서 잘라낸 얼굴을 부드러운 UI 성능을 유지하면서 효율적으로 표시하는 것은 계산 집약적인 작업인 이미지 자르기와 같은 작업이 포함된 경우에는 어려울 수 있습니다. 그러나 추가 계산 오버헤드 없이 자른 얼굴을 즉시 표시할 수 있는 해결책이 있습니다. 이 기사에서는 Flutter를 사용하여 이를 달성하기 위한 메모리 및 성능 최적화 접근 방식을 살펴보겠습니다.</p>
<p>해결책 개요:
기존에는 Flutter에서 이미지 자르기는 계산 집약적인 작업을 포함하여 주 스레드에서 실행될 때 UI 지터를 유발할 수 있는 작업입니다. 이미지 자르기 작업을 별도의 고립체에서 실행하면 이 문제를 어느 정도 완화할 수 있지만 여전히 처리 시간이 소요됩니다. 게다가 많은 경우, 자른 얼굴을 표시하는 것은 프론트엔드 특정 요구 사항이며, 자른 이미지를 백엔드로 보내는 필요성을 제거합니다.</p>
<p>이러한 도전에 대처하기 위해 추가 계산 오버헤드 없이 이미지에서 효과적으로 자른 얼굴을 표시하기 위해 Flutter의 능력을 활용하는 솔루션을 구현할 것입니다.</p>
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
<h3 id="단계-1-원본-이미지에서-ui-image-객체-가져오기" tabindex="-1"><a class="header-anchor" href="#단계-1-원본-이미지에서-ui-image-객체-가져오기" aria-hidden="true">#</a> 단계 1: 원본 이미지에서 ui.Image 객체 가져오기</h3>
<p>우리는 도우미 함수 <code v-pre>ImageUtils.getUiImage()</code>를 만들어 시작합니다. 이 함수는 네트워크 URL이나 로컬 파일 경로에서 원본 이미지로부터 <code v-pre>ui.Image</code> 객체를 비동기적으로 가져옵니다. 이 함수는 Flutter의 <code v-pre>ImageProvider</code>와 <code v-pre>Completer</code>를 활용하여 이미지 데이터를 효율적으로 가져옵니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ImageUtils</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> Future<span class="token operator">&lt;</span>ui<span class="token punctuation">.</span>Image<span class="token operator">></span> <span class="token function">getUiImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    String<span class="token operator">?</span> imageUrl<span class="token punctuation">,</span>
    String<span class="token operator">?</span> imagePath<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
    Completer<span class="token operator">&lt;</span>ImageInfo<span class="token operator">></span> completer <span class="token operator">=</span> <span class="token function">Completer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ImageProvider<span class="token operator">?</span> img<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>imageUrl <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      img <span class="token operator">=</span> <span class="token function">NetworkImage</span><span class="token punctuation">(</span>imageUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>imagePath <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      img <span class="token operator">=</span> <span class="token function">FileImage</span><span class="token punctuation">(</span><span class="token function">File</span><span class="token punctuation">(</span>imagePath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    img
        <span class="token operator">?.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token function">ImageConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token function">ImageStreamListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ImageInfo info<span class="token punctuation">,</span> bool _<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      completer<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ImageInfo imageInfo <span class="token operator">=</span> <span class="token keyword">await</span> completer<span class="token punctuation">.</span>future<span class="token punctuation">;</span>
    <span class="token keyword">return</span> imageInfo<span class="token punctuation">.</span>image<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="단계-2-custompainter를-사용한-얼굴-이미지-그리기" tabindex="-1"><a class="header-anchor" href="#단계-2-custompainter를-사용한-얼굴-이미지-그리기" aria-hidden="true">#</a> 단계 2: CustomPainter를 사용한 얼굴 이미지 그리기</h3>
<p>다음으로 <code v-pre>FaceImagePainter</code> 클래스를 정의합니다. 이 클래스는 <code v-pre>CustomPainter</code>를 확장합니다. 이 사용자 지정 페인터는 원본 <code v-pre>ui.Image</code> 객체와 감지된 얼굴 영역을 나타내는 <code v-pre>Rect</code>를 가져옵니다. <code v-pre>paint()</code> 메서드 내에서 우리는 캔버스에 크롭된 얼굴을 그려서 불필요한 계산을 최소화합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">FaceImagePainter</span> <span class="token keyword">extends</span> <span class="token class-name">CustomPainter</span> <span class="token punctuation">{</span>
  ui<span class="token punctuation">.</span>Image resImage<span class="token punctuation">;</span>

  Rect rectCrop<span class="token punctuation">;</span>

  <span class="token function">FaceImagePainter</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resImage<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rectCrop<span class="token punctuation">)</span><span class="token punctuation">;</span>

  @override
  <span class="token keyword">void</span> <span class="token function">paint</span><span class="token punctuation">(</span><span class="token parameter">Canvas canvas<span class="token punctuation">,</span> Size size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    final Rect rect <span class="token operator">=</span> Offset<span class="token punctuation">.</span>zero <span class="token operator">&amp;</span> size<span class="token punctuation">;</span>
    final Size imageSize <span class="token operator">=</span>
        <span class="token function">Size</span><span class="token punctuation">(</span>resImage<span class="token punctuation">.</span>width<span class="token punctuation">.</span><span class="token function">toDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> resImage<span class="token punctuation">.</span>height<span class="token punctuation">.</span><span class="token function">toDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    FittedSizes sizes <span class="token operator">=</span> <span class="token function">applyBoxFit</span><span class="token punctuation">(</span>BoxFit<span class="token punctuation">.</span>cover<span class="token punctuation">,</span> imageSize<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>

    Rect inputSubRect <span class="token operator">=</span> rectCrop<span class="token punctuation">;</span>
    final Rect outputSubRect <span class="token operator">=</span>
        Alignment<span class="token punctuation">.</span>center<span class="token punctuation">.</span><span class="token function">inscribe</span><span class="token punctuation">(</span>sizes<span class="token punctuation">.</span>destination<span class="token punctuation">,</span> rect<span class="token punctuation">)</span><span class="token punctuation">;</span>

    final paint <span class="token operator">=</span> <span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>color <span class="token operator">=</span> Colors<span class="token punctuation">.</span>white
      <span class="token punctuation">.</span><span class="token punctuation">.</span>style <span class="token operator">=</span> PaintingStyle<span class="token punctuation">.</span>fill
      <span class="token punctuation">.</span><span class="token punctuation">.</span>strokeWidth <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    canvas<span class="token punctuation">.</span><span class="token function">drawRect</span><span class="token punctuation">(</span>rect<span class="token punctuation">,</span> paint<span class="token punctuation">)</span><span class="token punctuation">;</span>

    canvas<span class="token punctuation">.</span><span class="token function">drawImageRect</span><span class="token punctuation">(</span>resImage<span class="token punctuation">,</span> inputSubRect<span class="token punctuation">,</span> outputSubRect<span class="token punctuation">,</span> <span class="token function">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @override
  bool <span class="token function">shouldRepaint</span><span class="token punctuation">(</span><span class="token parameter">CustomPainter oldDelegate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>3단계: 얼굴 크로퍼 위젯 만들기
마지막으로 <code v-pre>FaceCropperWidget</code>을 만들어보겠습니다. 이 위젯은 잘라낸 얼굴을 효율적으로 표시하는 메모리 및 성능 효율적인 위젯으로, 잘라낸 얼굴을 추가 계산 없이 즉시 렌더링하는 데 필요한 로직을 캡슐화합니다. 이 위젯은 이전에 정의된 도우미 함수와 사용자 정의 페인터를 활용하여 잘라낸 얼굴을 추가 계산을 기다리지 않고 즉시 렌더링합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">FaceCropperWidget</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  final String<span class="token operator">?</span> imagePath<span class="token punctuation">;</span>
  final String<span class="token operator">?</span> imageUrl<span class="token punctuation">;</span>
  final Rect faceRect<span class="token punctuation">;</span>
  final double<span class="token operator">?</span> width<span class="token punctuation">;</span>
  final double<span class="token operator">?</span> height<span class="token punctuation">;</span>
  final BoxShape<span class="token operator">?</span> shape<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function">FaceCropperWidget</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>imagePath<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>imageUrl<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>faceRect<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>shape<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Container</span><span class="token punctuation">(</span>
      <span class="token literal-property property">clipBehavior</span><span class="token operator">:</span> Clip<span class="token punctuation">.</span>hardEdge<span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> width<span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> height<span class="token punctuation">,</span>
      <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token function">BoxDecoration</span><span class="token punctuation">(</span>
        <span class="token literal-property property">shape</span><span class="token operator">:</span> shape <span class="token operator">??</span> BoxShape<span class="token punctuation">.</span>rectangle<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">alignment</span><span class="token operator">:</span> Alignment<span class="token punctuation">.</span>center<span class="token punctuation">,</span>
      <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">FutureBuilder</span><span class="token punctuation">(</span>
        <span class="token literal-property property">future</span><span class="token operator">:</span> ImageUtils<span class="token punctuation">.</span><span class="token function">getUiImage</span><span class="token punctuation">(</span>
          <span class="token literal-property property">imageUrl</span><span class="token operator">:</span> imageUrl<span class="token punctuation">,</span>
          <span class="token literal-property property">imagePath</span><span class="token operator">:</span> imagePath<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>snapshot<span class="token punctuation">.</span>connectionState <span class="token operator">==</span> ConnectionState<span class="token punctuation">.</span>done <span class="token operator">&amp;&amp;</span>
              snapshot<span class="token punctuation">.</span>data <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// If the Future is complete, display the preview.</span>
            <span class="token keyword">return</span> <span class="token function">paintImage</span><span class="token punctuation">(</span>snapshot<span class="token punctuation">.</span>data<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// Otherwise, display a loading indicator.</span>
            <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token function">CircularProgressIndicator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  Widget <span class="token function">paintImage</span><span class="token punctuation">(</span><span class="token parameter">ui<span class="token punctuation">.</span>Image image</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">CustomPaint</span><span class="token punctuation">(</span>
      <span class="token literal-property property">painter</span><span class="token operator">:</span> <span class="token function">FaceImagePainter</span><span class="token punctuation">(</span>
        image<span class="token punctuation">,</span>
        faceRect<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">SizedBox</span><span class="token punctuation">(</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> faceRect<span class="token punctuation">.</span>width<span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> faceRect<span class="token punctuation">.</span>height<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결론:
이 접근 방식을 따르면 Flutter 개발자들은 이미지에서 잘라낸 얼굴을 효과적으로 표시할 수 있으며 추가 계산 부담이 없습니다. 이 솔루션은 UI 성능을 향상시키는 데 그치지 않고, 특히 실시간 얼굴 감지 및 표시 기능이 필요한 애플리케이션에서 사용자 경험을 좀 더 원할하게 제공합니다. 이러한 최적화된 기술을 통합함으로써 Flutter 애플리케이션의 반응 성능과 효율성을 크게 향상시킬 수 있으며, 최종 사용자에게 더 부드러운 상호 작용을 보장합니다.</p>
</div></template>
