<template><div><p>항상 빠르게 배우는 사람이라고 생각해왔어요. 제가 스스로 외국어를 처음부터 배워서 구사할 수 있도록 했고, 기본적인 사진 및 비디오 편집을 배웠어요. 몇 년 동안 새로운 것을 배울 때 어떤 방법이 나에게 맞는지 알아내기에 성공했죠. 그러다 코딩에 발을 들였어요.</p>
<p>얼마 지나지 않아 이전까지 한 것과 전혀 다른 동물이라는 것을 깨달았어요. 여전히 꽤 꾸준히 발전하고 있다는 것을 알지만, 이미지를 열에 적절히 맞추는 것처럼 보이는 것조차 간단한 것으로 생각했을 때 고생하고 있다는 사실이 꽤 놀라웠어요. 안타깝게도 이것만으로는 충분하지 않았죠:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"예시"</span> alt<span class="token operator">=</span><span class="token string">"대체 텍스트"</span><span class="token operator">></span>

<span class="token punctuation">.</span>img <span class="token punctuation">{</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS의 본질적인 복잡성과 무엇을 하는지 이해하는 데 시간을 투자하는 것이 얼마나 중요한지 깨달기 시작했어요.</p>
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
<p>마음껏 연습해보세요</p>
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
<p>내가 이 분야에 처음 시작하는 사람에게 할 수 있는 가장 중요한 조언은 몇 주 만에 전문가가 되지 않을 것을 받아들이고, 실수를 해도 괜찮다는 것입니다. 이해가 잘 되지 않는 특정 요소에 대해 조금 더 연구를 하는 데 추가 시간을 투자해도 괜찮습니다. 이 모든 것이 과정의 일부입니다!</p>
<p>혼돈스러워질 것이고, 코드가 잘 작동하지 않는 이유를 이해하는 데 어려움을 겪을 것이며, 모든 것이 코드를 망치는 원인이 요소 그룹에서 빠진 쉼표라는 것을 깨닫게 될 것입니다. 위의 예시를 다시 살펴봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>pfimg<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">.</span>pfimg<span class="token operator">-</span><span class="token number">2</span>
pfimg<span class="token operator">-</span><span class="token number">3</span> <span class="token punctuation">{</span>
  max<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  min<span class="token operator">-</span>height<span class="token operator">:</span> 250px<span class="token punctuation">;</span>
  max<span class="token operator">-</span>height<span class="token operator">:</span> 250px<span class="token punctuation">;</span>
  object<span class="token operator">-</span>fit<span class="token operator">:</span> cover<span class="token punctuation">;</span>
  overflow<span class="token operator">-</span>y<span class="token operator">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 거의 동일하지만 두 번째 요소 뒤에 쉼표를 추가하는 것을 &quot;깜빡했습니다&quot;. 세 번째 요소를 무시하게 될 정도로 충분히 코드를 망가뜨릴 만큼의 영향을 미치게 됩니다.</p>
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
<p>실제로 그런 작은 실수조차도 패닉을 유발하고 전체 코드를 살펴 오류를 찾느라 시간을 낭비하는 일이 발생할 수 있어요. 그럴 때 도움이 되는 소중한 도구가 있어요:</p>
<p>코딩 편집기가 오류를 자동으로 가리키지 않는다면, 가장 유용한 도구는 W3C CSS 유효성 검사 서비스일 거예요. 그 곳에서 바로 어느 부분에 오류가 있는지를 안내해주며, 어떻게 수정해야 하는지 알려줄 거예요. 오류를 모두 수정한 후 프로젝트를 진행할 수 있어요. 그들은 일반 웹사이트 구조에 대해 확신이 없다면 HTML 유효성 검사기도 제공하고 있어요.</p>
<p>중요한 건 우리는 어리석은 실수를 더 자주 저질러낸다는 거예요. 핵심은 문제에 대한 접근 방식과 태도에 있어요. 오류를 찾으려고 노력할 때 침착함을 유지하는 것은 시간을 낭비하지 않고 문제를 해결하는 데 초점을 맞출 수 있게 하는 중요한 요소에요.</p>
<p>현명한 여성이 한 말이 있어요: &quot;모두가 실수를 하고, 모두가 그런 날을 가질 거야!&quot; — 그 실수들이 당신의 기분을 망쳐버리지 않게 하고, 그럼으로써 많은 시간과 에너지를 절약할 수 있어요!</p>
</div></template>
