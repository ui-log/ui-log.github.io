<template><div><p>Markdown 블록을 사용하면 MDX 파일에 일반 마크다운을 가져와 포함할 수 있어요.</p>
<p><img src="@source/docs/Tech/2024-04-07-Markdown/img/Markdown_0.png" alt="Markdown_0"></p>
<p>마크다운 파일을 가져올 때는 가져오는 경로에 ?raw 접미사를 사용하여 콘텐츠가 그대로 가져와지고 평가되지 않도록 해야 해요:</p>
<h1 id="버튼" tabindex="-1"><a class="header-anchor" href="#버튼" aria-hidden="true">#</a> 버튼</h1>
<p>사용자 상호작용을 위한 기본 UI 구성 요소</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@storybook/design-system"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 이렇게 하지 마시고, 에러가 발생합니다</span>
<span class="token keyword">import</span> ReadMe <span class="token keyword">from</span> <span class="token string">'./README.md'</span><span class="token punctuation">;</span>
<span class="token comment">// 이렇게 하세요, 작동합니다</span>
<span class="token keyword">import</span> ReadMe <span class="token keyword">from</span> <span class="token string">'./README.md?raw'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Markdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

# 헤더

<span class="token operator">&lt;</span>Markdown<span class="token operator">></span><span class="token punctuation">{</span>ReadMe<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Markdown<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="마크다운" tabindex="-1"><a class="header-anchor" href="#마크다운" aria-hidden="true">#</a> 마크다운</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Markdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>마크다운은 다음 속성과 함께 구성되어 있습니다:```</p>
<h3 id="자식-요소" tabindex="-1"><a class="header-anchor" href="#자식-요소" aria-hidden="true">#</a> 자식 요소</h3>
<p>유형: 문자열</p>
<p>해석하고 표시할 마크다운 형식의 문자열을 제공합니다.</p>
<h3 id="옵션" tabindex="-1"><a class="header-anchor" href="#옵션" aria-hidden="true">#</a> 옵션</h3>
<p>마크다운을 JSX로 변환하는 라이브러리에 전달되는 옵션을 지정합니다.</p>
<h2 id="직접-마크다운을-가져오지-않는-이유는-무엇인가요" tabindex="-1"><a class="header-anchor" href="#직접-마크다운을-가져오지-않는-이유는-무엇인가요" aria-hidden="true">#</a> 직접 마크다운을 가져오지 않는 이유는 무엇인가요?</h2>
<p>순수하게 기술적인 측면에서, 우리는 이렇게 MDX 파일에 가져온 마크다운을 직접 포함시킬 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ReadMe <span class="token keyword">from</span> <span class="token string">'./README.md'</span><span class="token punctuation">;</span>

# 제목

<span class="token punctuation">{</span>ReadMe<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러나 일반 마크다운과 MDX2 사이에는 작은 구문 차이가 있습니다. MDX2는 더 엄격하며 특정 콘텐츠를 JSX 표현식으로 해석합니다. 다음은 완벽히 유효한 마크다운 파일의 예시이며, 이를 MDX2가 직접 처리하면 오류가 발생할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> 일반 마크다운 파일에서는 유효하지만<span class="token punctuation">,</span> <span class="token constant">MDX2</span>는 이를 표현식으로 평가하려고 할 것입니다 <span class="token punctuation">}</span>

<span class="token operator">&lt;</span>이것 또한 유효합니다<span class="token punctuation">.</span> 그러나 <span class="token constant">MDX2</span>는 이를 <span class="token constant">JSX</span> 컴포넌트로 인식합니다 <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한, MDX2는 새 줄에 있는 모든 문자열을 p 태그나 비슷한 태그로 감싸므로, 일반 .md 파일과 .mdx 파일 사이에 콘텐츠가 다르게 렌더링됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
  일부 텍스트
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

위의 예시는 일반 마크다운에서 그대로 유지되지만<span class="token punctuation">,</span> <span class="token constant">MDX2</span>는 이를 컴파일하여 다음과 같이 만듭니다<span class="token operator">:</span>

# 제목

<span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span>일부 텍스트<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
