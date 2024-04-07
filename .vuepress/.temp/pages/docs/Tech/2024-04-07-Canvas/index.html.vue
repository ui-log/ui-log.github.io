<template><div><p>캔버스 블록은 이야기를 래핑하는 역할을 하며, 해당 콘텐츠와 상호작용할 수 있는 툴바를 제공하면서 필요한 소스 스니펫을 자동으로 제공합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Canvas/img/Canvas_0.png" alt="Canvas"></p>
<p>MDX에서 Canvas 블록을 사용할 때에는 prop을 사용하여 이야기를 참조합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Canvas <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>Canvas <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">.</span>Primary<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="캔버스" tabindex="-1"><a class="header-anchor" href="#캔버스" aria-hidden="true">#</a> 캔버스</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Canvas <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="additionalactions" tabindex="-1"><a class="header-anchor" href="#additionalactions" aria-hidden="true">#</a> additionalActions</h3>
<p>타입:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>배열<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element<span class="token punctuation">;</span>
  className<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본값: parameters.docs.canvas.additionalActions</p>
<p>오른쪽 하단에 표시할 추가 사용자 정의 작업을 제공합니다. 이들은 onClick 함수에서 지정한 작업을 수행하는 단순한 버튼입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Story<span class="token punctuation">,</span> Canvas<span class="token punctuation">,</span> SourceState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token punctuation">{</span><span class="token comment">/* 추가 작업이 있는 경우 */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Canvas
  additionalActions<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'GitHub에서 열기'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>
          <span class="token string">'https://github.com/storybookjs/storybook/blob/next/code/ui/blocks/src/examples/Button.stories.tsx'</span><span class="token punctuation">,</span>
          <span class="token string">'_blank'</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">}</span>
  <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">.</span>Primary<span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="클래스-이름" tabindex="-1"><a class="header-anchor" href="#클래스-이름" aria-hidden="true">#</a> 클래스 이름</h3>
<p>유형: 문자열</p>
<p>기본값: parameters.docs.canvas.className</p>
<p>사용자 지정 스타일링을 위해 미리보기 요소에 제공하는 HTML 클래스(들)입니다.</p>
<h3 id="레이아웃" tabindex="-1"><a class="header-anchor" href="#레이아웃" aria-hidden="true">#</a> 레이아웃</h3>
<p>유형: <code v-pre>centered</code> | <code v-pre>fullscreen</code> | <code v-pre>padded</code></p>
<p>기본값: parameters.layout 또는 parameters.docs.canvas.layout 또는 <code v-pre>padded</code></p>
<p>캔버스가 이야기를 배치하는 방식을 지정합니다.</p>
<ul>
<li>중앙정렬: 캔버스 내에서 이야기를 가운데 정렬합니다</li>
<li>패딩 추가: (기본값) 이야기에 패딩을 추가합니다</li>
<li>전체화면: 패딩 없이 이야기를 표시합니다</li>
</ul>
<p>Canvas 블록은 parameters.docs.canvas.layout 속성이나 layout 속성 외에도, 이야기가 일반 이야기보기에서 어떻게 레이아웃되는지 정의하는 parameters.layout 값을 존중합니다.</p>
<h3 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h3>
<p>유형: CSF 파일 내보내기</p>
<p>이야기가 연관된 CSF 파일을 지정합니다.</p>
<p>MDX 파일에 (메타를 통해) 첨부하지 않은 CSF 파일에서 이야기를 렌더링할 수 있습니다. meta 속성을 사용하여 CSF 파일에서 모든 내보내기를 전달하십시오 (기본 내보내기가 아닌!).</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Canvas <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> HeaderStories <span class="token keyword">from</span> <span class="token string">'./Header.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token punctuation">{</span><span class="token comment">/* 이 MDX 파일은 대부분 Button에 관한 것이지만, Header 이야기도 렌더링할 수 있습니다 */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Canvas <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>HeaderStories<span class="token punctuation">.</span>LoggedIn<span class="token punctuation">}</span> meta<span class="token operator">=</span><span class="token punctuation">{</span>HeaderStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="of" tabindex="-1"><a class="header-anchor" href="#of" aria-hidden="true">#</a> of</h3>
<p>타입: 이야기 내보내기</p>
<p>어떤 이야기 소스가 표시되는지 지정합니다.</p>
<h3 id="소스" tabindex="-1"><a class="header-anchor" href="#소스" aria-hidden="true">#</a> 소스</h3>
<p>타입: SourceProps['code'] | SourceProps['format'] | SourceProps['language'] | SourceProps['type']</p>
<p>내부 Source 블록에 전달된 props을 지정합니다. 더 많은 정보는 Source Doc Block 문서를 참조하세요.</p>
<h3 id="sourcestate" tabindex="-1"><a class="header-anchor" href="#sourcestate" aria-hidden="true">#</a> sourceState</h3>
<p>유형: <code v-pre>hidden</code> | <code v-pre>shown</code> | <code v-pre>none</code></p>
<p>기본값: parameters.docs.canvas.sourceState 또는 <code v-pre>hidden</code></p>
<p>원본 패널의 초기 상태를 지정합니다.</p>
<ul>
<li>hidden: 원본 패널이 기본적으로 숨겨집니다.</li>
<li>shown: 원본 패널이 기본적으로 표시됩니다.</li>
<li>none: 원본 패널을 사용할 수 없으며, 표시하는 버튼이 렌더링되지 않습니다.</li>
</ul>
<h3 id="이야기" tabindex="-1"><a class="header-anchor" href="#이야기" aria-hidden="true">#</a> 이야기</h3>
<p>유형: StoryProps[<code v-pre>inline</code>] | StoryProps[<code v-pre>height</code>] | StoryProps[<code v-pre>autoplay</code>]</p>
<p>내부 스토리 블록에 전달된 속성을 지정합니다. 자세한 내용은 Story Doc Block 문서를 참조하세요.</p>
<h3 id="withtoolbar" tabindex="-1"><a class="header-anchor" href="#withtoolbar" aria-hidden="true">#</a> withToolbar</h3>
<p>타입: 부울</p>
<p>기본값: parameters.docs.canvas.withToolbar</p>
<p>이 스토리와 상호 작용하는 도구가 포함된 툴바를 렌더링할지 여부를 결정합니다.</p>
</div></template>
