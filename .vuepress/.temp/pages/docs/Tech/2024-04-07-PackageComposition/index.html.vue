<template><div><p>스토리북은 컴포넌트 라이브러리와 디자인 시스템에서 널리 사용됩니다. 디자인 시스템 작성자들은 소비자의 스토리북 내에서 자동으로 자신들의 디자인 시스템을 구성할 수 있습니다.</p>
<p>예를 들어, 디자인 시스템 패키지를 사용하면 해당 스토리들이 사용자의 스토리와 함께 나타날 수 있습니다. 이렇게 하면 스토리북을 떠나지 않고도 사용 문서를 교참하면서 편리하게 활용할 수 있습니다.</p>
<h2 id="사용자들을-위해" tabindex="-1"><a class="header-anchor" href="#사용자들을-위해" aria-hidden="true">#</a> 사용자들을 위해</h2>
<p>패키지가 이를 지원하는 경우 자동으로 구성이 이루어집니다. 패키지를 설치하면 스토리북이 스토리북 내에 사용자의 스토리와 함께 해당 스토리를 로드합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-PackageComposition/img/PackageComposition_0.png" alt="PackageComposition_0"></p>
<h3 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h3>
<p>만들어진 Storybook의 작동 방식을 구성하려면 .storybook/main.js에서 ref 요소를 비활성화할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크와 함께 프레임워크를 바꿉니다 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  refs<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'package-name'</span><span class="token operator">:</span> <span class="token punctuation">{</span> disable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="버전-변경" tabindex="-1"><a class="header-anchor" href="#버전-변경" aria-hidden="true">#</a> 버전 변경</h3>
<p>만들어진 스토리북의 버전을 변경하여 라이브러리가 어떻게 변하는지 확인해보세요. 이를 위해서는 패키지 작성자가 구성을 설정해야 합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-PackageComposition/img/PackageComposition_1.png" alt="PackageComposition_1"></p>
<h2 id="패키지-작성자를-위해" tabindex="-1"><a class="header-anchor" href="#패키지-작성자를-위해" aria-hidden="true">#</a> 패키지 작성자를 위해</h2>
<p>컴포넌트 라이브러리 제작자는 자신의 소비자 Storybooks에서 구성 요소를 작성함으로써 채택을 확대할 수 있습니다.</p>
<p>푸블리시된 package.json에 storybook 속성을 추가하고 url 필드를 포함하는 객체를 넣어주세요. URL 필드를 원하는 버전의 게시된 Storybook으로 지정해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"storybook"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"url"</span><span class="token operator">:</span> <span class="token string">"https://host.com/your-storybook-for-this-version"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="자동-버전-선택" tabindex="-1"><a class="header-anchor" href="#자동-버전-선택" aria-hidden="true">#</a> 자동 버전 선택</h3>
<p>만약 Chromatic을 사용 중이라면, storybook.url 필드에 Storybook을 위한 단일 URL을 제공할 수 있습니다. 새 버전을 게시할 때마다 URL을 변경할 필요가 없습니다. Storybook은 자동으로 패키지에 대한 올바른 URL을 찾아줍니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"storybook"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"url"</span><span class="token operator">:</span> <span class="token string">"https://master--xyz123.chromatic.com"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 xyz123은 여러분의 Chromatic 프로젝트 ID입니다. Storybook은 사용자가 설치한 버전과 해당 프로젝트에 게시된 Storybook을 자동으로 매칭시킵니다.</p>
<h3 id="버전-선택기-표시하기" tabindex="-1"><a class="header-anchor" href="#버전-선택기-표시하기" aria-hidden="true">#</a> 버전 선택기 표시하기</h3>
<p>만약 크로매틱을 사용중이라면, 사용자가 다른 버전을 시도해볼 수 있도록 버전 목록을 제공할 수 있어요.</p>
</div></template>
