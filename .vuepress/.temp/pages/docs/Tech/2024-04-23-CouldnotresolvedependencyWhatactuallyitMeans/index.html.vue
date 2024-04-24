<template><div><p>저는 Node와 React 의존성을 버전 x(예: 10.0)에서 X(예: 16.20.1)으로 업그레이드하는 작업을 진행 중이에요. 의존성 문제에 부딪혔는데, npm에서 &quot;의존성을 해결할 수 없음&quot; 오류를 정확히 어떻게 이해해야 하는지 간단한 설명을 찾지 못했어요.</p>
<p>아래와 같이 보입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ npm i
npm <span class="token constant">ERR</span><span class="token operator">!</span> code <span class="token constant">ERESOLVE</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span> <span class="token constant">ERESOLVE</span> could not resolve
npm <span class="token constant">ERR</span><span class="token operator">!</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span> While resolving<span class="token operator">:</span> react<span class="token operator">-</span>sortable<span class="token operator">-</span>hoc@<span class="token number">2.0</span><span class="token number">.0</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span> Found<span class="token operator">:</span> react@<span class="token number">18.2</span><span class="token number">.0</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span> node_modules<span class="token operator">/</span>react
npm <span class="token constant">ERR</span><span class="token operator">!</span>   react@<span class="token string">"^18.2.0"</span> from the root project
npm <span class="token constant">ERR</span><span class="token operator">!</span>   peer react@<span class="token string">">=16.8.0"</span> from @dnd<span class="token operator">-</span>kit<span class="token operator">/</span>accessibility@<span class="token number">3.1</span><span class="token number">.0</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span>   node_modules<span class="token operator">/</span>@dnd<span class="token operator">-</span>kit<span class="token operator">/</span>accessibility
npm <span class="token constant">ERR</span><span class="token operator">!</span>     @dnd<span class="token operator">-</span>kit<span class="token operator">/</span>accessibility@<span class="token string">"^3.1.0"</span> from @dnd<span class="token operator">-</span>kit<span class="token operator">/</span>core@<span class="token number">6.1</span><span class="token number">.0</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span>     node_modules<span class="token operator">/</span>@dnd<span class="token operator">-</span>kit<span class="token operator">/</span>core
npm <span class="token constant">ERR</span><span class="token operator">!</span>       @dnd<span class="token operator">-</span>kit<span class="token operator">/</span>core@<span class="token string">"^6.1.0"</span> from the root project
npm <span class="token constant">ERR</span><span class="token operator">!</span>       <span class="token number">1</span> <span class="token function">more</span> <span class="token punctuation">(</span>@dnd<span class="token operator">-</span>kit<span class="token operator">/</span>sortable<span class="token punctuation">)</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span>   <span class="token number">79</span> <span class="token function">more</span> <span class="token punctuation">(</span>@dnd<span class="token operator">-</span>kit<span class="token operator">/</span>core<span class="token punctuation">,</span> @dnd<span class="token operator">-</span>kit<span class="token operator">/</span>sortable<span class="token punctuation">,</span> @dnd<span class="token operator">-</span>kit<span class="token operator">/</span>utilities<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span> Could not resolve dependency<span class="token operator">:</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span> peer react@<span class="token string">"^16.3.0 || ^17.0.0"</span> from react<span class="token operator">-</span>sortable<span class="token operator">-</span>hoc@<span class="token number">2.0</span><span class="token number">.0</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span> node_modules<span class="token operator">/</span>react<span class="token operator">-</span>sortable<span class="token operator">-</span>hoc
npm <span class="token constant">ERR</span><span class="token operator">!</span>   react<span class="token operator">-</span>sortable<span class="token operator">-</span>hoc@<span class="token string">"^2.0.0"</span> from the root project
npm <span class="token constant">ERR</span><span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 오류는 쇼케이스용이에요... 여러분의 문제는 다를 수 있어요.</p>
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
<p>인간 용어로 번역하면 다음과 같습니다: — → 꽤 혼란스럽네요…</p>
<p>한 패키지를 해결하는 동안, 방금 언급한 라이브러리가 필요로 하는 것과 맞지 않는 의존성을 발견했습니다. 아래를 참조하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm <span class="token constant">ERR</span><span class="token operator">!</span> While resolving<span class="token operator">:</span> react<span class="token operator">-</span>sortable<span class="token operator">-</span>hoc@<span class="token number">2.0</span><span class="token number">.0</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span> Found<span class="token operator">:</span> react@<span class="token number">18.2</span><span class="token number">.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>처음에 읽을 때 약간 혼란스럽습니다. “무엇을 발견했는데 문제가 뭔가요?”라는 생각이 들어요. 더 읽어봐야 정확히 알 수 있죠. 위와 같은 문구를 보면…</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm <span class="token constant">ERR</span><span class="token operator">!</span> 종속성을 해결할 수 없습니다<span class="token operator">:</span>
npm <span class="token constant">ERR</span><span class="token operator">!</span> react<span class="token operator">-</span>sortable<span class="token operator">-</span>hoc@<span class="token number">2.0</span><span class="token number">.0</span>에서 요구하는 피어 종속성 react@<span class="token string">"^16.3.0 || ^17.0.0"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>해당 종속성 (react-sortable-hoc)이 요구하는 것과 허용되는 버전들입니다. 이 경우, react-sortable-hoc@2.0.0을 사용하려면 react@16 또는 react@17이 필요하지만, 우리는 업그레이드 중이므로 위쪽에 있습니다. Found에서 react@18이 존재함을 알 수 있습니다.</p>
<p>이 문제가 무엇인지 실제 개념을 찾았으면 좋겠습니다. 하지만 여기에 해결책이 있습니다....</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm <span class="token constant">ERR</span><span class="token operator">!</span> 상류 종속성 충돌을 해결하거나 다시 시도하십시오
npm <span class="token constant">ERR</span><span class="token operator">!</span> 이 명령을 <span class="token operator">--</span>force 또는 <span class="token operator">--</span>legacy<span class="token operator">-</span>peer<span class="token operator">-</span>deps와 함께 실행하십시오
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>어떤 조사와 수정을 진행하거나 빌드를 업데이트하여 이 문제를 해결할 수도 있어요(덜 이상적이고, 위험이 따를 수도 있지만요).</p>
<p>이 상황을 해결하기 위해, 저는 react-sortable-hoc을 확인해서 업그레이드 가능한지 살펴봤어요. 그러나 이 라이브러리는 그것이 하는 일을 해결할 다른 라이브러리를 사용하는 것이 좋다고 제안하고 있어요(README에서 그 이유가 나와 있어요). 그래서 의존성 해결 여정은 계속됩니다... 하지만 혹시 이 &quot;의존성을 해결할 수 없음&quot;에 대한 설명이 나중의 독자에게 도움이 되길 바라요!</p>
<p>팸 셀리님 감사합니다.</p>
</div></template>
