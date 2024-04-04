<template><div><h1 id="getx" tabindex="-1"><a class="header-anchor" href="#getx" aria-hidden="true">#</a> GetX:</h1>
<p>GetX은 플러터를 위한 가벼운 상태 관리 솔루션이며, 상태, 의존성 및 네비게이션을 관리하기 위한 강력한 API를 제공합니다. Dart의 반응형 프로그래밍 기능을 활용하여 복잡한 설정이나 보일러플레이트 코드 없이 반응형 상태 관리 접근 방식을 제공합니다. GetX는 성능과 사용 편의성으로 유명하며, 플러터 개발자들 사이에서 인기 있는 선택지입니다.</p>
<p>예제 4: GetX를 사용한 상태 관리:</p>
<p>이제 동일한 카운터 앱을 GetX를 사용하여 구현해 봅시다.</p>
<p>먼저, pubspec.yaml 파일에 get과 get_storage를 추가해주세요.</p>
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
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter</span><span class="token punctuation">:</span>
    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter
  <span class="token key atrule">get</span><span class="token punctuation">:</span> ^4.6.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제, 카운터 컨트롤러를 만들어 봅시다:</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:get/get.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">CounterController</span> <span class="token keyword">extends</span> <span class="token class-name">GetxController</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0.</span>obs<span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제, 해당 컨트롤러를 앱에 통합하세요:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'package:flutter/material.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:get/get.dart'</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token function">CounterApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CounterApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  final CounterController _controller <span class="token operator">=</span> Get<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token function">CounterController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">GetMaterialApp</span><span class="token punctuation">(</span>
      <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token function">Scaffold</span><span class="token punctuation">(</span>
        <span class="token literal-property property">appBar</span><span class="token operator">:</span> <span class="token function">AppBar</span><span class="token punctuation">(</span>title<span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">'GetX를 이용한 카운터 앱'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token function">Center</span><span class="token punctuation">(</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Obx</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Text</span><span class="token punctuation">(</span>
            <span class="token string">'카운터: ${_controller.count}'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">style</span><span class="token operator">:</span> Theme<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>textTheme<span class="token punctuation">.</span>headline4<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">floatingActionButton</span><span class="token operator">:</span> <span class="token function">FloatingActionButton</span><span class="token punctuation">(</span>
          <span class="token literal-property property">onPressed</span><span class="token operator">:</span> _controller<span class="token punctuation">.</span>increment<span class="token punctuation">,</span>
          <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token string">'증가'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Icon</span><span class="token punctuation">(</span>Icons<span class="token punctuation">.</span>add<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 예제에서는 GetX를 사용하여 CounterController를 정의합니다. Obx 위젯은 count 변수의 변경사항을 감지하고 플로팅 액션 버튼을 누를 때 UI를 업데이트합니다.</p>
<p>결론: 상태 관리는 플러터 개발의 기본 요소로서, 애플리케이션의 확장성, 성능 및 유지보수 기능성에 영향을 미칩니다. 플러터에서 사용 가능한 다양한 상태 관리 기술과 각각의 강점을 이해하여, 프로젝트 요구사항과 개발 워크플로에 가장 잘 맞는 방법을 선택할 수 있습니다. setState, Provider와 같은 내장 솔루션부터 Bloc, GetX와 같은 고급 패턴까지 선택하게 되는데, 상태 관리를 숙달하는 것은 뛰어난 플러터 앱을 구축하고, 원활한 사용자 경험을 제공하는 데 꼭 필요합니다.```</p>
</div></template>
