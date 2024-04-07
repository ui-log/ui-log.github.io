<template><div><p>부모: main.js|ts 구성</p>
<p>유형:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  builder<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> options<span class="token operator">?</span><span class="token operator">:</span> BuilderOptions <span class="token punctuation">}</span><span class="token punctuation">;</span>
  channelOptions<span class="token operator">?</span><span class="token operator">:</span> ChannelOptions<span class="token punctuation">;</span>
  crossOriginIsolated<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableProjectJson<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableTelemetry<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableWebpackDefaults<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disableWhatsNewNotifications<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  enableCrashReports<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  renderer<span class="token operator">?</span><span class="token operator">:</span> RendererName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook의 내부 기능을 구성합니다.</p>
<h2 id="빌더" tabindex="-1"><a class="header-anchor" href="#빌더" aria-hidden="true">#</a> 빌더</h2>
<p>유형:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span> <span class="token string">'@storybook/builder-vite'</span> <span class="token operator">|</span> <span class="token string">'@storybook/builder-webpack5'</span>
<span class="token operator">|</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'@storybook/builder-vite'</span> <span class="token operator">|</span> <span class="token string">'@storybook/builder-webpack5'</span><span class="token punctuation">;</span>
    options<span class="token operator">?</span><span class="token operator">:</span> BuilderOptions<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook의 빌더를 구성합니다. Vite 또는 Webpack을 사용할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용중인 프레임워크로 변경(예: react-webpack5, vue3-vite)으로 대체</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    builder<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'@storybook/builder-vite'</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        viteConfigPath<span class="token operator">:</span> <span class="token string">'../../../vite.config.js'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channeloptions" tabindex="-1"><a class="header-anchor" href="#channeloptions" aria-hidden="true">#</a> channelOptions</h2>
<p>Type: ChannelOptions</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">allowClass</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">allowDate</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">allowFunction</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">allowRegExp</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">allowSymbol</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">allowUndefined</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">lazyEval</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">maxDepth</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">space</span><span class="token operator">:</span> number <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook에서 매니저와 미리보기 간에 통신하는 데 사용하는 채널을 구성합니다.</p>
<p>일반적으로 두 가지 속성만 사용될 가능성이 높습니다:</p>
<h3 id="channeloptions-allowfunction" tabindex="-1"><a class="header-anchor" href="#channeloptions-allowfunction" aria-hidden="true">#</a> channelOptions.allowFunction</h3>
<p>유형: 부울 (boolean)</p>
<p>디폴트: false</p>
<p>채널 간에 함수 직렬화를 활성화합니다. 이는 보안 위험이 될 수 있습니다.</p>
<h3 id="channeloptions-maxdepth" tabindex="-1"><a class="header-anchor" href="#channeloptions-maxdepth" aria-hidden="true">#</a> channelOptions.maxDepth</h3>
<p>타입: 숫자</p>
<p>기본값: 3</p>
<p>채널을 통해 직렬화할 수 있는 중첩 객체의 최대 깊이입니다. 값이 클수록 속도가 느려집니다.</p>
<h2 id="crossoriginisolated" tabindex="-1"><a class="header-anchor" href="#crossoriginisolated" aria-hidden="true">#</a> crossOriginIsolated</h2>
<p>유형: 부울값</p>
<p>&quot;안전한 컨텍스트&quot;에서 문서를 실행하려면 CORS 헤더를 활성화하세요. SharedArrayBuffer 보안 요구 사항을 참조해주세요.</p>
<p>이렇게 개발 모드에서 헤더를 활성화할 수 있습니다:</p>
<ul>
<li>Cross-Origin-Opener-Policy: same-origin</li>
<li>Cross-Origin-Embedder-Policy: require-corp</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 Framework를 대체하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    crossOriginIsolated<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="disableprojectjson" tabindex="-1"><a class="header-anchor" href="#disableprojectjson" aria-hidden="true">#</a> disableProjectJson</h2>
<p>유형: 부울(boolean)</p>
<p>project.json 파일을 생성하는 작업을 비활성화합니다. 이 파일에는 Storybook 메타데이터가 포함됩니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크를 나타내는 "your-framework" 부분을 해당 프레임워크로 대체하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    disableProjectJson<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="disabletelemetry" tabindex="-1"><a class="header-anchor" href="#disabletelemetry" aria-hidden="true">#</a> disableTelemetry</h2>
<p>유형: boolean</p>
<p>Storybook의 텔레메트리 수집을 비활성화합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크와 함께 (예: react-webpack5, vue3-vite) 다음과 같이 교체하십시오</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    disableTelemetry<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="disablewebpackdefaults" tabindex="-1"><a class="header-anchor" href="#disablewebpackdefaults" aria-hidden="true">#</a> disableWebpackDefaults</h2>
<p>유형: boolean</p>
<p>Storybook의 기본 Webpack 구성을 비활성화합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 대체하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    disableWebpackDefaults<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="disablewhatsnewnotifications" tabindex="-1"><a class="header-anchor" href="#disablewhatsnewnotifications" aria-hidden="true">#</a> disableWhatsNewNotifications</h2>
<p>유형: 부울형</p>
<p>새로운 Storybook 버전 및 생태계 업데이트(애드온, 콘텐츠 등)에 대한 UI의 &quot;새로운 기능&quot; 알림을 비활성화합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react-webpack5, vue3-vite)로 프레임워크를 바꿔주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    disableWhatsNewNotifications<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enablecrashreports" tabindex="-1"><a class="header-anchor" href="#enablecrashreports" aria-hidden="true">#</a> enableCrashReports</h2>
<p>유형: 부울(boolean)</p>
<p>Storybook 텔레메트리로 보내는 충돌 보고서를 활성화합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 your-framework을 대체하십시오 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    enableCrashReports<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 👈 충돌 보고서를 텔레메트리 이벤트에 추가합니다</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="렌더러" tabindex="-1"><a class="header-anchor" href="#렌더러" aria-hidden="true">#</a> 렌더러</h2>
<p>유형: 렌더러 이름</p>
</div></template>
