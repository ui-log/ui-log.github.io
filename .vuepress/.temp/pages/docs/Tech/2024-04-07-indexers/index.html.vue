<template><div><p>(⚠️ 실험 중)</p>
<p>부모: main.js|ts 구성</p>
<p>유형: (existingIndexers: Indexer[]) =<code v-pre>Promise</code>Indexer[]`</p>
<p>인덱서는 Storybook의 이야기 목록 - id, 제목, 태그 및 기타 메타데이터 하위 집합뿐만 아니라 모든 이야기 목록을 작성하는 데 책임이 있습니다. 인덱스는 Storybook의 /index.json 경로에서 읽을 수 있습니다.</p>
<p>인덱서 API는 Storybook이 파일을 스토리 엔트리로 색인하고 파싱하는 방식을 지시하는 인덱서를 사용자 임의로 설정할 수 있는 고급 기능입니다. 이를 통해 스토리를 작성하는 방법, 스토리가 정의된 언어, 그리고 스토리를 가져올 위치를 더 자유롭게 조정할 수 있습니다.</p>
<p>인덱서는 기존 인덱서를 포함한 전체 인덱서 목록을 반환하는 함수로 정의됩니다. 이를 통해 사용자는 목록에 자체 인덱서를 추가하거나 기존 인덱서를 바꿀 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크와 함께 'your-framework' 부분을 해당 프레임워크로 바꿔주세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span>
    <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">,</span>
    <span class="token comment">// 👇 `stories`에 색인할 파일이 포함되어 있는지 확인해주세요</span>
    <span class="token string">'../src/**/*.custom-stories.@(js|jsx|ts|tsx)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">experimental_indexers</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>existingIndexers<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> customIndexer <span class="token operator">=</span> <span class="token punctuation">{</span>
      test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.custom-stories\.[tj]sx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      createIndex<span class="token operator">:</span> <span class="token comment">// API 및 아래 예제 참조...</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>existingIndexers<span class="token punctuation">,</span> customIndexer<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>인덱서가 비교적 간단한 작업(예: 다른 네이밍 규칙으로 스토리 색인)을 하는 것이 아니라면, 파일을 색인하는 것 외에도 브라우저에서 해당 파일을 읽을 수 있도록 CSF로 변환해야 할 것입니다.</p>
<h2 id="indexer" tabindex="-1"><a class="header-anchor" href="#indexer" aria-hidden="true">#</a> Indexer</h2>
<p>타입:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> RegExp<span class="token punctuation">;</span>
  <span class="token function-variable function">createIndex</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fileName</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> IndexerOptions</span><span class="token punctuation">)</span> <span class="token operator">=></span> Promise<span class="token operator">&lt;</span>IndexInput<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>어떤 파일을 색인화하고 그것들을 스토리로 어떻게 색인화할지를 지정합니다.</p>
<h3 id="테스트" tabindex="-1"><a class="header-anchor" href="#테스트" aria-hidden="true">#</a> 테스트</h3>
<p>(필수)</p>
<p>유형: 정규 표현식</p>
<p>이 인덱서에서 처리할 파일에 대응해야 하는 스토리 구성에 포함된 파일 이름에 대해 실행되는 정규 표현식입니다.</p>
<h3 id="createindex" tabindex="-1"><a class="header-anchor" href="#createindex" aria-hidden="true">#</a> createIndex</h3>
<p>(필수)</p>
<p>타입: (fileName: string, options: IndexerOptions) =&gt; <code v-pre>Promise&lt;IndexInput[]&gt;</code></p>
<p>단일 CSF 파일을 허용하고 색인할 항목 목록을 반환하는 함수입니다.</p>
<h4 id="파일-이름" tabindex="-1"><a class="header-anchor" href="#파일-이름" aria-hidden="true">#</a> 파일 이름</h4>
<p>유형: 문자열</p>
<p>인덱스에 항목을 생성하는 데 사용된 CSF 파일의 이름입니다.</p>
<h4 id="indexeroptions" tabindex="-1"><a class="header-anchor" href="#indexeroptions" aria-hidden="true">#</a> IndexerOptions</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token function-variable function">makeTitle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">userTitle<span class="token operator">?</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>파일을 색인하는 옵션입니다.</p>
<p>타입: (userTitle?: string) = <code v-pre>string</code></p>
<p>사이드바에서 사용되는 색인 항목의 서식이 지정된 제목을 반환하는 사용자 제공 제목을 가져오는 함수입니다. 사용자 제공 제목이 없으면 파일 이름 및 경로를 기반으로 자동으로 생성됩니다.</p>
<p>IndexInput.title 사용 예시를 확인하세요.</p>
<h4 id="indexinput" tabindex="-1"><a class="header-anchor" href="#indexinput" aria-hidden="true">#</a> IndexInput</h4>
<p>타입:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">exportName</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">importPath</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'story'</span><span class="token punctuation">;</span>
  metaId<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  name<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  tags<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  title<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  __id<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>스토리 인덱스에 추가할 스토리를 나타내는 객체입니다.</p>
<p>(필수)</p>
<p>유형: 문자열</p>
<p>각 IndexInput에 대해 색인기는 이 내보내기(임포트 경로에서 찾은 파일)를 색인에 항목으로 추가합니다.</p>
<p>(필수)</p>
<p>유형: 문자열</p>
<p>임포트할 파일, 예를 들어 CSF 파일.</p>
<p>우선적으로 색인된 파일 이름이 CSF가 아닐 가능성이 있습니다. 이 경우 브라우저에서 Storybook이 해당 파일을 읽을 수 있도록 CSF로 변환해야 합니다.</p>
<p>(필수)</p>
<p>타입: <code v-pre>story</code></p>
<p>항목의 유형.</p>
<p>유형: 문자열</p>
<p>기본값: 제목에서 자동 생성</p>
<p>엔트리의 메타에 대한 사용자 정의 ID를 정의합니다.</p>
<p>지정된 경우 CSF 파일의 내보내기 기본값 (메타)은 해당 ID 속성을 가지고 있어야 하며, 올바르게 일치해야 합니다.</p>
<p>종류: 문자열</p>
<p>기본값: exportName에서 자동 생성</p>
<p>엔트리의 이름입니다.</p>
<p>종류: 문자열[]</p>
<p>Storybook 및 해당 도구에서 항목을 필터링하는 태그입니다.</p>
<p>유형: 문자열</p>
<p>기본값: importPath의 기본 내보내기에서 자동 생성됨</p>
<p>사이드바에서 항목의 위치를 결정합니다.</p>
<p>대부분의 경우에는 제목을 지정하지 않는 것이 좋습니다. 그러면 인덱서가 기본 명명 동작을 사용할 것입니다. 제목을 지정하는 경우에는 IndexerOptions에서 제공하는 makeTitle 함수를 사용해야 합니다. 예를 들어, 파일 이름에서 파생된 제목에 &quot;Custom&quot; 접두사를 단순히 추가하는 인덱서를 보여드리겠습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 맞게 your-framework을(를) 교체하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Indexer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/types'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> combosIndexer<span class="token operator">:</span> Indexer <span class="token operator">=</span> <span class="token punctuation">{</span>
  test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.stories\.[tj]sx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token function-variable function">createIndex</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> <span class="token punctuation">{</span> makeTitle <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 👇 파일 이름에서 제목 가져오기</span>
    <span class="token keyword">const</span> title <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\/(.*)\.stories</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 파일 읽고 엔트리 생성 ...</span>

    <span class="token keyword">return</span> entries<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">'story'</span><span class="token punctuation">,</span>
      <span class="token comment">// 👇 제목 서식 지정을 위해 makeTitle 사용</span>
      title<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">makeTitle</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> Custom</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      importPath<span class="token operator">:</span> fileName<span class="token punctuation">,</span>
      exportName<span class="token operator">:</span> entry<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">experimental_indexers</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>existingIndexers<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>existingIndexers<span class="token punctuation">,</span> combosIndexer<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>유형: 문자열</p>
<p>기본값: 제목/메타ID 및 exportName에서 자동 생성</p>
<p>현재 엔트리의 이야기에 대한 사용자 정의 ID를 정의합니다.</p>
<p>지정된 경우, CSF 파일의 이야기에는 올바르게 일치되도록 해당 __id 속성이 있어야 합니다.</p>
<p>자동으로 생성된 ID를 재정의해야 하는 경우에만 사용하십시오.</p>
<h2 id="csf로-변환" tabindex="-1"><a class="header-anchor" href="#csf로-변환" aria-hidden="true">#</a> CSF로 변환</h2>
<p>IndexInput의 importPath 값은 CSF 파일로 해석되어야 합니다. 그러나 대부분의 사용자 지정 인덱서는 입력이 CSF가 아닌 경우에만 필요합니다. 따라서 입력을 CSF로 변환해야 할 것이며, 이를 통해 Storybook이 브라우저에서 읽고 이야기를 렌더링할 수 있습니다.</p>
<p>사용자 지정 소스 형식을 CSF로 변환하는 것은 이 문서의 범위를 벗어납니다. 이 변환 작업은 대부분 빌더 수준(Vite 및/또는 Webpack)에서 수행되며, 여러 빌더용 플러그인을 만들기 위해 unplugin을 사용하는 것을 권장합니다.</p>
<p>일반적인 아키텍처 구조는 다음과 같습니다:</p>
<p><img src="@source/docs/Tech/2024-04-07-indexers/img/indexers_0.png" alt="인덱서 이미지"></p>
<ul>
<li>스토리 설정을 사용하면 Storybook은 인덱서의 테스트 속성과 일치하는 모든 파일을 찾습니다.</li>
<li>Storybook은 각 일치하는 파일을 인덱서의 createIndex 함수로 전달하며, 파일 내용을 사용하여 인덱스에 추가할 색인 항목(스토리) 목록을 생성하고 반환합니다.</li>
<li>인덱스는 Storybook UI의 사이드바를 채웁니다</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-07-indexers/img/indexers_1.png" alt="인덱서"></p>
<ul>
<li>Storybook UI에서 사용자는 이야기 ID와 일치하는 URL로 이동하고, 브라우저는 인덱스 항목의 importPath 속성에 지정된 CSF 파일을 요청합니다.</li>
<li>서버로 돌아와서 빌더 플러그인은 소스 파일을 CSF로 변환하고 클라이언트에 제공합니다.</li>
<li>Storybook UI는 CSF 파일을 읽어 exportName으로 지정된 스토리를 가져와 렌더링합니다.</li>
</ul>
<p>이런 방식으로 동작할 수 있는 예시를 살펴봅시다.</p>
<p>먼저, CSF 소스 파일의 예시를 보여드릴게요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> variantsFromComponent<span class="token punctuation">,</span> createStoryFromVariant <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../utils'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 컴포넌트 프롭을 통해 스토리를 나타내는 원시 문자열을 반환합니다. 예시:
 * 'export const PrimaryVariant = <span class="token punctuation">{</span>
 *    args: <span class="token punctuation">{</span>
 *      primary: true
 *    <span class="token punctuation">}</span>,
 *  <span class="token punctuation">}</span>;'
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">generateStories</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> variants <span class="token operator">=</span> <span class="token function">variantsFromComponent</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> variants<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">variant</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">createStoryFromVariant</span><span class="token punctuation">(</span>variant<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 빌더 플러그인은 이렇게 할 거에요:</p>
<ul>
<li>소스 파일을 받아 읽습니다.</li>
<li>내보낸 generateStories 함수를 가져옵니다.</li>
<li>함수를 실행하여 스토리를 생성합니다.</li>
<li>스토리를 CSF 파일에 작성합니다.</li>
</ul>
<p>위에 언급된 CSF 파일은 Storybook에서 색인화됩니다. 결과물은 아래와 유사할 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Primary <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h3>
<p>사용자 정의 인덱서의 예시 사용법은 다음과 같습니다:</p>
</div></template>
