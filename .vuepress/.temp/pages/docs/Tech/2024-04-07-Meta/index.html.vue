<template><div><p>메타 블록은 컴포넌트의 스토리 목록 옆에 사용자 정의 MDX 문서 페이지를 첨부하는 데 사용됩니다. 내용을 렌더링하지는 않지만 MDX 파일에서 두 가지 목적을 제공합니다:</p>
<ul>
<li>MDX 파일을 컴포넌트와 해당 스토리에 첨부한다.</li>
<li>사이드바에 연결되지 않은 문서 항목의 위치를 제어한다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> Meta</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Meta는 다음과 같은 속성으로 구성됩니다:</p>
<h3 id="istemplate" tabindex="-1"><a class="header-anchor" href="#istemplate" aria-hidden="true">#</a> isTemplate</h3>
<p>타입: 불린(boolean)</p>
<p>MDX 파일이 자동 문서 템플릿으로 작동하는지 여부를 결정합니다. true로 설정하면 MDX 파일이 일반적으로 색인화되는 대로 색인화되지 않습니다.</p>
<h3 id="이름" tabindex="-1"><a class="header-anchor" href="#이름" aria-hidden="true">#</a> 이름</h3>
<p>유형: 문자열</p>
<p>첨부 문서 항목의 이름을 설정합니다. 각 파일의 Meta에 서로 다른 이름을 설정하여 사이드바에서 동일한 구성요소에 여러 MDX 파일을 첨부할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ComponentStories <span class="token keyword">from</span> <span class="token string">'./component.stories'</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span><span class="token comment">/* 이 MDX 파일은 이제 "특별 문서"라고 불립니다 */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ComponentStories<span class="token punctuation">}</span> name<span class="token operator">=</span><span class="token string">"특별 문서"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="of" tabindex="-1"><a class="header-anchor" href="#of" aria-hidden="true">#</a> of</h3>
<p>유형: CSF 파일 내보내기</p>
<p>이 MDX 파일에 첨부된 CSF 파일을 지정합니다. CSF 파일에서 전체 내보내기 집합을 전달하십시오 (기본 내보내기가 아닙니다!).</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Story <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>컴포넌트 스토리에 MDX 파일을 추가할 때 <code v-pre>of</code> 속성을 사용하는 것은 두 가지 목적을 달성합니다:</p>
<ul>
<li>MDX 콘텐츠가 컴포넌트의 스토리 목록 안에 사이드바에 나타납니다. 기본적으로 이는 <code v-pre>main.js</code>에 설정된 <code v-pre>docs.defaultName</code> 옵션(기본값은 &quot;Docs&quot;)으로 명명됩니다. 하지만 <code v-pre>name</code> 속성을 사용하여 재정의할 수도 있습니다.</li>
<li>해당 컴포넌트와 해당 스토리를 MDX 파일에 연결하여 &quot;attached&quot; 모드에서 다른 문서 블록을 사용할 수 있게 합니다(예를 들어 Stories 블록을 사용하는 것과 같이).</li>
</ul>
<h3 id="제목" tabindex="-1"><a class="header-anchor" href="#제목" aria-hidden="true">#</a> 제목</h3>
<p>유형: 문자열</p>
<p>미첨부 MDX 파일의 제목을 설정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span><span class="token comment">/* 사이드바에서 문서 항목의 위치를 제목으로 덮어쓰기 */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Meta title<span class="token operator">=</span><span class="token string">"path/to/Introduction"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="첨부된-vs-미첨부된" tabindex="-1"><a class="header-anchor" href="#첨부된-vs-미첨부된" aria-hidden="true">#</a> 첨부된 vs. 미첨부된</h2>
<p>Storybook에서, 문서 항목(MDX 파일)은 스토리 파일과 연결될 때 Meta의 of 속성을 통해 &quot;첨부&quot;됩니다. 첨부된 문서 항목은 사이드바에서 컴포넌트 아래의 스토리 목록 옆에 표시됩니다.</p>
<p>&quot;첨부되지 않은&quot; 문서 항목은 스토리 파일과 연결되지 않으며, Meta의 title 속성을 통해 사이드바의 어디에서든 표시될 수 있습니다.</p>
</div></template>
