<template><div><h2 id="문제" tabindex="-1"><a class="header-anchor" href="#문제" aria-hidden="true">#</a> 문제</h2>
<p>웹의 보편성은 프론트엔드에 더 많은 복잡성을 가져오고 있습니다. 반응형 웹 디자인부터 시작하여 모든 사용자 인터페이스를 하나에서 10, 100, 1000개의 다른 사용자 인터페이스로 바꿉니다. 시간이 지남에 따라 장치, 브라우저, 접근성, 성능 및 비동기 상태와 같은 추가 요구 사항이 쌓이기 시작했습니다.</p>
<p>React, Vue 3 및 Angular와 같은 구성 요소 중심의 도구는 복잡한 UI를 간단한 구성 요소로 분해하는 데 도움이 되지만 마법같은 해결책은 아닙니다. 프론트엔드가 커질수록 구성 요소의 수도 증가합니다. 성숙한 프로젝트에는 수백 개의 구성 요소가 포함될 수 있으며 수천 개의 이산적 변형을 제공할 수 있습니다.</p>
<p>그리고 더욱 복잡하게 만드는 것은 해당 UI가 비즈니스 로직, 상호 작용 상태 및 앱 컨텍스트와 얽혀있어 디버그하기 어려울 수 있다는 점입니다.</p>
<p>현대 프론트엔드의 다양성은 기존의 작업 흐름을 압도합니다. 개발자들은 끝없는 UI 변형을 고려해야하지만 모든 것을 개발하거나 구성할 수는 없습니다. UI를 구축하기가 더 어려우며 작업하기도 덜 만족스럽고 부서지기 쉬운 상황에 처하게 됩니다.</p>
<p><img src="@source/docs/Design/2024-04-07-WhyStorybook/img/WhyStorybook_0.png" alt="WhyStorybook_0"></p>
<h2 id="해결책" tabindex="-1"><a class="header-anchor" href="#해결책" aria-hidden="true">#</a> 해결책</h2>
<h4 id="ui를-격리된-환경에서-구축하세요" tabindex="-1"><a class="header-anchor" href="#ui를-격리된-환경에서-구축하세요" aria-hidden="true">#</a> UI를 격리된 환경에서 구축하세요</h4>
<p>모든 UI 요소를 이제 컴포넌트로 다루게 됐어요. 컴포넌트의 강력한 기능은 전체 앱을 구동시킬 필요 없이 렌더링 결과를 확인할 수 있다는 거에요. 프롭스를 전달하거나 데이터를 모킹하거나 이벤트를 가짜로 만들어 특정 변형을 격리된 환경에서 렌더링할 수 있어요.</p>
<p>Storybook은 작은 개발 전용 작업장으로 제공돼요. 앱과 함께 공존하면서 컴포넌트를 간섭 없이 렌더링할 수 있는 격리된 iframe을 제공해요. 그렇게 하면 앱 비즈니스 로직이나 컨텍스트의 영향을 받지 않고 각 컴포넌트 변형에 주력할 수 있어요, 심지어 접근하기 어려운 엣지 케이스까지요.</p>
<p><img src="@source/docs/Design/2024-04-07-WhyStorybook/img/WhyStorybook_0.mp4" alt="동영상"></p>
<h3 id="스토리-로-ui-변형-캡처하기" tabindex="-1"><a class="header-anchor" href="#스토리-로-ui-변형-캡처하기" aria-hidden="true">#</a> “스토리”로 UI 변형 캡처하기</h3>
<p>컴포넌트 변형을 독립적으로 개발할 때는 해당 내용을 story로 저장하세요. 스토리는 props를 제공하고 컴포넌트 변형을 시뮬레이션하기 위한 모의 데이터를 선언적으로 나타내는 구문입니다. 각 컴포넌트는 여러 개의 스토리를 가질 수 있습니다. 각 스토리를 사용하면 해당 컴포넌트의 특정 변형을 보여주어 외관과 동작을 확인할 수 있습니다.</p>
<p>그래나 각 스토리는 해당 컴포넌트의 특정 변형을 확인하기 위해 사용할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@storybook/react"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Histogram <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./Histogram"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Histogram<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Histogram<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Histogram<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Default<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    dataType<span class="token operator">:</span> <span class="token string">"latency"</span><span class="token punctuation">,</span>
    showHistogramLabels<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    histogramAccentColor<span class="token operator">:</span> <span class="token string">"#1EA7FD"</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">"Latency distribution"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="storybook은-모든-스토리를-추적합니다" tabindex="-1"><a class="header-anchor" href="#storybook은-모든-스토리를-추적합니다" aria-hidden="true">#</a> Storybook은 모든 스토리를 추적합니다.</h4>
