<template><div><h1 id="설치-및-재사용-가능한-입력-컴포넌트-생성" tabindex="-1"><a class="header-anchor" href="#설치-및-재사용-가능한-입력-컴포넌트-생성" aria-hidden="true">#</a> 설치 및 재사용 가능한 입력 컴포넌트 생성</h1>
<p><img src="@source/docs/Nextjs/2024-04-05-Vue3DesignSystemSeries-1/img/Vue3DesignSystemSeries-1_0.png" alt="Vue3DesignSystemSeries-1_0"></p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>Nuxt 3는 웹 애플리케이션을 구축하는 방식을 혁신적으로 변화시켰습니다. 더 효율적이고 유연한 프레임워크를 제공합니다. 효율적이고 일관된 사용자 인터페이스를 만드는 데 중요한 부분은 잘 구조화된 디자인 시스템입니다. 이 글에서는 Vue 3 디자인 시스템 킷 중에서 특별히 입력 컴포넌트에 집중합니다. 실제 킷의 코드를 사용하여 설정, 구조 및 스타일링을 살펴보겠습니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>디자인 시스템 컴포넌트를 탐험하기 전에 Nuxt 3 프로젝트가 설정되어 있는지 확인해주세요. nuxi를 사용하여 쉽게 새 프로젝트를 만들 수 있습니다.</p>
<h2 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h2>
<p>1- Nuxt 설치</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx nuxi@latest init <span class="token operator">&lt;</span>프로젝트명<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>2- Tailwind CSS 설치하기</p>
<ul>
<li>프로젝트에 @nuxtjs/tailwindcss 종속성을 설치하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> @nuxtjs<span class="token operator">/</span>tailwindcss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>nuxt.config의 modules 섹션에 추가하세요:</li>
</ol>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// nuxt.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@nuxtjs/tailwindcss'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>아래 명령어를 실행하여 tailwind.config.js 파일을 만들 수 있습니다:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx tailwindcss init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>직접 Tailwind CSS 파일을 만들 계획이라면, 각 Tailwind 레이어 유형(base, components, utilities)에 대해 @tailwind 지시문을 추가해야 합니다.</li>
</ol>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@tailwind base<span class="token punctuation">;</span>
@tailwind components<span class="token punctuation">;</span>
@tailwind utilities<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5- (옵션) nuxt.config에서 tailwindcss 속성을 사용하여 모듈의 동작을 사용자 정의할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 옵션</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-font-awsome-설정" tabindex="-1"><a class="header-anchor" href="#_3-font-awsome-설정" aria-hidden="true">#</a> 3- Font Awsome 설정</h1>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol>
<li>먼저 @fortawesome/fontawesome-svg-core 및 사용할 아이콘 패키지를 설치하세요.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i <span class="token operator">--</span>save @fortawesome<span class="token operator">/</span>vue<span class="token operator">-</span>fontawesome@latest<span class="token operator">-</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>Nuxt 프로젝트 내에서 plugins/fontawesome.js 파일을 추가하세요:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Nuxt 3용</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> library<span class="token punctuation">,</span> config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@fortawesome/fontawesome-svg-core'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FontAwesomeIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@fortawesome/vue-fontawesome'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fas <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@fortawesome/free-solid-svg-icons'</span>

