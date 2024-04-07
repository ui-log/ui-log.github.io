<template><div><p>스토리(컴포넌트 테스트)는 Storybook의 기본적인 구성 요소입니다.</p>
<p>Storybook Docs에서는 MDX 파일의 컨텍스트 내에서 모든 주석(매개변수, args, 로더, 데코레이터, play 함수)가 적용된 CSF 파일의 어떤 이야기든 렌더링할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Story/img/Story_0.png" alt="Story_0"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Story <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>Story <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">.</span>Primary<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="이야기" tabindex="-1"><a class="header-anchor" href="#이야기" aria-hidden="true">#</a> 이야기</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Story <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="autoplay" tabindex="-1"><a class="header-anchor" href="#autoplay" aria-hidden="true">#</a> autoplay</h3>
<p>타입: 불리언</p>
<p>기본값: parameters.docs.story.autoplay</p>
<p>이야기의 재생 함수가 실행되는지 여부를 결정합니다.</p>
<p>문서 항목에 모든 이야기가 동시에 렌더링되기 때문에, 재생 기능은 서로 상호 작용할 수 있는 임의의 작업을 수행할 수 있습니다(예: 포커스 훔치기 또는 화면 스크롤). 이러한 이유로, 기본적으로 이야기는 문서 모드에서 재생 함수를 실행하지 않습니다.</p>
<p>그러나 재생 함수가 문서에서 실행해도 &quot;안전하다&quot;고 판단된다면, 이 속성을 사용하여 자동으로 실행할 수 있습니다.</p>
<h3 id="높이" tabindex="-1"><a class="header-anchor" href="#높이" aria-hidden="true">#</a> 높이</h3>
<p>유형: 문자열</p>
<p>기본값: parameters.docs.story.height</p>
<p>iframe에서 이야기를 그릴 때 또는 인라인으로 이야기를 렌더링할 때 최소 높이를 설정합니다 (iframe의 경우 실제 높이입니다). 이는 iframe의 경우 parameters.docs.story.iframeHeight를 재정의합니다.</p>
<h3 id="인라인" tabindex="-1"><a class="header-anchor" href="#인라인" aria-hidden="true">#</a> 인라인</h3>
<p>유형: 부울</p>
<p>기본값: parameters.docs.story.inline 또는 true (지원되는 프레임워크의 경우)</p>
<p>이야기가 인라인으로 렌더링될지 (다른 문서 내용과 동일한 브라우저 프레임에) 아니면 iframe에 표시될지 결정합니다.</p>
<h3 id="메타" tabindex="-1"><a class="header-anchor" href="#메타" aria-hidden="true">#</a> 메타</h3>
<p>유형: CSF 파일 내보내기</p>
<p>이야기가 연관된 CSF 파일을 지정합니다.</p>
<p>Meta를 통해 MDX 파일에 첨부하지 않은 CSF 파일에서 이야기를 렌더링할 수 있습니다. meta 속성을 사용하여 CSF 파일에서 내보낸 전체 세트를 전달하면 됩니다 (기본 내보내기가 아닙니다!).</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Story <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> HeaderStories <span class="token keyword">from</span> <span class="token string">'./Header.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token punctuation">{</span><span class="token comment">/* 이 MDX 파일은 대부분 Button에 관련되어 있지만 Header 스토리도 렌더링할 수 있습니다 */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Story <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>HeaderStories<span class="token punctuation">.</span>LoggedIn<span class="token punctuation">}</span> meta<span class="token operator">=</span><span class="token punctuation">{</span>HeaderStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="of" tabindex="-1"><a class="header-anchor" href="#of" aria-hidden="true">#</a> of</h3>
<p>유형: 스토리 내보내기</p>
<p>Story 블록에 의해 렌더링되는 스토리를 지정합니다. of가 정의되지 않았고 MDX 파일이 첨부된 경우, 기본(첫 번째) 스토리가 렌더링됩니다.</p>
</div></template>
