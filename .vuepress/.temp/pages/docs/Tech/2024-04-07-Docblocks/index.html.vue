<template><div><p>스토리북은 여러분의 컴포넌트 및 프로젝트의 다른 측면을 문서화하는 데 도움이 되는 여러 가지 문서 블록을 제공합니다.</p>
<p>스토리북에서 문서 블록을 사용하는 두 가지 일반적인 방법이 있습니다. MDX 내부와 문서 페이지 템플릿의 일부로 사용하는 방법입니다.</p>
<h2 id="mdx-내부에서" tabindex="-1"><a class="header-anchor" href="#mdx-내부에서" aria-hidden="true">#</a> MDX 내부에서</h2>
<p>이 블록들은 주로 스토리북의 MDX 문서에서 사용됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Primary<span class="token punctuation">,</span> Controls<span class="token punctuation">,</span> Story <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

# 버튼

버튼은<span class="token operator">...</span>

<span class="token operator">&lt;</span>Primary <span class="token operator">/</span><span class="token operator">></span>

## 속성

<span class="token operator">&lt;</span>Controls <span class="token operator">/</span><span class="token operator">></span>

## 이야기

### Primary

버튼은 주요할 수 있습니다<span class="token punctuation">.</span>

<span class="token operator">&lt;</span>Story <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">.</span>Primary<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

버튼은 중요할 수 있습니다<span class="token punctuation">.</span>

<span class="token operator">&lt;</span>Story <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">.</span>Secondary<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="자동-문서-페이지-사용자-정의하기" tabindex="-1"><a class="header-anchor" href="#자동-문서-페이지-사용자-정의하기" aria-hidden="true">#</a> 자동 문서 페이지 사용자 정의하기</h2>
<p>블록은 자동 문서 페이지의 템플릿을 정의하는 데도 사용됩니다. 예를 들어, 여기에 기본 템플릿이 있습니다:</p>
<img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_1.png" />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Title<span class="token punctuation">,</span> Subtitle<span class="token punctuation">,</span> Description<span class="token punctuation">,</span> Primary<span class="token punctuation">,</span> Controls<span class="token punctuation">,</span> Stories <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">autoDocsTemplate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Title <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Subtitle <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Description <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Primary <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Controls <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Stories <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본 페이지 템플릿을 재정의하면 프로젝트에 완벽한 문서 페이지를 구축하는 데 Doc Blocks를 유사하게 사용할 수 있습니다.</p>
<p>일부 문서 블록은 다른 블록을 렌더링합니다. 예를 들어 <code v-pre>Stories /</code> 블록은 다음과 같이 확장됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Canvas<span class="token operator">></span>
  ### 스토리 이름
  <span class="token operator">&lt;</span>Description <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Story <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Source <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Canvas<span class="token operator">></span>

