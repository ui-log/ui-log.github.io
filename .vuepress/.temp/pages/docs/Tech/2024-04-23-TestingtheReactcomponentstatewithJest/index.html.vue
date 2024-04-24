<template><div><p>테스트할 때 가장 중요한 규칙은 상태를 테스트하지 말아야 한다는 것이에요. 상태가 현재 상태 그대로라면 그만큼 좋은거죠.</p>
<p>이에는 많은 지혜가 있어요. 결국 무엇을 테스트해야할까요? useState()의 간단한 예제를 살펴보죠:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>thing<span class="token punctuation">,</span> setThing<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setThing</span><span class="token punctuation">(</span><span class="token string">'something'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>thing === 'something'인지 테스트하기 위해 추가적인 테스트가 필요할까요? 아니요, 왜냐하면 useState는 React의 핵심 구성 요소이며, 철저히 테스트되어야 하기 때문이에요.</p>
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
<p>그러나 때때로 이와 같은 상황에 직면할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">method</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">increment</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> value <span class="token operator">+</span> increment<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token function">setValue</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여전히 상태의 내용을 테스트해서는 안 되지만, value가 실제로 5보다 크면 0으로 회귀하는지 확인하고 싶을 수도 있습니다. 다시 말해, 올바른 값이 구성 요소 상태로 전달되는지 여부를 확인하고 싶을 수 있습니다.</p>
<p>이런 경우에는 상태를 시뮬레이션하거나 대체해야 합니다. 고행하는 코드 조각들이 많지만, 불행히도 많은 것들이 구식이 되어 더 이상 작동하지 않습니다. 여기에는 최소한 2022년 9월까지 동작하는 하나의 방법이 있습니다.</p>
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
<p>먼저, 컴포넌트에 중요한 수정 사항이 있습니다. 현재 여러분은 아마도 다음과 같이 useState를 사용하고 있을 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useState를 제거하고 React.useState()로 대신 참조해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>왜 그래요? useState를 별도로 import 하면 컴포넌트의 private 메소드처럼 작용하고, React.useState는 import된 객체의 public 메소드처럼 작동합니다. 전자는 거의 스터브할 수 없습니다.</p>
<p>그럼, Jest 테스트를 만들어 봅시다!</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'state에 들어가는 것을 테스트해야 합니다'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> setState <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  jest
    <span class="token punctuation">.</span><span class="token function">spyOn</span><span class="token punctuation">(</span>React<span class="token punctuation">,</span> <span class="token string">'useState'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mockImplementationOnce</span><span class="token punctuation">(</span><span class="token parameter">initState</span> <span class="token operator">=></span> <span class="token punctuation">[</span>initState<span class="token punctuation">,</span> setState<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 하면 모의 컴포넌트 상태가 생성됩니다. 이제 모든 상태 작업은 실제 상태가 아닌 setState 스터브을 대상으로 할 것입니다.</p>
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
<p>아마도 우리가 mockImplementationOnce()을 사용했고 mockImplementation()을 사용하지 않았다는 것에 주목했을 것입니다. 이것은 가짜 상태가 다음 테스트에 영향을 미치지 않도록하기 위함입니다. 테스트 끝에 jest.clearAllMocks()를 호출해도 이것을 제거하지 않습니다. 단지 mock 함수 setState()만을 제거할 뿐이며, 컴포넌트의 상태 기능이 올바르게 작동하지 않을 것입니다. 물론 이에 대해 걱정이 없고 모든 후속 단위 테스트에서 가짜 상태를 유지하려면 mockImplementation()을 자유롭게 사용해도 됩니다.</p>
<p>상태에 영향을 주는 컴포넌트 작업을 트리거하려면 (실제로든 가짜든) 테스트 함수를 act()로 래핑해야 합니다. 예를 들어 컴포넌트에 버튼이 있다고 가정해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Button 
  data<span class="token operator">-</span>testid<span class="token operator">=</span><span class="token string">"button"</span>
  onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token number">303</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">></span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음 스니펫은 가상 DOM에서 이 버튼을 찾아 클릭합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> button <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">act</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> fireEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">expect</span><span class="token punctuation">(</span>setState<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token number">303</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 expect 라인은 액션이 발생한 후에 상태가 303 값을 받았는지를 확인할 것입니다.</p>
<p>이것이 컴포넌트 상태를 테스트하는 유일한 방법입니다. 한 번 더 강조하자면: 실제로 컴포넌트 상태를 테스트할 필요가 없으며, 이를 하지 않아도 커버리지에 영향을 미치지 않습니다. 일반적으로 상태 변경의 효과를 테스트해야 합니다. 예를 들어 자식 컴포넌트나 DOM 요소가 나타나거나 사라지는지, 텍스트가 변경되는지 등을 테스트해야 합니다.```</p>
</div></template>
