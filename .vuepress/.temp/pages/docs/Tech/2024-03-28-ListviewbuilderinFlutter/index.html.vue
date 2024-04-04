<template><div><p>ListView.builder는 효율적으로 스크롤 가능한 목록이나 그리드를 만드는 데 사용되는 강력한 Flutter 위젯입니다. 사용자가 스크롤 할 때 필요에 따라 항목을 생성하여 메모리 사용량을 줄이고 성능을 향상시킬 수 있어 많은 수의 항목을 처리할 때 특히 유용합니다. 여기에 주요 구성 요소에 대한 설명이 있습니다:</p>
<ul>
<li>itemCount: 이 속성은 목록의 항목 수를 정의합니다. itemBuilder 함수가 호출될 횟수를 지정합니다.</li>
<li>itemBuilder: 이 콜백 함수는 목록의 각 항목에 대해 호출됩니다. 두 인수를 사용합니다: BuildContext 및 int index. 주어진 인덱스의 항목에 대한 위젯을 반환하는 것은 사용자의 책임입니다.</li>
<li>shrinkWrap: true로 설정하면 ListView는 자식을 표시하는 데 필요한만큼의 수직 공간만 차지합니다. ListView가 다른 스크롤 가능한 위젯 내에 배치된 경우 유용할 수 있습니다.</li>
<li>physics: 스크롤 동작을 정의합니다. 원하는 스크롤 방식에 따라 BouncingScrollPhysics, ClampingScrollPhysics 등 다양한 옵션을 선택할 수 있습니다.</li>
<li>scrollDirection : 목록이 스크롤할 방향을 지정합니다. 수직 목록의 경우 Axis.vertical(기본값) 또는 수평 목록의 경우 Axis.horizontal일 수 있습니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ListView<span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
  <span class="token literal-property property">itemCount</span><span class="token operator">:</span> items<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
  <span class="token literal-property property">itemBuilder</span><span class="token operator">:</span> <span class="token punctuation">(</span>BuildContext context<span class="token punctuation">,</span> int index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">ListTile</span><span class="token punctuation">(</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ListView.builder는 일반적으로 다음 시나리오에서 사용됩니다:</p>
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
<li>동적 데이터 표시: 메시지, 연락처 또는 API에서 가져온 제품 목록과 같이 크기가 변경될 수 있는 항목 목록이 있는 경우, ListView.builder를 사용하면 각 항목에 대한 UI 요소를 동적으로 생성할 수 있습니다.</li>
<li>성능 최적화: 많은 수의 항목을 처리할 때, ListView.builder는 가시 항목에 대해서만 위젯을 생성하기 때문에 정적 위젯 목록을 생성하는 것보다 메모리를 더 효율적으로 사용합니다.</li>
<li>무한 스크롤: 사용자가 스크롤할 때 새 항목이 로드되는 애플리케이션에서 무한 스크롤을 구현하는 데 자주 사용됩니다. 이는 소셜 미디어 피드와 같은 경우입니다.</li>
</ul>
<p>아래는 ListView.builder를 사용한 간단한 예시입니다:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*tH6teEqAw_NXp3LELGBcdA.gif" alt="이미지"></p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
      debugShowCheckedModeBanner<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      home<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
          title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Multiple Lists with Cards'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token class-name">ListsWithCards</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ListsWithCards</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 세 가지 목록을 위한 샘플 데이터</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> listsData <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'아이템 1'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'아이템 2'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'아이템 3'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'아이템 A'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'아이템 B'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'아이템 C'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'아이템 D'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'아이템 X'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'아이템 Y'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'아이템 Z'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'아이템 P'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'아이템 Q'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'아이템 R'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'아이템 M'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'아이템 N'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'아이템 O'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token class-name">ListView</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
      itemCount<span class="token punctuation">:</span> listsData<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
      itemBuilder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">CardList</span><span class="token punctuation">(</span>listData<span class="token punctuation">:</span> listsData<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CardList</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> listData<span class="token punctuation">;</span>

  <span class="token class-name">CardList</span><span class="token punctuation">(</span><span class="token punctuation">{</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>listData<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Card</span><span class="token punctuation">(</span>
      margin<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
            title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'목록 </span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">listData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">Divider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">ListView</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
            itemCount<span class="token punctuation">:</span> listData<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
            shrinkWrap<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            physics<span class="token punctuation">:</span> <span class="token class-name">NeverScrollableScrollPhysics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            itemBuilder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>listData<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 코드에서:</p>
<ul>
<li>ListsWithCards는 여러 데이터 목록을 포함하는 ListView.builder를 생성하는 위젯입니다. listsData 목록을 사용자 지정할 수 있습니다.</li>
<li>CardList는 카드가 있는 단일 목록을 표시하는 위젯이며, 해당 특정 목록의 데이터인 listData 매개변수를 사용합니다.</li>
<li>CardList 내에서 각 목록마다 Card 위젯을 생성합니다. 목록 제목으로 ListTile을 포함하고 해당 목록 내의 항목을 표시하기 위해 중첩된 ListView.builder를 사용합니다.</li>
<li>중첩된 ListView.builder는 shrinkWrap: true 및 physics: NeverScrollableScrollPhysics()로 설정되어 각 카드 내에서 독립적으로 스크롤하지 않지만 전체 목록으로 스크롤할 수 있도록 합니다.</li>
</ul>
<p>특정 디자인 기호에 맞게 UI를 더 맞춤화할 수 있습니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:996/1*qtGTaKs5VoWOOHScCHOtmQ.gif" alt="이미지"></p>
</div></template>