<span class="token punctuation">{</span><span class="token comment">/* ... 각 스토리에 대해 &lt;Canvas>를 반복 */</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결과적으로 예를 들어 Source 블록을 매개변수를 통해 사용자 정의하는 경우 (다음 섹션 참조) Canvas 블록의 일부로 렌더링되는 Source 블록도 영향을 받습니다.</p>
<h2 id="문서-블록-사용자-정의" tabindex="-1"><a class="header-anchor" href="#문서-블록-사용자-정의" aria-hidden="true">#</a> 문서 블록 사용자 정의</h2>
<p>MDX 및 자동 문서의 두 사용 사례 모두에서 많은 문서 블록을 매개변수를 통해 사용자 정의할 수 있습니다.</p>
<p>예를 들어, Storybook을 통해 모든 Controls 테이블에서 style 속성을 필터링할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react, vue3)로 your-framework을 대체하세요.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      controls<span class="token operator">:</span> <span class="token punctuation">{</span> exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>매개변수를 통해 사용자 정의가 가능한 블록은 아래 사용 가능한 블록 목록에서 표시되어 있습니다.</p>
<p>MDX에서 doc 블록을 사용할 때 props로도 사용자 정의할 수 있습니다.</p>
<p>| Controls exclude={['style']} |</p>
<h2 id="사용-가능한-블록" tabindex="-1"><a class="header-anchor" href="#사용-가능한-블록" aria-hidden="true">#</a> 사용 가능한 블록</h2>
<p>각 블록마다 사용 방법, 사용 가능한 옵션 및 기술적 세부 사항을 설명한 전용 API 참조 페이지가 있습니다.</p>
<h3 id="argtypes" tabindex="-1"><a class="header-anchor" href="#argtypes" aria-hidden="true">#</a> ArgTypes</h3>
<p>아래는 ComponentOrg의 arg types에 대한 정적 테이블을 보여주는 ArgTypes 블록을 사용할 수 있습니다. 이는 해당 컴포넌트의 인터페이스를 문서화하는 방법입니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_2.png" alt="이미지"></p>
<h3 id="캔버스" tabindex="-1"><a class="header-anchor" href="#캔버스" aria-hidden="true">#</a> 캔버스</h3>
<p>캔버스 블록은 Story 주변을 감싸주며, 콘텐츠와 상호작용할 수 있는 툴바를 제공하면서 필요한 소스 스니펫을 자동으로 제공합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_3.png" alt="Docblocks_3 Image"></p>
<h2 id="colorpalette" tabindex="-1"><a class="header-anchor" href="#colorpalette" aria-hidden="true">#</a> ColorPalette</h2>
<p>ColorPalette 블록은 프로젝트 전체에서 사용되는 모든 색상 관련 항목(예: 색 샘플)을 문서화할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_4.png" alt="Docblocks_4 Image"></p>
<h3 id="컨트롤" tabindex="-1"><a class="header-anchor" href="#컨트롤" aria-hidden="true">#</a> 컨트롤</h3>
<p>컨트롤 블록은 주어진 스토리의 동적 테이블을 보여주는 데 사용할 수 있습니다. 이는 해당 스토리의 인터페이스를 문서화하는 방법이며 (별도로) 렌더링된 스토리(Story 또는 Canvas 블록을 통해)의 args를 변경할 수 있도록 허용합니다.</p>
<img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_5.png" />
<h3 id="설명" tabindex="-1"><a class="header-anchor" href="#설명" aria-hidden="true">#</a> 설명</h3>
<p>Description 블록은 해당 JSDoc 코멘트에서 얻은 컴포넌트, 스토리 또는 메타의 설명을 표시합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_6.png" alt="이미지"></p>
<h3 id="icongallery" tabindex="-1"><a class="header-anchor" href="#icongallery" aria-hidden="true">#</a> IconGallery</h3>
<p>IconGallery 블록은 프로젝트와 관련된 모든 아이콘을 깔끔한 그리드로 표시하여 빠르게 문서화할 수 있습니다.</p>
<img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_7.png" />
<h3 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h3>
<p>Markdown 블록을 사용하면 MDX 파일에 일반적인 마크다운을 가져와 포함할 수 있습니다.</p>
<img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_8.png" />
```
<h3 id="메타" tabindex="-1"><a class="header-anchor" href="#메타" aria-hidden="true">#</a> 메타</h3>
<p>메타 블록은 컴포넌트 목록 옆에 사용자 지정 MDX 문서 페이지를 첨부하는 데 사용됩니다. 내용을 렌더링하지는 않지만 MDX 파일에서 두 가지 목적을 제공합니다:</p>
<ul>
<li>MDX 파일을 컴포넌트와 해당 스토리에 첨부하거나</li>
<li>사이드바에 첨부하지 않은 문서 항목의 위치를 제어합니다.</li>
</ul>
<h3 id="프라이머리" tabindex="-1"><a class="header-anchor" href="#프라이머리" aria-hidden="true">#</a> 프라이머리</h3>
<p>주요 블록은 스토리 파일에서 정의된 첫 번째 스토리를 스토리 블록에서 표시합니다. 일반적으로 문서 항목 제목 아래 즉시 렌더링됩니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_9.png" alt="이미지"></p>
<h3 id="소스" tabindex="-1"><a class="header-anchor" href="#소스" aria-hidden="true">#</a> 소스</h3>
<p>소스 블록은 소스 코드 스니펫을 직접 렌더링하는 데 사용됩니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_10.png" alt="Docblocks_10"></p>
<h3 id="stories" tabindex="-1"><a class="header-anchor" href="#stories" aria-hidden="true">#</a> Stories</h3>
<p>The Stories block renders the full collection of stories in a stories file.</p>
<p><img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_11.png" alt="Docblocks_11"></p>
<h3 id="이야기" tabindex="-1"><a class="header-anchor" href="#이야기" aria-hidden="true">#</a> 이야기</h3>
<p>이야기들(컴포넌트 테스트)은 Storybook의 기본적인 구성 요소입니다.</p>
<p>Storybook Docs에서는 MDX 파일의 컨텍스트에서 CSF 파일 내의 이야기들 중 어떤 것이든, 모든 주석(파라미터, args, 로더, 데코레이터, play 함수)가 Story 블록을 사용하여 적용된 상태로 렌더링할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_12.png" alt="이미지"></p>
<h3 id="부제" tabindex="-1"><a class="header-anchor" href="#부제" aria-hidden="true">#</a> 부제</h3>
<p>부제 블록은 문서 항목의 보조 제목으로 사용할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_13.png" alt="이미지"></p>
<h3 id="제목" tabindex="-1"><a class="header-anchor" href="#제목" aria-hidden="true">#</a> 제목</h3>
<p>Title 블록은 문서 항목의 주요 제목 역할을 합니다. 일반적으로 구성 요소나 페이지 이름을 제공하는 데 사용됩니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_14.png" alt="image"></p>
<h3 id="typeset" tabindex="-1"><a class="header-anchor" href="#typeset" aria-hidden="true">#</a> Typeset</h3>
<p>Typeset 블록은 프로젝트 전체에서 사용된 글꼴을 문서화하는 데 도움이 됩니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_15.png" alt="이미지"></p>
<h3 id="스타일-없음" tabindex="-1"><a class="header-anchor" href="#스타일-없음" aria-hidden="true">#</a> 스타일 없음</h3>
<p>스타일 없음 블록은 Storybook의 기본 스타일을 제거하는 특별한 블록입니다. 이 블록을 추가하면 MDX 문서에서 Storybook의 기본 스타일을 비활성화할 수 있습니다.</p>
<p>기본적으로 대부분의 요소(예: h1, p 등)는 문서가 잘 보이도록 몇 가지 기본 스타일이 적용됩니다. 그러나 때로는 이러한 스타일을 적용하고 싶지 않은 내용이 있을 수 있습니다. 그럴 경우 내용을 스타일 없음 블록으로 감싸면 기본 스타일이 제거됩니다.</p>
<img src="@source/docs/Tech/2024-04-07-Docblocks/img/Docblocks_16.png" />
<h2 id="나만의-doc-blocks-만들기" tabindex="-1"><a class="header-anchor" href="#나만의-doc-blocks-만들기" aria-hidden="true">#</a> 나만의 Doc Blocks 만들기</h2>
<p>Storybook은 빌트인 블록과 같은 기능을 하는 자신만의 블록을 쉽게 만들 수 있도록 useOf 훅을 제공합니다.</p>
<h2 id="문제-해결" tabindex="-1"><a class="header-anchor" href="#문제-해결" aria-hidden="true">#</a> 문제 해결</h2>
<h3 id="왜-스토리-내에서-doc-블록을-사용할-수-없을까요" tabindex="-1"><a class="header-anchor" href="#왜-스토리-내에서-doc-블록을-사용할-수-없을까요" aria-hidden="true">#</a> 왜 스토리 내에서 Doc 블록을 사용할 수 없을까요?</h3>
<p>Storybook의 Doc 블록은 매우 사용자 지정 가능하고 사용자 정의 문서를 작성하는 데 도움이 되는 구성 요소입니다. 대부분의 경우 파라미터를 통해 사용자 정의하거나 전역적으로 커스텀 문서 템플릿을 생성할 수 있는 기능을 제공하지만, 이러한 블록들은 주로 MDX 파일을 위해 설계되었습니다. 예를 들어, 다음과 같이 ColorPalette 블록을 스토리에 추가하려고 하면 스토리가 Storybook에서 로드될 때 오류 메시지가 표시됩니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 'your-framework'을 사용하시는 프레임워크의 이름으로 대체해주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorItem<span class="token punctuation">,</span> ColorPalette <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token punctuation">{</span>
  colors<span class="token operator">:</span> <span class="token punctuation">{</span>
    primaryDark<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">'#1C1C1C'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    primaryRegular<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">'#363636'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    primaryLight1<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">'#4D4D4D'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    primaryLight2<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">'#878787'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    primaryLight3<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">'#D1D1D1'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    primaryLight4<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token string">'#EDEDED'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ❌ 스토리 내에서 Doc 블록을 사용하지 마세요. 암호화된 오류가 발생하여 Storybook이 정상 작동하지 않습니다.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Colors<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ColorPalette<span class="token operator">></span>
      <span class="token punctuation">{</span>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>theme<span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>ColorItem
          colors<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
          key<span class="token operator">=</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span>
          subtitle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">theme.colors.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
          title<span class="token operator">=</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ColorPalette<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook 문서에 대해 더 알아보세요.</p>
<ul>
<li>스토리 문서화를 위한 Autodocs</li>
<li>문서를 사용자 정의하는 MDX</li>
<li>문서 작성을 위한 Doc Blocks</li>
<li>문서 공개를 자동화하여 문서 게시 프로세스를 자동화</li>
</ul>
</div></template>
