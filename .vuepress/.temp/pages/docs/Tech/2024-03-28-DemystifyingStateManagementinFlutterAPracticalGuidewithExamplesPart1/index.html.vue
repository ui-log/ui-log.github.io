<template><div><p>소개: 상태 관리는 모든 플러터 애플리케이션의 핵심에 위치하여 데이터가 UI를 통해 흐르고 사용자 작업과 상호 작용하는 방식을 지시합니다. 플러터는 다양한 상태 관리 솔루션을 제공하여 다양한 시나리오와 선호도에 맞게 조정됩니다. 이 글에서는 실전 예제를 통해 플러터에서 여러 상태 관리 기술을 살펴보고, 프로젝트에 적합한 방식을 선택하는 데 도움을 줄 것입니다.</p>
<p>플러터에서 상태 이해: 상태 관리 기술을 탐색하기 전에, 플러터에서 상태가 무엇을 나타내는지 명확히 해보겠습니다. 상태는 시간이 지남에 따라 변경될 수 있는 데이터를 모두 포함하며, UI의 모양과 동작에 영향을 줍니다. 이는 사용자 입력, 네트워크 응답 또는 내부 앱 로직에 의해 트리거된 변경 사항을 포함합니다.</p>
<p>내장 상태 관리: 플러터는 위젯 내에서 상태를 관리하기 위한 내장 메커니즘을 제공합니다. 가장 일반적인 접근 방식은 setState를 사용하는 것으로, 상태가 변경될 때 위젯을 다시 빌드합니다. 개별 위젯 내에서 로컬 상태를 관리하기에 적합하지만, 복잡한 상태를 여러 위젯이나 화면 전반에 걸쳐 처리하는 데는 번거로워질 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'package:flutter/material.dart'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">CounterApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  @override
  _CounterAppState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">_CounterAppState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">_CounterAppState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token operator">&lt;</span>CounterApp<span class="token operator">></span> <span class="token punctuation">{</span>
  int _counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">_incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      _counter<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Scaffold</span><span class="token punctuation">(</span>
      <span class="token literal-property property">appBar</span><span class="token operator">:</span> <span class="token function">AppBar</span><span class="token punctuation">(</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">'Counter App'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token function">Center</span><span class="token punctuation">(</span>
        <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Column</span><span class="token punctuation">(</span>
          <span class="token literal-property property">mainAxisAlignment</span><span class="token operator">:</span> MainAxisAlignment<span class="token punctuation">.</span>center<span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Widget<span class="token operator">></span><span class="token punctuation">[</span>
            <span class="token function">Text</span><span class="token punctuation">(</span>
              <span class="token string">'Counter:'</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">Text</span><span class="token punctuation">(</span>
              <span class="token string">'$_counter'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">style</span><span class="token operator">:</span> Theme<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>textTheme<span class="token punctuation">.</span>headline4<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">floatingActionButton</span><span class="token operator">:</span> <span class="token function">FloatingActionButton</span><span class="token punctuation">(</span>
        <span class="token literal-property property">onPressed</span><span class="token operator">:</span> _incrementCounter<span class="token punctuation">,</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token string">'Increment'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Icon</span><span class="token punctuation">(</span>Icons<span class="token punctuation">.</span>add<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token function">CounterApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
