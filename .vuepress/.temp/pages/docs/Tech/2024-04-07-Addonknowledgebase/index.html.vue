<template><div><p>애드온 작성 기초를 이해하면 애드온을 더 좋게 만드는 다양한 공통 개선 방법이 있습니다. 이 페이지에는 애드온 생성에 대한 추가 정보가 나와 있어요. 여러분이 직접 애드온을 만들 때 빠르고 쉽게 참고하실 수 있도록 가이드로 활용해보세요.</p>
<h3 id="애드온-패널-비활성화" tabindex="-1"><a class="header-anchor" href="#애드온-패널-비활성화" aria-hidden="true">#</a> 애드온 패널 비활성화</h3>
<p>특정 이야기의 애드온 패널을 비활성화하는 것이 가능합니다.</p>
<p>그를 가능하게 하려면 패널을 등록할 때 paramKey 요소를 전달해야 합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token constant">ADDON_ID</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  addons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token constant">PANEL_ID</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">PANEL</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'내 애드온'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>애드온 탭 내용<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">,</span>
    paramKey<span class="token operator">:</span> <span class="token string">'myAddon'</span><span class="token punctuation">,</span> <span class="token comment">// 이 요소</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 스토리를 추가할 때 disabled 매개변수를 전달할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 'your-framework'를 사용 중인 프레임워크 이름으로 바꿉니다</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 👇 title 프로퍼티는 선택 사항입니다.
   * 자동 제목 생성 방법을 알아보려면 https://storybook.js.org/docs/configure/#configure-story-loading 참조
   */</span>
  title<span class="token operator">:</span> <span class="token string">'Button'</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    myAddon<span class="token operator">:</span> <span class="token punctuation">{</span> disable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 애드온을 비활성화합니다</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="애드온-스타일링하기" tabindex="-1"><a class="header-anchor" href="#애드온-스타일링하기" aria-hidden="true">#</a> 애드온 스타일링하기```</h3>
<p>Storybook은 스타일링을 위해 Emotion을 사용합니다. 그리고 사용자 정의할 수 있는 테마도 제공해요!</p>
<p>애드온의 UI 컴포넌트를 스타일링하기 위해 Emotion을 사용하는 것을 권장합니다. 이렇게 하면 활성화된 Storybook 테마를 활용하여 일관된 개발자 경험을 제공할 수 있어요. 만약 Emotion을 사용하지 않으려면 인라인 스타일이나 다른 css-in-js 라이브러리를 사용할 수도 있어요. Emotion의 withTheme HOC를 사용하여 속성으로 테마를 받아올 수 있어요. 테마에 대해 더 알아보기.</p>
<h3 id="storybook-컴포넌트" tabindex="-1"><a class="header-anchor" href="#storybook-컴포넌트" aria-hidden="true">#</a> Storybook 컴포넌트</h3>
<p>애드온 작성자들은 React 라이브러리를 사용하여 자신의 UI를 개발할 수 있어요. 하지만 Storybook의 UI 컴포넌트인 @storybook/components를 사용하여 애드온을 더 빨리 구축하는 것이 좋아요. Storybook 컴포넌트를 사용하면 다음과 같은 이점을 얻을 수 있어요:</p>
<ul>
<li>실전에서 검증된 완성품 컴포넌트</li>
<li>Storybook 기본 룩 앤 필</li>
<li>Storybook 테마 지원 기능 내장</li>
</ul>
<p>다음에 제공된 컴포넌트를 다음 애드온에서 사용하세요.</p>
<p>컴포넌트에 보완하는 것으로 UI 기본 요소 집합이 포함되어 있습니다. 애드온 스타일링을 위한 참고 자료로 아래 내용을 사용하세요.</p>
<h3 id="빌드-시스템" tabindex="-1"><a class="header-anchor" href="#빌드-시스템" aria-hidden="true">#</a> 빌드 시스템</h3>
<p>만약 애드온을 패키지로 개발 중이라면 <code v-pre>npm link</code>를 사용하여 프로젝트에 추가할 수 없습니다. 애드온을 <code v-pre>package.json</code> 파일에 로컬 종속성으로 나열해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"@storybook/addon-controls"</span><span class="token operator">:</span> <span class="token string">"file:///home/username/myrepo"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="핫-모듈-교체" tabindex="-1"><a class="header-anchor" href="#핫-모듈-교체" aria-hidden="true">#</a> 핫 모듈 교체</h3>
<p>애드온을 개발하는 동안 변경 사항을 반영하려면 HMR(핫 모듈 교체)을 구성할 수 있습니다.</p>
<h3 id="스탠드얼론-storybook-애드온" tabindex="-1"><a class="header-anchor" href="#스탠드얼론-storybook-애드온" aria-hidden="true">#</a> 스탠드얼론 Storybook 애드온</h3>
<p>스탠드얼론 애드온을 개발 중이라면, 다음과 같이 package.json에 새 스크립트를 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"npm run build -- --watch"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="로컬-storybook-애드온" tabindex="-1"><a class="header-anchor" href="#로컬-storybook-애드온" aria-hidden="true">#</a> 로컬 Storybook 애드온</h4>
<p>만약 기존 Storybook 설치 위에서 구축된 로컬 Storybook 애드온을 개발하고 있다면, HMR(핫 모듈 교체)은 기본 제공됩니다.</p>
<h3 id="프리셋-내에서-애드온-작성" tabindex="-1"><a class="header-anchor" href="#프리셋-내에서-애드온-작성" aria-hidden="true">#</a> 프리셋 내에서 애드온 작성</h3>
<p>만약 제어할 수 없는 서드파티 애드온을 로드하는 프리셋을 작업 중이고 특정 기능(예: 데코레이터)에 액세스하거나 추가 구성을 제공해야하는 경우 프리셋을 업데이트해야 합니다. 이를 위해 다른 애드온을 로드하고 구성할 수 있도록 아래와 같이 프리셋을 업데이트해야 합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">managerEntries</span><span class="token punctuation">(</span>entry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>entry<span class="token punctuation">,</span> <span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'my-other-addon/register'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">config</span> <span class="token operator">=</span> <span class="token punctuation">(</span>entry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>entry<span class="token punctuation">,</span> <span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'my-other-addon/addDecorator'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  managerEntries<span class="token punctuation">,</span>
  config<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약 당신이 커스터마이즈하고 싶은 애드온을 제어할 수 있다면, 그 경우에 당신은 프리셋을 업데이트하고 필요한 설정을 제공하며 추가 프리셋을 로드하기 위한 사용자 정의 함수를 구현할 수 있습니다. 이는 Essentials 애드온에서 구현된 방식과 유사합니다.</p>
</div></template>