<span class="token comment">// 중요한 설정으로, CSS에 대한 걱정은 Nuxt에 맡깁니다.</span>
config<span class="token punctuation">.</span>autoAddCss <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">// 이 플러그인에 직접 아이콘을 추가할 수 있습니다. 다른 예제를 참조하여</span>
<span class="token comment">// 다른 스타일이나 개별 아이콘을 추가하는 방법을 확인하세요.</span>
library<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fas<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>3- <code v-pre>nuxt.config.ts</code> 파일을 수정하여 <code v-pre>export default defineNuxtConfig()</code>에 다음 코드를 추가해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">nuxtApp</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  nuxtApp<span class="token punctuation">.</span>vueApp<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'font-awesome-icon'</span><span class="token punctuation">,</span> FontAwesomeIcon<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="재사용-가능한-입력-컴포넌트-만들기" tabindex="-1"><a class="header-anchor" href="#재사용-가능한-입력-컴포넌트-만들기" aria-hidden="true">#</a> 재사용 가능한 입력 컴포넌트 만들기</h1>
<h2 id="_1-입력-컴포넌트-템플릿-부분" tabindex="-1"><a class="header-anchor" href="#_1-입력-컴포넌트-템플릿-부분" aria-hidden="true">#</a> 1- 입력 컴포넌트 템플릿 부분</h2>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ul>
<li>동적 레이블: 레이블 요소는 :for 바인딩을 통해 입력 필드와 연결되어 접근성을 향상시킵니다.</li>
<li>유연한 입력 필드: input 클래스는 v-model로 동적으로 변경되며, clearable 및 error와 같은 상태를 처리합니다.</li>
<li>Clearable 기능: Font Awesome 아이콘을 clear 버튼으로 사용하며, 조건에 따라 표시되고 입력 필드를 지울 수 있습니다.</li>
<li>오류 처리: 유효성 검사 문제가 있을 경우 오류 메시지가 표시됩니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"input-wrapper"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Label <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>label <span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"id"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"input-wrapper__label"</span> v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">></span><span class="token punctuation">{</span> label <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Input field <span class="token keyword">with</span> clear and error handling <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"relative flex"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"modelValue"</span>
        <span class="token operator">:</span>id<span class="token operator">=</span><span class="token string">"id"</span>
        <span class="token operator">:</span>type<span class="token operator">=</span><span class="token string">"type"</span>
        <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"input-wrapper__input"</span>
        <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span>"<span class="token punctuation">{</span>
          <span class="token string-property property">'input-wrapper__input--clearable'</span><span class="token operator">:</span> showClearable<span class="token punctuation">,</span>
          <span class="token string-property property">'input-wrapper__input--error'</span><span class="token operator">:</span> error<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>"
        <span class="token operator">:</span>placeholder<span class="token operator">=</span><span class="token string">"placeholder"</span>
        <span class="token operator">:</span>disabled<span class="token operator">=</span><span class="token string">"disabled"</span>
        <span class="token operator">:</span>readonly<span class="token operator">=</span><span class="token string">"readonly"</span>
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Clear icon <span class="token operator">--</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>font<span class="token operator">-</span>awesome<span class="token operator">-</span>icon
        v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"showClearable"</span>
        icon<span class="token operator">=</span><span class="token string">"fa-xmark"</span>
        <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"input-wrapper__clear"</span>
        @click<span class="token operator">=</span><span class="token string">"clearInput"</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Error message <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"errorMessages"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"input-wrapper__error-message"</span><span class="token operator">></span>
      <span class="token punctuation">{</span> errorMessage <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span
    <span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-스크립트-부분" tabindex="-1"><a class="header-anchor" href="#_2-스크립트-부분" aria-hidden="true">#</a> 2- 스크립트 부분</h2>
<ul>
<li>TypeScript 통합: 유형 안정성과 예측 가능성을 향상시킵니다.</li>
<li>동적 Props: Props에는 표준 입력 속성과 clearable 및 error와 같은 추가 기능이 포함됩니다.</li>
<li>반응형 상태: Vue 3의 Composition API를 사용하여 반응성과 상태 관리에 활용됩니다.</li>
<li>계산된 속성: showClearable은 clear 아이콘이 표시되어야 하는 조건을 결정합니다.</li>
<li>Clear 함수: clearInput은 입력 필드를 지우는 논리를 제공합니다.</li>
</ul>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> InputHTMLAttributes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> errorMessages <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue/compiler-sfc"</span><span class="token punctuation">;</span>
<span class="token comment">// 허용된 입력 유형을 정의합니다</span>
type InputTypes <span class="token operator">=</span> Extract<span class="token operator">&lt;</span>
  InputHTMLAttributes<span class="token punctuation">[</span><span class="token string">"type"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"text"</span> <span class="token operator">|</span> <span class="token string">"number"</span> <span class="token operator">|</span> <span class="token string">"email"</span> <span class="token operator">|</span> <span class="token string">"password"</span> <span class="token operator">|</span> <span class="token string">"tel"</span> <span class="token operator">|</span> <span class="token string">"url"</span>
<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">// 입력 컴포넌트 속성</span>
<span class="token keyword">interface</span> <span class="token class-name">InputProps</span> <span class="token punctuation">{</span>
  id<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  type<span class="token operator">?</span><span class="token operator">:</span> InputTypes<span class="token punctuation">;</span>
  placeholder<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  readonly<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  clearable<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  errorMessage<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  error<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 고유 ID 생성과 함께 기본 속성 정의</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span>defineProps<span class="token operator">&lt;</span>InputProps<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> self<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token literal-property property">errorMessage</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"update:modelValue"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> modelValue <span class="token operator">=</span> defineModel<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">modelValue</span><span class="token operator">:</span> InputHTMLAttributes<span class="token punctuation">[</span><span class="token string">"value"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> showClearable <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>clearable <span class="token operator">&amp;&amp;</span> modelValue<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>props<span class="token punctuation">.</span>disabled
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 입력 클리어하는 함수</span>
<span class="token keyword">function</span> <span class="token function">clearInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>clearable<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  modelValue<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-스타일링-부분" tabindex="-1"><a class="header-anchor" href="#_3-스타일링-부분" aria-hidden="true">#</a> 3- 스타일링 부분</h2>
<p>우리는 입력 컴포넌트를 사용자 정의하기 위해 tailwindscss를 사용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>input<span class="token operator">-</span>wrapper <span class="token punctuation">{</span>
  @apply w<span class="token operator">-</span>full<span class="token punctuation">;</span>
  <span class="token operator">&amp;</span>__label <span class="token punctuation">{</span>
    @apply mb<span class="token operator">-</span><span class="token number">2</span> block text<span class="token operator">-</span>sm font<span class="token operator">-</span>medium leading<span class="token operator">-</span><span class="token number">6</span> text<span class="token operator">-</span>gray<span class="token operator">-</span><span class="token number">600</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token operator">&amp;</span>__input <span class="token punctuation">{</span>
    @apply block w<span class="token operator">-</span>full rounded<span class="token operator">-</span>md border<span class="token operator">-</span><span class="token number">0</span> px<span class="token operator">-</span><span class="token number">2</span> 
    py<span class="token operator">-</span><span class="token number">1.5</span> text<span class="token operator">-</span>gray<span class="token operator">-</span><span class="token number">900</span> shadow<span class="token operator">-</span>sm ring<span class="token operator">-</span><span class="token number">1</span> 
    ring<span class="token operator">-</span>inset ring<span class="token operator">-</span>gray<span class="token operator">-</span><span class="token number">300</span> <span class="token literal-property property">placeholder</span><span class="token operator">:</span>text<span class="token operator">-</span>gray<span class="token operator">-</span><span class="token number">400</span>
    <span class="token literal-property property">focus</span><span class="token operator">:</span>ring<span class="token operator">-</span><span class="token number">2</span> <span class="token literal-property property">focus</span><span class="token operator">:</span>ring<span class="token operator">-</span>inset focus<span class="token operator">:</span>ring<span class="token operator">-</span>indigo<span class="token operator">-</span><span class="token number">600</span> <span class="token literal-property property">sm</span><span class="token operator">:</span>text<span class="token operator">-</span>sm
    <span class="token literal-property property">sm</span><span class="token operator">:</span>leading<span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token operator">&amp;</span><span class="token operator">--</span>clearable <span class="token punctuation">{</span>
      @apply pr<span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&amp;</span><span class="token operator">--</span>error <span class="token punctuation">{</span>
      @apply ring<span class="token operator">-</span>red<span class="token operator">-</span><span class="token number">600</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token operator">&amp;</span>__clear <span class="token punctuation">{</span>
    @apply absolute inset<span class="token operator">-</span>y<span class="token operator">-</span><span class="token number">0</span> right<span class="token operator">-</span><span class="token number">0</span> top<span class="token operator">-</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span> <span class="token operator">-</span>translate<span class="token operator">-</span>y<span class="token operator">-</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span> transform cursor<span class="token operator">-</span>pointer items<span class="token operator">-</span>center p<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token operator">&amp;</span>__error<span class="token operator">-</span>message <span class="token punctuation">{</span>
    @apply mt<span class="token operator">-</span><span class="token number">2</span> text<span class="token operator">-</span>sm text<span class="token operator">-</span>red<span class="token operator">-</span><span class="token number">600</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token operator">:</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token operator">:</span>disabled<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">&amp;</span>__input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    @apply pointer<span class="token operator">-</span>events<span class="token operator">-</span>none  text<span class="token operator">-</span>gray<span class="token operator">-</span><span class="token number">400</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>만약 모든 튜토리얼을 시청하고 싶다면.</p>
<p>만약 레포지토리를 복제하고 싶다면.</p>
</div></template>
