<template><div><p>로더는 이야기와 데코레이터용 데이터를 로드하는 비동기 함수입니다. 이야기의 로더는 이야기가 렌더링되기 전에 실행되며, 로드된 데이터는 렌더 컨텍스트를 통해 이야기에 주입됩니다.</p>
<p>로더는 모든 에셋을 로드하거나, 컴포넌트를 지연로드하거나, 원격 API에서 데이터를 가져오는 데 사용할 수 있습니다. 이 기능은 대규모 이야기 가져오기를 처리하기 위한 성능 최적화로 설계되었습니다. 그러나 args는 이야기 데이터를 관리하는 권장 방법입니다. Args 주변의 도구 및 기술 생태계를 구축 중이며, 이와 로드된 데이터가 호환되지 않을 수 있습니다.</p>
<p>로더는 고급 기능(즉, 탈출구)으로, 다른 수단으로 충족할 수 없는 특정한 필요성이 있는 경우에만 사용을 권장합니다.</p>
<h2 id="api-데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#api-데이터-가져오기" aria-hidden="true">#</a> API 데이터 가져오기</h2>
<p>스토리는 내부 데이터로 정의된 내용이나 스토리와 함께 전달되는 args로 렌더링되는 독립된 구성 요소 예시입니다.</p>
<p>로더는 스토리 데이터를 외부에서로드해야 할 때 도움이 됩니다(예: 원격 API에서). 할 일 목록에 표시할 할 일 항목을 가져오는 다음 예시를 고려해보세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> fetch <span class="token keyword">from</span> <span class="token string">'node-fetch'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TodoItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./TodoItem'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> TodoItem<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> TodoItem<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span>args<span class="token punctuation">,</span> <span class="token punctuation">{</span> loaded<span class="token operator">:</span> <span class="token punctuation">{</span> todo <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>TodoItem <span class="token punctuation">{</span><span class="token operator">...</span>args<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>todo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> TodoItem<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Primary<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  loaders<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      todo<span class="token operator">:</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/todos/1'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>원격 API 호출로부터 얻은 응답은 스토리 컨텍스트의 로드된 필드로 결합되며, 이는 스토리 함수의 두 번째 인수입니다. 예를 들어, React에서는 스토리 args가 우선되게 되도록 먼저 전개되었습니다. 다른 프레임워크(예: Angular)에서는 보통 하는 대로 스토리를 작성할 수 있습니다.</p>
<h2 id="글로벌-로더" tabindex="-1"><a class="header-anchor" href="#글로벌-로더" aria-hidden="true">#</a> 글로벌 로더</h2>
<p>.storybook/preview.js 파일의 loaders 내보내기를 통해 모든 스토리에 로더를 설정할 수도 있어요 (이 파일은 모든 스토리를 구성하는 파일이에요):</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크 (예: react, vue3)로 your-framework를 교체해주세요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  loaders<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      currentUser<span class="token operator">:</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/users/1'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예에서, &quot;현재 사용자&quot;를 모든 스토리에서 loaded.currentUser로 불러올 수 있어요.</p>
<h2 id="로더-상속" tabindex="-1"><a class="header-anchor" href="#로더-상속" aria-hidden="true">#</a> 로더 상속</h2>
<p>파라미터와 마찬가지로, 로더는 전역으로 정의할 수 있고, 컴포넌트 레벨 또는 개별 스토리에 대해 정의할 수 있습니다 (우리가 본 것처럼).</p>
<p>스토리북의 캔버스에 스토리가 렌더링되기 전에 모든 레벨에 정의된 모든 로더가 실행됩니다.</p>
<ul>
<li>모든 로더는 병렬로 실행됨</li>
<li>모든 결과는 스토리 컨텍스트의 로드된 필드입니다</li>
<li>중복되는 키가 있다면 &quot;나중에&quot; 로더가 우선권을 갖습니다 (낮은 우선순위에서 높은 우선순위로):
전역 로더는 정의된 순서대로
컴포넌트 로더는 정의된 순서대로
스토리 로더는 정의된 순서대로</li>
<li>전역 로더는 정의된 순서대로</li>
<li>컴포넌트 로더는 정의된 순서대로</li>
<li>스토리 로더는 정의된 순서대로</li>
</ul>
</div></template>
