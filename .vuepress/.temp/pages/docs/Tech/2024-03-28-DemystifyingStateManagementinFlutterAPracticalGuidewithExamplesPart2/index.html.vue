<template><div><p>InheritedWidget 및 Provider: InheritedWidget은 위젯 트리 전체에서 상태를 공유하는 내장 메커니즘입니다. 이를 통해 prop drilling이 필요하지 않고 효율적으로 데이터를 전달할 수 있습니다. 그러나 InheritedWidget을 직접 사용하면 장황하고 복잡할 수 있습니다. Provider 패키지는 InheritedWidget을 내부적으로 사용하여 상태를 관리하고 소비하는 데 대한 고수준 API를 제공하여이 프로세스를 단순화합니다.</p>
<p>이제 Provider 패키지를 사용하여 여러 위젯 간에 계수 상태를 공유하는 카운터 앱을 확장해 보겠습니다:</p>
<p>먼저 ChangeNotifier를 확장하는 Counter 클래스를 만듭니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">with</span> ChangeNotifier <span class="token punctuation">{</span>
  int _count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  int <span class="token keyword">get</span> <span class="token parameter">count</span> <span class="token operator">=></span> _count<span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">notifyListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>notifyListeners() 메서드는 앱 내의 리스너를 다시 빌드하기 때문에 중요합니다.</p>
<p>둘째로, ChangeNotifierProvider로 앱을 감싸고 이 경우에는 Counter를 생성된 프로바이더로 전달하세요.</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:provider/provider.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span>
    <span class="token class-name">ChangeNotifierProvider</span><span class="token punctuation">(</span>
      create<span class="token punctuation">:</span> <span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> <span class="token class-name">CounterApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CounterApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
      home<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
          title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Counter App with Provider'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
          child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
            mainAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">MainAxisAlignment</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
            children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">></span></span><span class="token punctuation">[</span>
              <span class="token class-name">Text</span><span class="token punctuation">(</span>
                <span class="token string-literal"><span class="token string">'Counter:'</span></span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
                builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> counter<span class="token punctuation">,</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
                    <span class="token string-literal"><span class="token string">'</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">counter<span class="token punctuation">.</span>count</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">,</span>
                    style<span class="token punctuation">:</span> <span class="token class-name">Theme</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>textTheme<span class="token punctuation">.</span>headline4<span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        floatingActionButton<span class="token punctuation">:</span> <span class="token class-name">FloatingActionButton</span><span class="token punctuation">(</span>
          onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Provider</span><span class="token punctuation">.</span>of<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> listen<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          tooltip<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'Increment'</span></span><span class="token punctuation">,</span>
          child<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>add<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