<p>Storybook은 UI 구성요소와 이야기들에 대한 대화식 디렉토리입니다. 과거에는 앱을 실행시키고 페이지로 이동하여 UI를 올바른 상태로 만들어야 했습니다. 이는 시간 낭비이며 프론트엔드 개발을 방해합니다. 그러나 Storybook을 사용하면 이러한 모든 단계를 건너뛰고 특정 상태의 UI 구성요소에 직접 작업할 수 있습니다.</p>
<video  autoplay="" playsinline="" loop="">
  <source src="@source/docs/Design/2024-04-07-WhyStorybook/img/WhyStorybook_1.mp4" type="video/mp4">
</video>
<video  autoplay="" playsinline="" loop="">
  <source src="@video/docs/Design/2024-04-07-WhyStorybook/img/WhyStorybook_1.mp4" type="video/mp4">
</video>
<h2 id="이점" tabindex="-1"><a class="header-anchor" href="#이점" aria-hidden="true">#</a> 이점</h2>
<p>구성요소에 대한 이야기를 작성하면 추가 혜택을 무료로 얻을 수 있습니다.</p>
<p>📝 더 견고한 UI 개발하기</p>
<p>컴포넌트와 페이지를 분리하여 사용 사례를 스토리로 추적하세요. UI의 어렵게 접근할 수 있는 경계 상황을 확인하세요. 컴포넌트가 필요로 하는 모든 것을 모킹하기 위해 애드온을 사용하세요 - 컨텍스트, API 요청, 기기 기능 등을 포함합니다.</p>
<p>✅ 더 쉽고 안정적으로 UI 테스트하기</p>
<p>스토리는 UI 상태를 추적하는 실용적이고 반복 가능한 방법입니다. 개발 중에 UI를 스팟 테스트하는 데 사용하세요. Storybook은 자동 접근성, 상호 작용 및 시각적 테스트를 위한 내장 워크플로우를 제공합니다. 또는 다른 JavaScript 테스팅 도구로 가져와서 스토리를 테스트 케이스로 사용할 수도 있습니다.</p>
<p>📚 당신의 팀이 재사용할 수 있는 UI 문서화</p>
<p>Storybook는 당신의 UI에 대한 단일 출처입니다. 스토리는 모든 컴포넌트와 그들의 다양한 상태를 색인화하여 당신의 팀이 기존 UI 패턴을 쉽게 찾고 재사용할 수 있도록 합니다. Storybook은 또한 그러한 스토리에서 문서를 자동으로 생성합니다.</p>
<p>📤 UI가 실제로 어떻게 작동하는지 공유</p>
<p>스토리들은 UI가 실제로 작동하는 방식을 보여줍니다. 그들이 어떻게 작동해야 하는지 그림만 보여주는 것이 아니라요. 이를 통해 모두가 현재 제품화된 것이 무엇인지에 대해 일치하게 유지할 수 있습니다. 동료들로부터 승인을 받기 위해 Storybook을 발행하거나 협업을 간소화하기 위해 위키, Markdown 및 Figma에 내장할 수 있습니다.</p>
<p>🚦 UI 워크플로우 자동화</p>
<p>스토리북은 연속적인 통합 워크플로우와 호환됩니다. 이를 CI 단계로 추가하여 사용자 인터페이스 테스트를 자동화하고 동료들과 구현을 검토하며 이해 관계자로부터 승인을 받을 수 있습니다.</p>
<h2 id="한-번-작성하면-어디서나-재사용하세요" tabindex="-1"><a class="header-anchor" href="#한-번-작성하면-어디서나-재사용하세요" aria-hidden="true">#</a> 한 번 작성하면 어디서나 재사용하세요</h2>
<p>스토리북은 구성 요소 스토리 형식에 의해 제공되며, JavaScript ES6 모듈을 기반으로 한 오픈 표준을 사용합니다. 이는 스토리가 개발, 테스트 및 디자인 도구 간에 상호 운용 할 수 있도록 합니다. 각 스토리는 JavaScript 함수로 내보내어 다른 도구에서 재사용할 수 있도록합니다. 벤더 락인이 없습니다.</p>
<p>Jest나 Vitest 그리고 Testing Library를 사용하여 상호 작용을 확인하세요. Chromatic에 시각적 테스트를 위해 이야기를 넣으세요. Axe로 이야기의 접근성을 심사하세요. 또는 Playwright와 Cypress로 사용자 흐름을 테스트하세요. 재사용은 추가 비용 없이 더 많은 워크플로를 제공합니다.</p>
<p>Storybook은 복잡한 UI를 더 빠르고 튼튼하게 개발할 수 있도록 특별히 설계되었습니다. 수백 개의 주요 회사와 수천 명의 개발자가 사용하고 있습니다.</p>
</div></template>
