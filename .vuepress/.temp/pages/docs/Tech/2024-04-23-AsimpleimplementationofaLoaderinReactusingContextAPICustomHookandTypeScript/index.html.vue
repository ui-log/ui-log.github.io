<template><div><img src="@source/docs/Tech/2024-04-23-AsimpleimplementationofaLoaderinReactusingContextAPICustomHookandTypeScript/img/AsimpleimplementationofaLoaderinReactusingContextAPICustomHookandTypeScript_0.png" />
<h1 id="개요-👀" tabindex="-1"><a class="header-anchor" href="#개요-👀" aria-hidden="true">#</a> 개요 👀</h1>
<p>만약 당신이 전문가이고 구현에만 관심이 있다면, 이 Github 저장소에서 코드를 찾을 수 있습니다.</p>
<p>일단 '개발자/'로서의 자신을 잊으세요. 대신 애플리케이션의 종단 사용자 👩‍💻 이라 가정하고 UI에서 버튼을 클릭했을 때 잠시 동안 아무 일도 일어나지 않고 갑자기 화면에 새로운 요소가 팝업됐다고 생각해보세요.</p>
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
<p>몇 초 동안 머리를 조금 굴려볼 필요가 있을 거에요 🧠 어떤 일이 일어났는지 알아내기 위해서! 아래 이미지를 보세요👇</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*HClkzlx3lGdVQVScOnnaEg.gif" alt="Image 1"></p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*JRq7Ha_MWfg7Red_fBnwzw.gif" alt="Image 2"></p>
<h2 id="여기에는-새로운-것이-없네요-🤗" tabindex="-1"><a class="header-anchor" href="#여기에는-새로운-것이-없네요-🤗" aria-hidden="true">#</a> 여기에는 새로운 것이 없네요 🤗</h2>
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
<h1 id="react에서는-컴포넌트에서-여러-개의-대기-상태-ui를-구현할-때-일반적으로-이👇-usestate-의-혼란스러운-뭉치가-있습니다" tabindex="-1"><a class="header-anchor" href="#react에서는-컴포넌트에서-여러-개의-대기-상태-ui를-구현할-때-일반적으로-이👇-usestate-의-혼란스러운-뭉치가-있습니다" aria-hidden="true">#</a> React에서는 컴포넌트에서 여러 개의 대기 상태 UI를 구현할 때, 일반적으로 이👇 (useState)의 혼란스러운 뭉치가 있습니다</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">SomeComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isCarsLoading<span class="token punctuation">,</span> setIsCarsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isEngineLoading<span class="token punctuation">,</span> setIsEngineLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> <span class="token function-variable function">fetchCars</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token function">setIsCarsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token function">setIsCarsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>      
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">const</span> <span class="token function-variable function">fetchEngineByCarModel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">carModel</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token function">setIsEngineLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token function">setIsEngineLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>      
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="컴포넌트-트리의-어디에서나-loader를-시작-중지하는-기능이-있으면-멋질-것-같아요-✨-그리고-일반적인-로더가-표시됩니다" tabindex="-1"><a class="header-anchor" href="#컴포넌트-트리의-어디에서나-loader를-시작-중지하는-기능이-있으면-멋질-것-같아요-✨-그리고-일반적인-로더가-표시됩니다" aria-hidden="true">#</a> 컴포넌트 트리의 어디에서나 Loader를 시작/중지하는 기능이 있으면 멋질 것 같아요 ✨ 그리고 일반적인 로더가 표시됩니다.</h2>
<p>그래서 우리의 일반적인 글로벌 로더 아키텍처 구현은 이렇게 보일 거에요👇</p>
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
<p><img src="@source/docs/Tech/2024-04-23-AsimpleimplementationofaLoaderinReactusingContextAPICustomHookandTypeScript/img/AsimpleimplementationofaLoaderinReactusingContextAPICustomHookandTypeScript_3.png" alt="example_image"></p>
<h1 id="이걸-코드로-만들어봅시다" tabindex="-1"><a class="header-anchor" href="#이걸-코드로-만들어봅시다" aria-hidden="true">#</a> 이걸 코드로 만들어봅시다 &lt;/&gt;</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//LoaderProvider.ts</span>

