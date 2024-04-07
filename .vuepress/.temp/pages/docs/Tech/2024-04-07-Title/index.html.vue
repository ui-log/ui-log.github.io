<template><div><p>제목 블록은 문서 항목의 주요 제목으로 기능합니다. 일반적으로 컴포넌트 또는 페이지 이름을 제공하는 데 사용됩니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Title/img/Title_0.png" alt="Title"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Title<span class="token operator">></span>This is the title<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> Title</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Title은 다음과 같은 속성으로 구성됩니다:</p>
<h3 id="children" tabindex="-1"><a class="header-anchor" href="#children" aria-hidden="true">#</a> children</h3>
<p>유형: JSX.Element | string</p>
<p>내용을 제공합니다. 첨부된 CSF 파일의 제목 값(또는 autotitle에서 파생된 값)으로 반환됩니다. 마지막 세그먼트로 잘립니다. 예를 들어, 제목 값이 <code v-pre>path/to/components/Button</code>이면 기본 내용은 <code v-pre>Button</code>입니다.</p>
</div></template>
