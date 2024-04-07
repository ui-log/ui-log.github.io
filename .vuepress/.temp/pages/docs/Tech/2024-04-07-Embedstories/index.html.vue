<template><div><p>동료 및 개발자 커뮤니티에 작업물을 소개하기 위해 이야기를 임베드하여 삽입하세요. 임베드를 사용하려면 Storybook이 게시되어 공개적으로 접근 가능해야 합니다.</p>
<p>Storybook은 <code v-pre>iframe</code> 임베드를 기본적으로 지원합니다. Chromatic을 사용하여 Storybook을 게시하는 경우, oEmbed 표준을 지원하는 Notion, Medium 및 무수히 많은 다른 플랫폼에서도 이야기를 임베드할 수 있습니다.</p>
<h2 id="툴바로-이야기-임베드" tabindex="-1"><a class="header-anchor" href="#툴바로-이야기-임베드" aria-hidden="true">#</a> 툴바로 이야기 임베드</h2>
<p>툴바로 이야기를 임베드하려면 게시된 이야기 URL을 붙여 넣으세요. 예시로:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>5ccbc373887ca40020446347<span class="token operator">-</span>wtuhidckxo<span class="token punctuation">.</span>chromatic<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token operator">?</span>path<span class="token operator">=</span><span class="token operator">/</span>story<span class="token operator">/</span>shadowboxcta<span class="token operator">--</span><span class="token keyword">default</span>

<span class="token comment">// iframe 삽입</span>
<span class="token operator">&lt;</span>iframe
  src<span class="token operator">=</span><span class="token string">"https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/?path=/story/shadowboxcta--default&amp;full=1&amp;shortcuts=false&amp;singleStory=true"</span>
  width<span class="token operator">=</span><span class="token string">"800"</span>
  height<span class="token operator">=</span><span class="token string">"260"</span>
<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="툴바-없이-이야기-삽입" tabindex="-1"><a class="header-anchor" href="#툴바-없이-이야기-삽입" aria-hidden="true">#</a> 툴바 없이 이야기 삽입</h2>
<p>Storybook 툴바 없이 간단한 이야기를 삽입하려면, Storybook 오른쪽 상단의 &quot;open canvas in new tab&quot; 아이콘을 클릭하여 캔버스 URL을 얻으세요. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>5ccbc373887ca40020446347<span class="token operator">-</span>wtuhidckxo<span class="token punctuation">.</span>chromatic<span class="token punctuation">.</span>com<span class="token operator">/</span>iframe<span class="token punctuation">.</span>html<span class="token operator">?</span>id<span class="token operator">=</span><span class="token operator">/</span>story<span class="token operator">/</span>shadowboxcta<span class="token operator">--</span><span class="token keyword">default</span><span class="token operator">&amp;</span>viewMode<span class="token operator">=</span>story

<span class="token comment">// iframe 삽입</span>
<span class="token operator">&lt;</span>iframe
  src<span class="token operator">=</span><span class="token string">"https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--default&amp;viewMode=story&amp;shortcuts=false&amp;singleStory=true"</span>
  width<span class="token operator">=</span><span class="token string">"800"</span>
  height<span class="token operator">=</span><span class="token string">"200"</span>
<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="문서-삽입" tabindex="-1"><a class="header-anchor" href="#문서-삽입" aria-hidden="true">#</a> 문서 삽입</h2>
<p>스토리 카드에 대해 생성된 독특한 자동 생성 문서 항목으로 viewMode=story를 대체하여 문서 페이지를 삽입하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>5ccbc373887ca40020446347<span class="token operator">-</span>wtuhidckxo<span class="token punctuation">.</span>chromatic<span class="token punctuation">.</span>com<span class="token operator">/</span>iframe<span class="token punctuation">.</span>html<span class="token operator">?</span>id<span class="token operator">=</span>shadowboxcta<span class="token operator">--</span>docs<span class="token operator">&amp;</span>viewMode<span class="token operator">=</span>docs<span class="token operator">&amp;</span>shortcuts<span class="token operator">=</span><span class="token boolean">false</span><span class="token operator">&amp;</span>singleStory<span class="token operator">=</span><span class="token boolean">true</span>

<span class="token comment">// iframe 삽입</span>
<span class="token operator">&lt;</span>iframe
  src<span class="token operator">=</span><span class="token string">"https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--docs&amp;viewMode=docs&amp;shortcuts=false&amp;singleStory=true"</span>
  width<span class="token operator">=</span><span class="token string">"800"</span>
  height<span class="token operator">=</span><span class="token string">"400"</span>
<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="다른-플랫폼에-스토리-삽입" tabindex="-1"><a class="header-anchor" href="#다른-플랫폼에-스토리-삽입" aria-hidden="true">#</a> 다른 플랫폼에 스토리 삽입</h2>
<p>모든 플랫폼마다 임베드 지원 수준이 다릅니다. 외부 콘텐츠를 임베드하는 방법에 대한 권장사항은 해당 서비스의 문서를 확인해보세요.</p>
</div></template>
