<template><div><p>타입스크립트로 이야기를 작성하면 더 생산적일 수 있습니다. 컴포넌트 속성을 찾아보기 위해 파일 간을 옮겨다니지 않아도 됩니다. 코드 편집기는 필수 속성이 누락된 것을 알려 주며, 앱 내에서 컴포넌트를 사용할 때와 마찬가지로 속성 값을 자동 완성해 줍니다. 게다가 스토리북은 해당 컴포넌트 유형을 추론하여 컨트롤 테이블을 자동 생성합니다.</p>
<p>스토리북은 기본적으로 TypeScript를 지원하므로 구성이 필요 없이 즉시 시작할 수 있습니다.</p>
<h2 id="meta-및-storyobj로-이야기의-타이핑" tabindex="-1"><a class="header-anchor" href="#meta-및-storyobj로-이야기의-타이핑" aria-hidden="true">#</a> Meta 및 StoryObj로 이야기의 타이핑</h2>
<p>이야기를 작성할 때 유용한 두 가지 측면이 있습니다. 첫 번째는 컴포넌트 메타(meta)로, 컴포넌트와 해당 이야기를 설명하고 구성합니다. CSF 파일에서 이것은 기본 내보내기(default export)입니다. 두 번째는 이야기 자체입니다.</p>
<p>Storybook은 각각 Meta와 StoryObj라는 유틸리티 타입을 제공합니다. 여기에는 해당 타입을 사용한 CSF 파일의 예시가 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 렌더러 (예: react, vue3 등)로 your-renderer를 대체하세요.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Basic<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Primary<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    primary<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props-타입-매개변수" tabindex="-1"><a class="header-anchor" href="#props-타입-매개변수" aria-hidden="true">#</a> Props 타입 매개변수</h3>
<p>Meta와 StoryObj 타입은 모두 제네릭이기 때문에 컴포넌트 타입이나 컴포넌트의 프롭스 타입에 선택적인 프롭 타입 매개변수를 제공할 수 있습니다 (예: Meta<code v-pre>typeof Button</code>의 typeof Button 부분). 이렇게 함으로써 TypeScript는 잘못된 arg를 정의하는 것을 방지하고 모든 데코레이터, 플레이 함수 또는 로더가 자신의 함수 인수를 타입 지정할 수 있게 됩니다.</p>
<p>위의 예시는 컴포넌트 유형을 전달하는 방법을 보여줍니다. props 유형을 전달하는 예시는 &quot;사용자 정의 args에 대한 유형 지정&quot;을 참조하세요.</p>
<h2 id="더-나은-유형-안전성을-위한-satisfies-사용" tabindex="-1"><a class="header-anchor" href="#더-나은-유형-안전성을-위한-satisfies-사용" aria-hidden="true">#</a> 더 나은 유형 안전성을 위한 satisfies 사용</h2>
<p>TypeScript 4.9+를 사용하고 있다면, 새로 추가된 satisfies 연산자를 활용하여 보다 엄격한 유형 검사를 수행할 수 있습니다. 이제 필수 args가 누락된 경우에도 유효하지 않은 경우뿐만 아니라 유형 오류를수신할 수 있습니다.</p>
<p>스토리의 유형을 적용하기 위해 satisfies를 사용하면, 이야기 간에 play 함수를 공유할 때 유형 안전성을 유지할 수 있습니다. satisfies를 사용하지 않으면 TypeScript는 play 함수가 정의되지 않았을 수 있다는 오류를 발생시킵니다. satisfies 연산자는 TypeScript가 play 함수가 정의되어 있는지 여부를 추론할 수 있도록 합니다.</p>
<p>마지막으로, satisfies의 사용을 통해 meta의 typeof를 StoryObj generic으로 전달할 수 있습니다. 이렇게 하면 TypeScript에 meta 유형과 StoryObj 유형 간의 연결을 알리게 되어 args 유형을 meta 유형에서 추론할 수 있습니다. 다시 말해, TypeScript는 args가 이야기 및 meta 레벨에서 모두 정의될 수 있다는 것을 이해하고, meta 레벨에서 필요한 arg가 정의되어 있지만 이야기 레벨에는 정의되어 있지 않을 때 오류를 발생시키지 않을 것입니다.</p>
<h2 id="사용자-정의-args의-유형화" tabindex="-1"><a class="header-anchor" href="#사용자-정의-args의-유형화" aria-hidden="true">#</a> 사용자 정의 args의 유형화</h2>
<p>가끔씩 이야기는 구성 요소 props에 포함되지 않은 args를 정의해야 할 수도 있습니다. 이 경우, 구성 요소의 props 유형과 사용자 정의 args 유형을 결합하기 위해 교차 유형을 사용할 수 있습니다. 예를 들어, footer arg를 사용하여 자식 구성 요소를 채우는 방법은 다음과 같습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Page <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Page'</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">PagePropsAndCustomArgs</span> <span class="token operator">=</span> React<span class="token punctuation">.</span>ComponentProps<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Page<span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span>PagePropsAndCustomArgs<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Page<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> footer<span class="token punctuation">,</span> <span class="token operator">...</span>args <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Page <span class="token punctuation">{</span><span class="token operator">...</span>args<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>footer<span class="token operator">></span><span class="token punctuation">{</span>footer<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Page<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span>PagePropsAndCustomArgs<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> CustomFooter<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    footer<span class="token operator">:</span> <span class="token string">'Built with Storybook'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
