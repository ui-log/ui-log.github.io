<template><div><p>Source 블록은 소스 코드 조각을 직접 렌더링하는 데 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Source <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>Source <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">.</span>Primary<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Source <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="코드" tabindex="-1"><a class="header-anchor" href="#코드" aria-hidden="true">#</a> 코드</h3>
<p>타입: 문자열</p>
<p>기본값: parameters.docs.source.code</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Source <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>Source code<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const thisIsCustomSource = true;
if (isSyntaxHighlighted) {
  console.log('syntax highlighting is working');
}</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dark" tabindex="-1"><a class="header-anchor" href="#dark" aria-hidden="true">#</a> dark</h3>
<p>Type: boolean</p>
<p>Default: parameters.docs.source.dark</p>
<p>스니펫이 다크 모드로 렌더링되는지 여부를 결정합니다.</p>
<h3 id="excludedecorators" tabindex="-1"><a class="header-anchor" href="#excludedecorators" aria-hidden="true">#</a> excludeDecorators</h3>
<p>유형: boolean</p>
<p>기본: parameters.docs.source.excludeDecorators</p>
<p>데코레이터가 소스 코드 스니펫에 렌더링되는지 여부를 결정합니다.</p>
<h3 id="형식" tabindex="-1"><a class="header-anchor" href="#형식" aria-hidden="true">#</a> 형식</h3>
<p>유형: 부울 | <code v-pre>dedent</code> | BuiltInParserName</p>
<p>기본값: parameters.docs.source.format 또는 true</p>
<p>소스 코드에 사용된 형식 지정을 지정합니다. true 및 <code v-pre>dedent</code>는 모든 여분의 들여쓰기를 제거하는 동일한 효과를 줍니다. 모든 유효한 prettier 구문 분석기 이름을 지원합니다.</p>
<h3 id="언어" tabindex="-1"><a class="header-anchor" href="#언어" aria-hidden="true">#</a> 언어</h3>
<p>유형:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'jsextra'</span> <span class="token operator">|</span> <span class="token string">'jsx'</span> <span class="token operator">|</span> <span class="token string">'json'</span> <span class="token operator">|</span> <span class="token string">'yml'</span> <span class="token operator">|</span> <span class="token string">'md'</span> <span class="token operator">|</span> <span class="token string">'bash'</span> <span class="token operator">|</span> <span class="token string">'css'</span> <span class="token operator">|</span> <span class="token string">'html'</span> <span class="token operator">|</span> <span class="token string">'tsx'</span> <span class="token operator">|</span> <span class="token string">'typescript'</span> <span class="token operator">|</span> <span class="token string">'graphql'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>기본값: parameters.docs.source.language 또는 <code v-pre>jsx</code></p>
<p>구문 강조에 사용할 언어를 지정합니다.</p>
<h3 id="of" tabindex="-1"><a class="header-anchor" href="#of" aria-hidden="true">#</a> of</h3>
<p>타입: 이야기 내보내기</p>
<p>이야기의 소스를 렌더링하는 것을 지정합니다.</p>
<h3 id="변환" tabindex="-1"><a class="header-anchor" href="#변환" aria-hidden="true">#</a> 변환</h3>
<p>타입: (코드: 문자열, 이야기컨텍스트: 이야기컨텍스트) = 문자열</p>
<p>기본값: parameters.docs.source.transform</p>
<p>렌더링되기 전에 소스를 동적으로 변환하는 함수이며, 원본 소스 및 필요한 이야기 컨텍스트를 기반으로합니다. 반환된 문자열은 그대로 표시됩니다. code 및 transform이 모두 지정된 경우 transform은 무시됩니다.</p>
<h3 id="유형" tabindex="-1"><a class="header-anchor" href="#유형" aria-hidden="true">#</a> 유형</h3>
<p>유형: <code v-pre>자동</code> | <code v-pre>코드</code> | <code v-pre>동적</code></p>
<p>기본값: parameters.docs.source.type 또는 <code v-pre>auto</code></p>
<p>소스 코드가 렌더링되는 방식을 지정합니다.</p>
<ul>
<li>auto: 이 값은 동적으로 렌더링됩니다. 이는 스토리의 렌더 함수가 args 입력을 허용하고 동적으로 업데이트 된 arg 값을 지원하는 프레임워크를 사용할 경우만 해당됩니다. 그렇지 않으면 code와 동일합니다.</li>
<li>code: code prop의 값을 렌더링하며, 그렇지 않으면 정적 스토리 소스를 렌더링합니다.</li>
<li>dynamic: 동적으로 업데이트된 arg 값으로 스토리 소스를 렌더링합니다.</li>
</ul>
</div></template>
