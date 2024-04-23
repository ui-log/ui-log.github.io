<template><div><h1 id="배경" tabindex="-1"><a class="header-anchor" href="#배경" aria-hidden="true">#</a> 배경</h1>
<p>제가 디자이너와 협업을 할 수 있다는 것은 얼마나 운이 좋은 일인지 표현하고 싶습니다. Tanzu Labs에서는 제품 매니저, 제품 디자이너 및 엔지니어를 포함한 &quot;균형있는&quot; 팀에서 일합니다. 따라서 사용자 경험이나 각 UI 구성 요소가 어떻게 보이는지에 대해 너무 걱정할 필요가 없습니다. 이상한 부분이 있으면 피드백을 공유할 수 있지만, 디자이너는 시각적으로 매력적인 디자인을 만들기 위해 최선을 다합니다.</p>
<p>그러나 최근 제품 디자이너 없이 프로젝트에 참여하게 되었습니다. 처음에는 디자인 접근 방식과 각 구성 요소의 외관을 결정하는 방법에 대해 몇 가지 우려가 있었습니다.</p>
<h1 id="material-ui-소개" tabindex="-1"><a class="header-anchor" href="#material-ui-소개" aria-hidden="true">#</a> Material UI 소개</h1>
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
<p>며칠 전에 Material UI에 대해 들었지만 실제 프로젝트에서 사용한 적은 없어서 아쉬웠어요. 시각적 디자인이 좋아서 제품에 적합한 구성 요소를 제공하는 것이 좋았어요. 다음으로 고민한 것은 Material UI와 함께 작업할 때 테스트를 작성할 수 있는지였죠.</p>
<p>이 기사에서는 지난 프로젝트에서 가장 많이 사용한 Material UI 구성 요소 중 일부를 살펴보겠습니다. 각 구성 요소에 대해 Material UI와 함께 또는 Material UI 없이 테스트 코드를 작성하는 방법을 살펴보고 테스트 코드에 필요한 수정 사항을 확인해보겠습니다.</p>
<h1 id="material-ui-설정하기" tabindex="-1"><a class="header-anchor" href="#material-ui-설정하기" aria-hidden="true">#</a> Material UI 설정하기</h1>
<p>React 프로젝트에 새로운 종속성을 추가하세요. 설치에 대한 자세한 내용은 여기 공식 문서에서 찾을 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @mui<span class="token operator">/</span>material @emotion<span class="token operator">/</span>react @emotion<span class="token operator">/</span>styled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>프로젝트에서 가장 많이 사용한 몇 가지 구성 요소로 넘어가 보겠습니다.</p>
<h1 id="구성-요소" tabindex="-1"><a class="header-anchor" href="#구성-요소" aria-hidden="true">#</a> 구성 요소</h1>
<h1 id="_1-textfield" tabindex="-1"><a class="header-anchor" href="#_1-textfield" aria-hidden="true">#</a> 1. TextField</h1>
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
<h2 id="구현-기본" tabindex="-1"><a class="header-anchor" href="#구현-기본" aria-hidden="true">#</a> 구현 (기본)</h2>
<p>간단한 텍스트 입력란과 레이블을 가진 것을 상상해봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">TextInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h3<span class="token operator">></span>Default<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"name-input"</span><span class="token operator">></span>Name<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        data<span class="token operator">-</span>testid<span class="token operator">=</span><span class="token string">"name-input"</span>
        id<span class="token operator">=</span><span class="token string">"name-input"</span>
        type<span class="token operator">=</span><span class="token string">"text"</span>
        placeholder<span class="token operator">=</span><span class="token string">"이름을 입력하세요"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setValue</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TextInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 컴포넌트는 다음과 같이 보입니다:</p>
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
<img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_0.png" />
<h2 id="테스트-기본" tabindex="-1"><a class="header-anchor" href="#테스트-기본" aria-hidden="true">#</a> 테스트 (기본)</h2>
<p>이 컴포넌트는 다양한 방법으로 테스트할 수 있어요. 원하는 요소를 어떻게 쿼리할지에 대한 선호도가 다를 수 있으니, 마음에 드는 방법을 자유롭게 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TextInput <span class="token keyword">from</span> <span class="token string">"./TextInput"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"TextInput Tests"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"플레이스홀더 텍스트 사용 테스트"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>TextInput <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByPlaceholderText</span><span class="token punctuation">(</span><span class="token string">"이름을 입력하세요"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"라벨 사용 테스트"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>TextInput <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByLabelText</span><span class="token punctuation">(</span><span class="token string">"이름"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"테스트 ID 사용 테스트"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>TextInput <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByTestId</span><span class="token punctuation">(</span><span class="token string">"name-input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="구현-material-ui와-함께" tabindex="-1"><a class="header-anchor" href="#구현-material-ui와-함께" aria-hidden="true">#</a> 구현 (Material UI와 함께)</h2>
<p>자, 이제 Material UI TextField를 사용하여 변환해 봅시다. 구현 측면에서 몇 가지 차이점이 있습니다. 라벨은 TextField 컴포넌트 내부의 속성 중 하나입니다. 그 외에도 data-testid를 사용하여 테스트를 작성하려면 inputProps 속성으로 전달해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TextField <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@mui/material"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MuiTextInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h3<span class="token operator">></span>mui TextField<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span>TextField
        inputProps<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string-property property">"data-testid"</span><span class="token operator">:</span> <span class="token string">"name-input"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
        label<span class="token operator">=</span><span class="token string">"Name"</span>
        variant<span class="token operator">=</span><span class="token string">"outlined"</span>
        placeholder<span class="token operator">=</span><span class="token string">"이름을 입력하세요"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setValue</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MuiTextInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_1.png" />
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
<p><img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_2.png" alt="React Material UI Testing"></p>
<h2 id="material-ui를-사용하여-테스트하기" tabindex="-1"><a class="header-anchor" href="#material-ui를-사용하여-테스트하기" aria-hidden="true">#</a> Material UI를 사용하여 테스트하기</h2>
<p>테스트 코드에서는 아무것도 변경되지 않습니다. 참고용으로 전체 테스트 코드가 여기 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MuiTextInput <span class="token keyword">from</span> <span class="token string">"./MuiTextInput"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"TextInput 테스트"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"플레이스홀더 텍스트 사용 테스트"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiTextInput <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByPlaceholderText</span><span class="token punctuation">(</span><span class="token string">"이름을 입력하세요"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"라벨 사용 테스트"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiTextInput <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByLabelText</span><span class="token punctuation">(</span><span class="token string">"이름"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"테스트 ID 사용 테스트"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiTextInput <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByTestId</span><span class="token punctuation">(</span><span class="token string">"name-input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="_2-textfield을-textarea로-사용하기" tabindex="-1"><a class="header-anchor" href="#_2-textfield을-textarea로-사용하기" aria-hidden="true">#</a> 2. TextField을 Textarea로 사용하기</h1>
<h2 id="구현-방법" tabindex="-1"><a class="header-anchor" href="#구현-방법" aria-hidden="true">#</a> 구현 방법</h2>
<p>일반적으로 텍스트 입력에는 <code v-pre>input /</code>이 사용되고 여러 줄 입력에는 <code v-pre>textarea /</code>가 사용됩니다. 다행히, TextField 컴포넌트는 아주 적은 노력으로 textarea로 변환할 수 있습니다. 또한, 테스트 코드를 수정할 필요가 없습니다.</p>
<p>필요한 유일한 변경 사항은 multiline prop을 추가하는 것입니다. textarea가 기본적으로 더 많은 공간을 차지하도록 하려면 minRows를 추가할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TextField <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@mui/material"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MuiTextArea</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h3<span class="token operator">></span>mui TextField을 텍스트 영역으로 사용하기<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span>TextField
        multiline<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
        minRows<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>
        inputProps<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token punctuation">{</span> <span class="token string-property property">"data-testid"</span><span class="token operator">:</span> <span class="token string">"name-input"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
        label<span class="token operator">=</span><span class="token string">"이름"</span>
        variant<span class="token operator">=</span><span class="token string">"outlined"</span>
        placeholder<span class="token operator">=</span><span class="token string">"이름을 입력해주세요"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setValue</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MuiTextArea<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Label과 placeholder 텍스트의 동작 방식은 TextField와 동일합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_3.png" alt="이미지1"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_4.png" alt="이미지2"></p>
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
<h2 id="테스트" tabindex="-1"><a class="header-anchor" href="#테스트" aria-hidden="true">#</a> 테스트</h2>
<p>텍스트 필드 테스트 코드와 차이가 없어요. 참고용으로, 테스트 코드는 아래와 같아요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MuiTextArea <span class="token keyword">from</span> <span class="token string">"./MuiTextArea"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"텍스트영역 테스트"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"플레이스홀더 텍스트 사용 테스트"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiTextArea <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByPlaceholderText</span><span class="token punctuation">(</span><span class="token string">"이름을 입력해주세요"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"라벨 사용 테스트"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiTextArea <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByLabelText</span><span class="token punctuation">(</span><span class="token string">"이름"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"테스트 ID 사용 테스트"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiTextArea <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByTestId</span><span class="token punctuation">(</span><span class="token string">"name-input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"제이"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-입력-레이블이-있는-선택하기" tabindex="-1"><a class="header-anchor" href="#_3-입력-레이블이-있는-선택하기" aria-hidden="true">#</a> 3. 입력 레이블이 있는 선택하기</h3>
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
<h2 id="구현-기본-1" tabindex="-1"><a class="header-anchor" href="#구현-기본-1" aria-hidden="true">#</a> 구현 (기본)</h2>
<p>멤버의 드롭다운 목록을 만들어 보겠습니다. 선택된 멤버의 id를 얻고 싶다고 가정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MemberDropdown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> members <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Jay"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Su"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h3<span class="token operator">></span>Default<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"name-select"</span><span class="token operator">></span>멤버 선택<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>select
        id<span class="token operator">=</span><span class="token string">"name-select"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setName</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token operator">></span>
        <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
        <span class="token punctuation">{</span>members<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>option key<span class="token operator">=</span><span class="token punctuation">{</span>m<span class="token punctuation">.</span>id<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>m<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token punctuation">{</span>m<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MemberDropdown<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 컴포넌트는 다음과 같이 보입니다:</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_5.png" alt="ReactDontgiveupontestingwhenusingMaterialUIwithReact_5"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_6.png" alt="ReactDontgiveupontestingwhenusingMaterialUIwithReact_6"></p>
<p>ARIA 역할을 사용하여 테스트를 작성할 수 있습니다. MDN에서 <code v-pre>select /</code>가 combobox이고, 이 경우 <code v-pre>option /</code>은 option 역할을 갖는다고 언급합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_7.png" alt="ReactDontgiveupontestingwhenusingMaterialUIwithReact_7"></p>
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
<h2 id="테스트-기본-1" tabindex="-1"><a class="header-anchor" href="#테스트-기본-1" aria-hidden="true">#</a> 테스트 (기본)</h2>
<p>테스트 코드를 살펴봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MemberDropdown <span class="token keyword">from</span> <span class="token string">"./MemberDropdown"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"MemberDropdown Test"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"라벨을 표시해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MemberDropdown <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByLabelText</span><span class="token punctuation">(</span><span class="token string">"Select Member"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"드롭다운을 표시해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MemberDropdown <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"combobox"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"옵션들을 표시해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MemberDropdown <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"option"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"option"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Jay"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"option"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Su"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"선택된 값을 표시해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MemberDropdown <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> dropdown <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"combobox"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>dropdown<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">selectOptions</span><span class="token punctuation">(</span>dropdown<span class="token punctuation">,</span> <span class="token string">"Jay"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>dropdown<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveValue</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="구현-material-ui와-함께-1" tabindex="-1"><a class="header-anchor" href="#구현-material-ui와-함께-1" aria-hidden="true">#</a> 구현 (Material UI와 함께)</h2>
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
<p>Let’s convert to Material UI by using InputLabel and Select components.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FormControl<span class="token punctuation">,</span> InputLabel<span class="token punctuation">,</span> MenuItem<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@mui/material"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MuiMemberDropdown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> members <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Jay"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Su"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h3<span class="token operator">></span>mui Select<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span>FormControl
        fullWidth<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
        sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"200px"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">></span>
        <span class="token operator">&lt;</span>InputLabel id<span class="token operator">=</span><span class="token string">"name-select-label"</span><span class="token operator">></span>Select Member<span class="token operator">&lt;</span><span class="token operator">/</span>InputLabel<span class="token operator">></span>
        <span class="token operator">&lt;</span>Select
          data<span class="token operator">-</span>testid<span class="token operator">=</span><span class="token string">"name-select"</span>
          labelId<span class="token operator">=</span><span class="token string">"name-select-label"</span>
          id<span class="token operator">=</span><span class="token string">"name-select"</span>
          label<span class="token operator">=</span><span class="token string">"Select Member"</span>
          value<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">setName</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span>
          <span class="token punctuation">{</span>members<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>MenuItem key<span class="token operator">=</span><span class="token punctuation">{</span>m<span class="token punctuation">.</span>id<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>m<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token punctuation">{</span>m<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>MenuItem<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Select<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>FormControl<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MuiMemberDropdown<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result of this looks like this when rendered:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_8.png" alt="Rendered Image"></p>
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
<img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_9.png" />
<h2 id="테스트-material-ui와-함께" tabindex="-1"><a class="header-anchor" href="#테스트-material-ui와-함께" aria-hidden="true">#</a> 테스트 (Material UI와 함께)</h2>
<p>이전에 실행했던 같은 테스트 코드를 실행하면 기본적으로 모든 테스트가 실패합니다...</p>
<img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_10.png" />
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
<p>우리는 비슷한 동작을 테스트하기 위해 테스트 코드를 수정해야 합니다. 테이블 태그를 Markdown 형식으로 변경해 봅시다.</p>
<p>이미지를 확인해보세요. 콤보박스 역할은 더 이상 적용되지 않습니다. 흥미롭게도 드롭다운은 버튼 역할을 가지고 있습니다.</p>
<p>또한, 테스트 코드에서는 테스트 ID가 사용되었습니다. 이것은 선호되는 해결책은 아닐 수 있지만, 한 페이지에 여러 드롭다운이 포함될 수 있는 경우를 대비해 사용됩니다. 그럼에도 특정 드롭다운을 선택하는 데 테스트 ID를 사용할 수 있습니다. 특정 드롭다운을 타겟팅하는 더 나은 방법이 있는지 궁금합니다. 이에 대한 답을 알고 계신다면 알려주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen<span class="token punctuation">,</span> within <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MuiMemberDropdown <span class="token keyword">from</span> <span class="token string">"./MuiMemberDropdown"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"MuiMemberDropdown 테스트"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"레이블이 표시되어야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiMemberDropdown <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByLabelText</span><span class="token punctuation">(</span><span class="token string">"Select Member"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"드롭다운이 표시되어야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiMemberDropdown <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token function">within</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByTestId</span><span class="token punctuation">(</span><span class="token string">"name-select"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"옵션이 표시되어야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiMemberDropdown <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> dropdown <span class="token operator">=</span> <span class="token function">within</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByTestId</span><span class="token punctuation">(</span><span class="token string">"name-select"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span>
      <span class="token string">"button"</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>dropdown<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"option"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Jay"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"option"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Su"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"선택한 값을 표시해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiMemberDropdown <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> dropdown <span class="token operator">=</span> <span class="token function">within</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByTestId</span><span class="token punctuation">(</span><span class="token string">"name-select"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span>
      <span class="token string">"button"</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>dropdown<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"option"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Jay"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">"Jay"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="_4-버튼" tabindex="-1"><a class="header-anchor" href="#_4-버튼" aria-hidden="true">#</a> 4. 버튼</h2>
<h2 id="구현-기본-2" tabindex="-1"><a class="header-anchor" href="#구현-기본-2" aria-hidden="true">#</a> 구현 (기본)</h2>
<p>버튼은 Material UI를 적용할 때 가장 쉬운 요소 중 하나입니다. 간단한 버튼부터 시작해봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">SimpleButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">></span>여기를 클릭해주세요<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> SimpleButton<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_12.png" alt="ReactDontgiveupontestingwhenusingMaterialUIwithReact_12"></p>
<h2 id="테스트-기본-2" tabindex="-1"><a class="header-anchor" href="#테스트-기본-2" aria-hidden="true">#</a> 테스트 (기본)</h2>
<p>ARIA 역할을 다시 사용하여 테스트 코드는 매우 간단합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen<span class="token punctuation">,</span> waitFor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> SimpleButton <span class="token keyword">from</span> <span class="token string">"./SimpleButton"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"SimpleButton Tests"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"버튼과 텍스트가 표시되어야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>SimpleButton <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Click Here"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"버튼을 클릭할 때 클릭 핸들러 함수가 실행되어야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mockOnClickHandler <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>SimpleButton onClick<span class="token operator">=</span><span class="token punctuation">{</span>mockOnClickHandler<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Click Here"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>mockOnClickHandler<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 버튼 클릭 후 화면에 무언가가 발생하는 지 확인하는 것이 더 나은 테스트입니다</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="구현-material-ui로" tabindex="-1"><a class="header-anchor" href="#구현-material-ui로" aria-hidden="true">#</a> 구현 (Material UI로)</h2>
<p>Material UI 버튼으로 변환해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@mui/material"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MuiSimpleButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">"outlined"</span> color<span class="token operator">=</span><span class="token string">"success"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">></span>
      Click Here
    <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MuiSimpleButton<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 보입니다.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/img/ReactDontgiveupontestingwhenusingMaterialUIwithReact_13.png" alt="이미지"></p>
<h2 id="테스트-material-ui-사용-시" tabindex="-1"><a class="header-anchor" href="#테스트-material-ui-사용-시" aria-hidden="true">#</a> 테스트 (Material UI 사용 시)</h2>
<p>이전과 동일한 테스트 코드를 사용할 수 있습니다. 각 테스트에서 렌더링되는 컴포넌트만 변경하면 됩니다. 참고용으로 여기에 테스트 코드를 제공합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen<span class="token punctuation">,</span> waitFor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MuiSimpleButton <span class="token keyword">from</span> <span class="token string">"./MuiSimpleButton"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"MuiSimpleButton 테스트"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"텍스트가 있는 버튼을 표시해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiSimpleButton <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Click Here"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"버튼을 클릭하면 클릭 핸들러 함수가 실행되어야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mockOnClickHandler <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiSimpleButton onClick<span class="token operator">=</span><span class="token punctuation">{</span>mockOnClickHandler<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Click Here"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>mockOnClickHandler<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 버튼 클릭 후 화면에서 어떤 일이 발생하는지 확인하는 더 좋은 테스트입니다</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="_5-스낵바-및-알림" tabindex="-1"><a class="header-anchor" href="#_5-스낵바-및-알림" aria-hidden="true">#</a> 5. 스낵바 및 알림</h1>
<h2 id="구현" tabindex="-1"><a class="header-anchor" href="#구현" aria-hidden="true">#</a> 구현</h2>
<p>스낵바는 응용 프로그램 사용 중 사용자를 방해하지 않고 피드백을 제공하는 데 사용할 수 있습니다. 이 섹션에서는 테스트 작성 방법에 대해 다루겠습니다. 저는 구현할 스낵바는 사용자에게 텍스트를 표시하고 5초 후 자동으로 숨깁니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Snackbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@mui/material"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MuiSnackbar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showSnackbar<span class="token punctuation">,</span> setShowSnackbar<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleShowSnackbar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setShowSnackbar</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleCloseSnackbar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setShowSnackbar</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">"outlined"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleShowSnackbar<span class="token punctuation">}</span><span class="token operator">></span>
        스낵바 표시
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token punctuation">{</span>showSnackbar <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Snackbar
          open<span class="token operator">=</span><span class="token punctuation">{</span>showSnackbar<span class="token punctuation">}</span>
          anchorOrigin<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">vertical</span><span class="token operator">:</span> <span class="token string">"top"</span><span class="token punctuation">,</span> <span class="token literal-property property">horizontal</span><span class="token operator">:</span> <span class="token string">"center"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          autoHideDuration<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5000</span><span class="token punctuation">}</span>
          onClose<span class="token operator">=</span><span class="token punctuation">{</span>handleCloseSnackbar<span class="token punctuation">}</span>
          message<span class="token operator">=</span><span class="token string">"안녕하세요"</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MuiSnackbar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>&quot;Show Snackbar&quot; 버튼을 클릭하면 스낵바가 표시되고 잠시 후에 숨겨집니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1200/1*yUr08hAYa_DiimZ14o32VA.gif" alt="Snackbar"></p>
<h2 id="테스트-1" tabindex="-1"><a class="header-anchor" href="#테스트-1" aria-hidden="true">#</a> 테스트</h2>
<p>이를 테스트하는 방법을 살펴보겠습니다. 스낵바에는 경고를 나타내는 ARIA 역할이 있습니다. Jest 가짜 타이머를 사용하여 스낵바의 자동 숨김 기능을 테스트하는 방법을 확인하세요.&quot;</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> act<span class="token punctuation">,</span> render<span class="token punctuation">,</span> screen<span class="token punctuation">,</span> within <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MuiSnackbar <span class="token keyword">from</span> <span class="token string">"./MuiSnackbar"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"MuiSnackbar Tests"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    jest<span class="token punctuation">.</span><span class="token function">useRealTimers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should render snackbar when button is clicked"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiSnackbar <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Show Snackbar"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> snackbar <span class="token operator">=</span> <span class="token function">within</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"alert"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>snackbar<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">"Hello there"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should auto hide snackbar after 5s"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    jest<span class="token punctuation">.</span><span class="token function">useFakeTimers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> userEvent<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">advanceTimers</span><span class="token operator">:</span> jest<span class="token punctuation">.</span>advanceTimersByTime <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiSnackbar <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Show Snackbar"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"alert"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">act</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      jest<span class="token punctuation">.</span><span class="token function">advanceTimersByTime</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">queryByRole</span><span class="token punctuation">(</span><span class="token string">"alert"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Snackbar 컴포넌트는 Alert 컴포넌트와 함께 사용할 때 추가로 사용자 정의할 수 있습니다. 더 많은 정보는 다음 링크를 참조하세요.</p>
<h1 id="_6-dialogs" tabindex="-1"><a class="header-anchor" href="#_6-dialogs" aria-hidden="true">#</a> 6. Dialogs</h1>
<h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h2>
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
<p>다음은 대화 상자(Dialogs)입니다. 버튼을 클릭하면 모달(modal)이 열리는 대화 상자를 만들어 봅시다. 대화 상자를 위해 테스트 코드 작성 방법에 대해 설명할 거에요. 다행히도, 대화 상자를 직접 구현한다면 테스트 코드도 매우 유사할 거에요.</p>
<p>여기에 데모가 있어요:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1200/1*mmI2orV3joBq5-OkVNTEfw.gif" alt="데모"></p>
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
<h2 id="테스트-2" tabindex="-1"><a class="header-anchor" href="#테스트-2" aria-hidden="true">#</a> 테스트</h2>
<p>우선, 대화 상자는 대화 상자의 ARIA 역할에 따라 화면에서 조회할 수 있습니다. 즉, 모달의 모든 내용을 쉽게 확인할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen<span class="token punctuation">,</span> within <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MuiModal <span class="token keyword">from</span> <span class="token string">"./MuiModal"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"MuiModal Tests"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"버튼을 클릭하면 대화 상자를 렌더링해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiModal <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Show Modal"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> modal <span class="token operator">=</span> <span class="token function">within</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"dialog"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>modal<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">"Welcome"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>modal<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">"Hi there"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>modal<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Close"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"닫기 버튼을 클릭하면 모달을 닫아야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiModal <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Show Modal"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> modal <span class="token operator">=</span> <span class="token function">within</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"dialog"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>modal<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">"Welcome"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>modal<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">"Hi there"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> closeButton <span class="token operator">=</span> modal<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Close"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>closeButton<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">queryByRole</span><span class="token punctuation">(</span><span class="token string">"dialog"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-페이지네이션" tabindex="-1"><a class="header-anchor" href="#_7-페이지네이션" aria-hidden="true">#</a> 7. 페이지네이션</h1>
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
<h2 id="구현-1" tabindex="-1"><a class="header-anchor" href="#구현-1" aria-hidden="true">#</a> 구현</h2>
<p>마지막으로 돌아오는 것은 데이터 목록을 통해 탐색할 수 있게 해주는 페이지네이션 컴포넌트입니다.</p>
<p>백엔드에서 데이터를 가져와 테이블을 렌더링하는 컴포넌트를 만들어봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Pagination<span class="token punctuation">,</span>
  Table<span class="token punctuation">,</span>
  TableBody<span class="token punctuation">,</span>
  TableCell<span class="token punctuation">,</span>
  TableContainer<span class="token punctuation">,</span>
  TableHead<span class="token punctuation">,</span>
  TableRow<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@mui/material"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fetchFromBackend <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../membersApi"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MuiTable</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>members<span class="token punctuation">,</span> setMembers<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>total<span class="token punctuation">,</span> setTotal<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>page<span class="token punctuation">,</span> setPage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> limit <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> fetchMembers <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
    <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">page<span class="token punctuation">,</span> limit</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchFromBackend</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setMembers</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setTotal</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>totalElements<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>page<span class="token punctuation">,</span> limit<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetchMembers</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>page<span class="token punctuation">,</span> limit<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>TableContainer<span class="token operator">></span>
        <span class="token operator">&lt;</span>Table<span class="token operator">></span>
          <span class="token operator">&lt;</span>TableHead<span class="token operator">></span>
            <span class="token operator">&lt;</span>TableRow<span class="token operator">></span>
              <span class="token operator">&lt;</span>TableCell<span class="token operator">></span>Id<span class="token operator">&lt;</span><span class="token operator">/</span>TableCell<span class="token operator">></span>
              <span class="token operator">&lt;</span>TableCell<span class="token operator">></span>Name<span class="token operator">&lt;</span><span class="token operator">/</span>TableCell<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>TableRow<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>TableHead<span class="token operator">></span>
          <span class="token operator">&lt;</span>TableBody<span class="token operator">></span>
            <span class="token punctuation">{</span>members<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>TableRow key<span class="token operator">=</span><span class="token punctuation">{</span>m<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>TableCell<span class="token operator">></span><span class="token punctuation">{</span>m<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>TableCell<span class="token operator">></span>
                <span class="token operator">&lt;</span>TableCell<span class="token operator">></span><span class="token punctuation">{</span>m<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>TableCell<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>TableRow<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>TableBody<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Table<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>TableContainer<span class="token operator">></span>

      <span class="token operator">&lt;</span>Pagination
        count<span class="token operator">=</span><span class="token punctuation">{</span>Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>total <span class="token operator">/</span> limit<span class="token punctuation">)</span><span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setPage</span><span class="token punctuation">(</span>value <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        variant<span class="token operator">=</span><span class="token string">"outlined"</span>
        shape<span class="token operator">=</span><span class="token string">"rounded"</span>
        boundaryCount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>
        siblingCount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>
        showFirstButton<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
        showLastButton<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
        sx<span class="token operator">=</span><span class="token punctuation">{</span>
          <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token string">"12px"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MuiTable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기에 데모가 있어요:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1200/1*cTj3wab5uziMZNNpqrP_CQ.gif" alt="데모"></p>
<h2 id="테스트-3" tabindex="-1"><a class="header-anchor" href="#테스트-3" aria-hidden="true">#</a> 테스트</h2>
<p>페이지네이션 컴포넌트는 탐색을 위한 ARIA 역할을 가지고 있어요. 그래서 역할은 페이지네이션 컴포넌트를 쿼리하는 데 사용될 수 있어요. 페이지 간 이동하는 테스트 코드는 조금 까다로웠는데, 페이지네이션 컴포넌트의 각 페이지는 Go to page n이라는 ARIA 레이블이 있는 버튼이기 때문이에요. 실제로 동작하는 것을 보겠습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen<span class="token punctuation">,</span> waitFor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MuiTable <span class="token keyword">from</span> <span class="token string">"./MuiTable"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> membersApi <span class="token keyword">from</span> <span class="token string">"../membersApi"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">"@testing-library/user-event"</span><span class="token punctuation">;</span>

jest<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">"../membersApi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"MuiTable Tests"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"페이지네이션 제어가 표시되어야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    membersApi<span class="token punctuation">.</span>fetchFromBackend<span class="token punctuation">.</span><span class="token function">mockResolvedValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">totalElements</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiTable <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"navigation"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"다음 3명과 이전 3명 회원을 로드해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    membersApi<span class="token punctuation">.</span>fetchFromBackend<span class="token punctuation">.</span><span class="token function">mockResolvedValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">totalElements</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MuiTable <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>membersApi<span class="token punctuation">.</span>fetchFromBackend<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenNthCalledWith</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> secondPage <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Go to page 2"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>secondPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>membersApi<span class="token punctuation">.</span>fetchFromBackend<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenNthCalledWith</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> firstPage <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Go to page 1"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>firstPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>membersApi<span class="token punctuation">.</span>fetchFromBackend<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenNthCalledWith</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>Material UI를 사용하여 팀은 단기 프로젝트를 성공적으로 고객에게 제공했습니다. 생산 준비가 완료된 시각적 컴포넌트 덕분에 우리는 구현과 테스팅에 집중할 수 있었습니다. 제품 디자이너의 부재에도 불구하고 고객들은 전체적으로 디자인에 만족을 표현했고, 우리 팀은 많은 테스트를 수행하면서도 인상적인 속도를 유지했습니다. 대략 한 달 반 동안, 우리는 프론트엔드와 백엔드 각각 약 250개의 테스트를 작성했습니다. 일부 컴포넌트의 테스트 프로세스를 파악하는 데 시간이 걸렸습니다. 이 문서가 소프트웨어 프로젝트의 품질을 향상시키는 데 도움이 되기를 바랍니다. 행운을 빕니다!</p>
<p>전체 소스는 https://github.com/jskim1991/react-material-ui-test에서 찾을 수 있습니다.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>
