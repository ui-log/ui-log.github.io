<template><div><p>Storybook이 제공하는 기본 블록이 모든 사용 사례에 적합하지 않을 수 있으므로 사용자가 직접 블록을 작성하고자 할 수 있습니다.</p>
<p>만약 사용자 고유의 문서 블록이 스토리북의 주석과 상호 작용해야 하는 경우 - 스토리, 메타 또는 컴포넌트 - useOf 훅을 사용할 수 있습니다. 스토리, 메타 또는 컴포넌트의 모듈 내보내기를 전달하고 해당 주석이 적용된 형태로 반환됩니다 (매개변수, args, 로더, 데코레이터, play 함수가 적용됨) 그러면 원하는 방식으로 사용할 수 있습니다. 사실 Description 및 Canvas와 같은 대부분의 기존 블록은 내부적으로 useOf를 사용합니다.</p>
<p>다음은 useOf 훅을 사용하여 스토리 이름을 표시하는 사용자 정의 블록을 만드는 방법의 예입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useOf <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 스토리 이름 또는 제목을 표시하는 블록
 * - 스토리 참조가 전달되면 스토리 이름을 렌더링합니다
 * - 메타 참조가 전달되면 스토리 제목을 렌더링합니다
 * - 아무것도 전달되지 않으면 기본 스토리가 기본값으로 설정됩니다
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">StoryName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token keyword">of</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> resolvedOf <span class="token operator">=</span> <span class="token function">useOf</span><span class="token punctuation">(</span><span class="token keyword">of</span> <span class="token operator">||</span> <span class="token string">'story'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'story'</span><span class="token punctuation">,</span> <span class="token string">'meta'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>resolvedOf<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">'story'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>resolvedOf<span class="token punctuation">.</span>story<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">'meta'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>resolvedOf<span class="token punctuation">.</span>preparedMeta<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StoryName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../.storybook/blocks/StoryName'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token punctuation">{</span><span class="token comment">/* "Secondary"를 렌더링함 */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>StoryName <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">.</span>Secondary<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token punctuation">{</span><span class="token comment">/* "Primary"을 렌더링함 */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>StoryName <span class="token operator">/</span><span class="token operator">></span>

<span class="token punctuation">{</span><span class="token comment">/* "Button"을 렌더링함 */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>StoryName <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="useof" tabindex="-1"><a class="header-anchor" href="#useof" aria-hidden="true">#</a> useOf</h2>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span>
  <span class="token literal-property property">moduleExportOrType</span><span class="token operator">:</span> ModuleExport <span class="token operator">|</span> <span class="token string">'story'</span> <span class="token operator">|</span> <span class="token string">'meta'</span> <span class="token operator">|</span> <span class="token string">'component'</span><span class="token punctuation">,</span>
  validTypes<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token string">'story'</span> <span class="token operator">|</span> <span class="token string">'meta'</span> <span class="token operator">|</span> <span class="token string">'component'</span><span class="token operator">></span>
<span class="token punctuation">)</span> <span class="token operator">=></span> EnhancedResolvedModuleExportType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h3>
<h4 id="moduleexportortype" tabindex="-1"><a class="header-anchor" href="#moduleexportortype" aria-hidden="true">#</a> moduleExportOrType</h4>
<p>(필수)</p>
<p>형식: ModuleExport | <code v-pre>story</code> | <code v-pre>meta</code> | <code v-pre>component</code></p>
<p>스토리 익스포트, 메타 익스포트, 컴포넌트 익스포트 또는 CSF 파일 익스포트로부터 가져온 어노테이션을 얻을 수 있습니다.</p>
<p>사용자 지정 블록이 첨부된 문서에 있는 경우에는 문자열을 전달함으로써 주(primary) 스토리, 메타 또는 컴포넌트를 얻는 것도 가능합니다. 이는 사용자 블록에서 of 속성을 생략할 수 있도록 유용합니다. 가장 일반적인 패턴은 <code v-pre>story</code> 또는 <code v-pre>meta</code>가 정의되지 않은 경우 주(primary) 스토리로 대체하는 useOf(props.of || <code v-pre>story</code>)를 사용하는 것입니다.</p>
<ul>
<li>useOf(<code v-pre>story</code>)는 첨부된 모드에서 어노테이션 주(primary) 스토리를 반환합니다; 첨부되지 않은 모드에서는 오류가 발생합니다.</li>
<li>useOf(<code v-pre>meta</code>)는 첨부된 모드에서 어노테이션된 메타를 반환합니다; 첨부되지 않은 모드에서는 오류가 발생합니다.</li>
<li>useOf(<code v-pre>component</code>)는 첨부된 모드에서 메타에서 지정된 어노테이션된 컴포넌트를 반환합니다; 첨부되지 않은 모드에서는 오류가 발생합니다.</li>
</ul>
<h4 id="유효한-타입-validtypes" tabindex="-1"><a class="header-anchor" href="#유효한-타입-validtypes" aria-hidden="true">#</a> 유효한 타입(validTypes)</h4>
<p>Markdown 포맷으로 변경해보겠습니다:</p>
<p>Type: Array</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>story | meta | component
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>옵션으로 블록이 허용하는 유효한 유형의 배열을 지정할 수 있습니다. 유효하지 않은 유형을 전달하면 오류가 발생합니다. 예를 들어, Canvas 블록은 useOf(of, [<code v-pre>story</code>])를 사용하여 스토리에 대한 참조만 허용하도록 설정합니다. 메타나 컴포넌트는 허용하지 않습니다.</p>
<h3 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h3>
<p>일치하는 유형에 따라 반환 값이 다릅니다:</p>
<h4 id="enhancedresolvedmoduleexporttype-type-story" tabindex="-1"><a class="header-anchor" href="#enhancedresolvedmoduleexporttype-type-story" aria-hidden="true">#</a> EnhancedResolvedModuleExportType[<code v-pre>type</code>] === <code v-pre>story</code></h4>
<p>유형: { type: <code v-pre>story</code>, story: PreparedStory }</p>
<p>이야기의 경우 주석이 달린 이야기는 그대로 반환됩니다. 준비된 이야기는 이미 프로젝트 및 메타 주석과 병합되어 준비된 상태입니다.</p>
<h4 id="enhancedresolvedmoduleexporttype-type-meta" tabindex="-1"><a class="header-anchor" href="#enhancedresolvedmoduleexporttype-type-meta" aria-hidden="true">#</a> EnhancedResolvedModuleExportType[<code v-pre>type</code>] === <code v-pre>meta</code></h4>
<p>유형: { type: <code v-pre>meta</code>, csfFile: CSFFile, preparedMeta: PreparedMeta }</p>
<p>메타의 경우, 구문 분석된 CSF 파일이 반환되며 준비된 주석이 담겨 있습니다. 즉, 프로젝트 주석이 메타 주석과 병합되지만 스토리 주석은 없습니다.</p>
<h4 id="enhancedresolvedmoduleexporttype-type-component" tabindex="-1"><a class="header-anchor" href="#enhancedresolvedmoduleexporttype-type-component" aria-hidden="true">#</a> EnhancedResolvedModuleExportType[<code v-pre>type</code>] === <code v-pre>component</code></h4>
<p>유형: { type: <code v-pre>component</code>, component: Component, projectAnnotations: NormalizedProjectAnnotations }</p>
<p>구성 요소의 경우 프로젝트 주석과 함께 구성 요소가 반환됩니다. 메타 또는 스토리 주석은 포함되지 않습니다.</p>
<p>훅이 구성 요소가 전달되었는지 또는 다른 객체가 전달되었는지 판별하는 것이 종종 불가능하기 때문에 알 수 없는 유형과 같이 동작합니다.</p>
</div></template>