<span class="token keyword">export</span> type LoaderContextProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">isLoading</span><span class="token operator">:</span> boolean
  <span class="token function-variable function">start</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
  <span class="token function-variable function">stop</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> LoaderContext <span class="token operator">=</span> createContext<span class="token operator">&lt;</span>LoaderContextProps<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> LoaderContextProps<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//LoaderProvider.ts</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">LoaderProvider</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> ReactNode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loaderText<span class="token punctuation">,</span> setLoaderText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token punctuation">(</span>loaderText <span class="token operator">=</span> <span class="token string">'Loader...'</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setLoaderText</span><span class="token punctuation">(</span>loaderText<span class="token punctuation">)</span>
    <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">stop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>LoaderContext<span class="token punctuation">.</span>Provider
      value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        isLoading<span class="token punctuation">,</span>
        start<span class="token punctuation">,</span>
        stop<span class="token punctuation">,</span>
        loaderText
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>LoaderContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 문맥에서 제공된 정보는 다음과 같습니다:</p>
<ul>
<li>isLoading → (로딩 상태를 트리거하는 상태입니다)</li>
<li>start → (로더 텍스트를 선택적으로 사용하는 함수이며 setIsLoading을 true로 설정합니다)</li>
<li>stop → (setIsLoading을 true로 설정하는 함수입니다)</li>
<li>loaderText → (로더 텍스트를 저장하는 상태입니다)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//LoaderProvider.ts</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useLoader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> loaderContext <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>LoaderContext<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>loaderContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'LoaderProvider의 컨텍스트 내에서 useLoader를 사용해주세요'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> loaderContext<span class="token punctuation">.</span>start<span class="token punctuation">,</span>
    <span class="token literal-property property">stop</span><span class="token operator">:</span> loaderContext<span class="token punctuation">.</span>stop
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//Loader.tsx</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LoaderContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/LoaderProvider.tsx'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Loader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> isLoading<span class="token punctuation">,</span> loaderText <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>LoaderContext<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token punctuation">{</span>isLoading <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"h-full w-full fixed top-0 left-0 bg-black/20 z-[99999]"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 flex flex-col items-center gap-4"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"loading loading-spinner loading-lg text-primary"</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"text"</span><span class="token operator">></span><span class="token punctuation">{</span>loaderText<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Employees.tsx</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/LoaderProvider.tsx'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Employee <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/constants/employees.ts'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fetchEmployees <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/employees.ts'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">EmployeesList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>employees<span class="token punctuation">,</span> setEmployees<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>Array<span class="token operator">&lt;</span>Employee<span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token function">useLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getEmployees</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      loader<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> employees <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchEmployees</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">setEmployees</span><span class="token punctuation">(</span>employees<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'직원 목록을 불러올 수 없습니다!'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      loader<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">getEmployees</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>employees<span class="token operator">?.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"text-3xl font-bold mb-4"</span><span class="token operator">></span>Employees<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"btn btn-primary btn-sm"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>getEmployees<span class="token punctuation">}</span><span class="token operator">></span>
        다시 불러오기
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"overflow-x-auto mt-8"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>table className<span class="token operator">=</span><span class="token string">"table w-full"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>thead<span class="token operator">></span>
            <span class="token operator">&lt;</span>tr<span class="token operator">></span>
              <span class="token operator">&lt;</span>th<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
              <span class="token operator">&lt;</span>th<span class="token operator">></span>이름<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
              <span class="token operator">&lt;</span>th<span class="token operator">></span>이메일<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
              <span class="token operator">&lt;</span>th<span class="token operator">></span>전화번호<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>thead<span class="token operator">></span>
          <span class="token operator">&lt;</span>tbody<span class="token operator">></span>
            <span class="token punctuation">{</span>employees<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">employee<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>tr key<span class="token operator">=</span><span class="token punctuation">{</span>employee<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>th<span class="token operator">></span><span class="token punctuation">{</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
                <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>employee<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
                <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>employee<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
                <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>employee<span class="token punctuation">.</span>phone<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>tbody<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>table<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="와-라-🌟-이제-어디에서든-로더-상태를-가지고-와서-컴포넌트에-추가로-로딩-상태를-필요로-하지-않아도-됩니다" tabindex="-1"><a class="header-anchor" href="#와-라-🌟-이제-어디에서든-로더-상태를-가지고-와서-컴포넌트에-추가로-로딩-상태를-필요로-하지-않아도-됩니다" aria-hidden="true">#</a> 와-라 🌟, 이제 어디에서든 로더 상태를 가지고 와서 컴포넌트에 추가로 로딩 상태를 필요로 하지 않아도 됩니다</h2>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*ujILWeq1n9REvDZeyPemAg.gif" />
<h2 id="하지만-이-구현에-문제가-있습니다-😢" tabindex="-1"><a class="header-anchor" href="#하지만-이-구현에-문제가-있습니다-😢" aria-hidden="true">#</a> 하지만 이 구현에 문제가 있습니다 😢```</h2>
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
<p>컨텍스트에는 단일 로딩 상태가 있습니다. 여러 컴포넌트가 이 로더 텍스트를 토글할 것입니다.</p>
<p>requestA라는 요청은 실행에 300ms가 소요되고,
동시에 requestB라는 다른 요청은 실행에 200ms가 소요됩니다.</p>
<p>두 요청이 모두 실행을 시작할 때 loader.start()를 호출하면 로더는 동시에 시작되지만,
requestB의 실행이 끝나는 시점에 로더도 중지됩니다. 이때 requestA는 아직 실행 중인 상태입니다.</p>
<p>따라서 requestA의 실행 시간 동안 스피너가 계속 표시되지 않을 것입니다.</p>
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
<img src="@source/docs/Tech/2024-04-23-AsimpleimplementationofaLoaderinReactusingContextAPICustomHookandTypeScript/img/AsimpleimplementationofaLoaderinReactusingContextAPICustomHookandTypeScript_5.png" />
<h2 id="솔루션-🌟" tabindex="-1"><a class="header-anchor" href="#솔루션-🌟" aria-hidden="true">#</a> 솔루션 🌟</h2>
<p>로더 스택을 소개할 거에요. loader.start()는 스택에 값을 삽입하고, loader.stop()은 스택에서 값을 삭제할 거에요.</p>
<ul>
<li>따라서 스택이 비어있지 않다면 isLoading의 값은 true가 될 거에요.</li>
<li>그리고 스택이 비어있다면 isLoading의 값은 false가 될 거에요.</li>
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
<p><img src="@source/docs/Tech/2024-04-23-AsimpleimplementationofaLoaderinReactusingContextAPICustomHookandTypeScript/img/AsimpleimplementationofaLoaderinReactusingContextAPICustomHookandTypeScript_6.png" alt="이미지"></p>
<p>이제 ContextProvider에서 구현을 변경해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// LoaderProvider.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createContext<span class="token punctuation">,</span> ReactNode<span class="token punctuation">,</span> useContext<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> type LoaderContextProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">isLoading</span><span class="token operator">:</span> boolean
  <span class="token literal-property property">loaderText</span><span class="token operator">:</span> string
  <span class="token function-variable function">start</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">loaderText<span class="token operator">?</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
  <span class="token function-variable function">stop</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> LoaderContext <span class="token operator">=</span> createContext<span class="token operator">&lt;</span>LoaderContextProps<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> LoaderContextProps<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">LoaderProvider</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> ReactNode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loaderText<span class="token punctuation">,</span> setLoaderText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loaderStack<span class="token punctuation">,</span> setLoaderStack<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>Array<span class="token operator">&lt;</span>boolean<span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token punctuation">(</span>loaderText <span class="token operator">=</span> <span class="token string">'Loader...'</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setLoaderText</span><span class="token punctuation">(</span>loaderText<span class="token punctuation">)</span>
    <span class="token function">setLoaderStack</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>loaderStack<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">stop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setLoaderStack</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>loaderStack<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>loaderStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>loaderStack<span class="token punctuation">,</span> start<span class="token punctuation">,</span> stop<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>LoaderContext<span class="token punctuation">.</span>Provider
      value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        isLoading<span class="token punctuation">,</span>
        start<span class="token punctuation">,</span>
        stop<span class="token punctuation">,</span>
        loaderText
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>LoaderContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useLoader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> loaderContext <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>LoaderContext<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>loaderContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'LoaderProvider 컨텍스트 내에서 useLoader를 사용해주세요.'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> loaderContext<span class="token punctuation">.</span>start<span class="token punctuation">,</span>
    <span class="token literal-property property">stop</span><span class="token operator">:</span> loaderContext<span class="token punctuation">.</span>stop
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h1>
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
<p>웹 개발자들의 꿈은 확장 가능하고 사용하기 쉬운 컴포넌트를 만드는 것입니다. 여러분의 프로젝트에서 자유롭게 사용하고 조정해보세요. 행복한 코딩을 기억해주세요, React 개발자 여러분! 😎✨</p>
<h1 id="피드백-✉️" tabindex="-1"><a class="header-anchor" href="#피드백-✉️" aria-hidden="true">#</a> 피드백 ✉️</h1>
<p>만약 이에 대한 제안이 있으시다면 알려주세요. 이 저장소에서 포크하여 자유롭게 변경하셔도 됩니다.</p>
</div></template>
