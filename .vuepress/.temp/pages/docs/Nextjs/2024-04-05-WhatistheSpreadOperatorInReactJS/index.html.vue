<template><div><img src="@source/docs/Nextjs/2024-04-05-WhatistheSpreadOperatorInReactJS/img/WhatistheSpreadOperatorInReactJS_0.png" />
<p>이 블로그 포스트에서는 React JS에서 Spread 연산자가 무엇인지 알아보고 React JS와 함께 작업할 때 어떤 중요한 역할을 하는지 배울 것입니다.</p>
<h1 id="목표" tabindex="-1"><a class="header-anchor" href="#목표" aria-hidden="true">#</a> 목표</h1>
<p>주요 작업은 복사, 병합, props 전달, 함수 인수 및 해체입니다. 하나씩 이해해 보겠습니다.</p>
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
<h1 id="복사" tabindex="-1"><a class="header-anchor" href="#복사" aria-hidden="true">#</a> 복사</h1>
<p>기존 배열을 수정하지 않고 배열의 복사본을 만드는 것이 쉽게 가능합니다. 이 개념은 원본 소스를 영향을 주지 않고 데이터를 조작할 때 유용합니다. 객체에 대해서도 동일하게 작동합니다.</p>
<p>복사 과정에서 새로운 배열이나 객체에 효과적으로 키-값 쌍을 생성하며, 배열 요소가 값이 되고 그들의 인덱스(배열의 경우) 또는 객체 속성이 키가 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> oldArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>oldArray<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: [1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>더 보기: https://clubofprogrammers.com/spread-operator-in-react-js/</p>
<p>또한 힌디어로 된 리액트 강좌를 시청해보세요.</p>
</div></template>
