<template><div><p>애드온 API는 맞춤 설정을 위해 설계되었습니다. 이는 애드온 저작자에게 사용자의 Storybook과 구성 및 통신하는 다양한 방법을 제공합니다. 이것들이 무엇이며 권장 사용 사례는 무엇인지 살펴보겠습니다.</p>
<h2 id="프리셋" tabindex="-1"><a class="header-anchor" href="#프리셋" aria-hidden="true">#</a> 프리셋</h2>
<p>프리셋은 사용자로부터 구성 부담을 줄여주고 애드온에게 일을 맡기는 역할을 합니다. 프리셋 옵션은 전역적이며 NodeJS에서 접근할 수 있습니다. 이는 Webpack 로더, Babel 플러그인 및 기타 라이브러리 또는 프레임워크별 구성 사전 구성하기에 이상적입니다.</p>
<p>예를 들어, 많은 라이브러리는 앱이 데이터를 하위 컴포넌트에 제공하는 Provider로 감싸져야 한다는 요구를 합니다. 프리셋은 사용자가 수동으로 구성할 필요 없이 자동으로 래퍼를 추가하는 동작을 설명할 수 있습니다. 사용자가 프리셋이 있는 애드온을 설치하면 애드온은 Storybook에 모든 스토리를 Provider로 감쌀 것을 요청할 수 있습니다. 이를 통해 사람들은 Storybook을 통해 라이브러리를 사용하기 시작할 수 있으며, 단지 1줄의 구성으로 가능합니다!</p>
<p>프리셋에 대해 더 자세히 알아보려면 다음을 참조하십시오: 프리셋 애드온 작성하기</p>
<p>각 스토리를 래핑하는 메커니즘을 스토리북 데코레이터라고 합니다. 이를 사용하여 스토리에 추가 렌더링 기능을 제공하거나 데이터를 제공할 수 있습니다.</p>
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<p>매개변수는 브라우저에서 사용할 수 있으며 애드온 동작을 전역으로 또는 컴포넌트 수준 또는 스토리 수준에서 구성하는 데 좋습니다.</p>
<p>예를 들어, Pseudo States 애드온은 매개변수를 사용하여 다양한 가상 상태를 활성화합니다. 사용자는 전역 기본값을 제공하고 이를 스토리 레벨에서 재정의할 수 있습니다.</p>
<p>useParameter 훅을 사용하여 애드온 내에서 매개변수 값을 액세스할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> Hover <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Button<span class="token operator">></span>라벨<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">parameters</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">pseudo</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">hover</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="채널" tabindex="-1"><a class="header-anchor" href="#채널" aria-hidden="true">#</a> 채널</h2>
<p>채널은 관리자와 미리보기 창 간에 NodeJS EventEmitter 호환 API를 사용하여 양방향 통신을 활성화합니다. 여러분의 애드온은 특정 채널에 연결하여 이러한 이벤트에 응답할 수 있습니다.</p>
<p>예를 들어, Actions 애드온은 사용자 이벤트를 캡처하고 해당 데이터를 패널에 표시합니다.</p>
<p>애드온 내에서 채널 데이터에 액세스하려면 useChannel 훅을 사용하세요.</p>
<p>자세한 예시는 storybookjs/addon-kit/withRoundTrip.ts를 확인해주세요.</p>
</div></template>
