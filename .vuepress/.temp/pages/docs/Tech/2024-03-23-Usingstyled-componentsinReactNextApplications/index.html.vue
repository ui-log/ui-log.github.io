<template><div><h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>React 애플리케이션을 CSS-in-JS 방식으로 스타일링할 때, styled-components는 최고의 선택지로 두드러지게 나타납니다. 이 글에서는 styled-components를 Next 애플리케이션에서 어떻게 활용하는지 안내해 드리겠습니다. 기본적으로 Next는 styled-jsx를 통해 css-in-js를 사용할 수 있는 방법을 제공합니다. 그러나 styled-jsx를 사용하는 것이 CSS를 JSX 내부에 작성해야 하기 때문에 번거로울 수 있다면, styled-components가 적합할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-03-23-Usingstyled-componentsinReactNextApplications/img/Using-styled-components-in-React-Next-Applications_0.png" alt="사진"></p>
<h1 id="styled-components-설치" tabindex="-1"><a class="header-anchor" href="#styled-components-설치" aria-hidden="true">#</a> styled-components 설치</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install styled<span class="token operator">-</span>components
<span class="token comment">// 또는</span>
yarn add styled<span class="token operator">-</span>components
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예시 사용법:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">'styled-components'</span>

<span class="token keyword">const</span> Wrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  color: red;
  text-align: center;
</span><span class="token template-punctuation string">`</span></span>

<span class="token comment">// 입력 매개변수를 가진 컴포넌트</span>
<span class="token keyword">const</span> Wrapper2 <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token operator">&lt;</span><span class="token punctuation">{</span>$color<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">}</span><span class="token operator">></span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token parameter">props</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>$color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
  text-align: center;
</span><span class="token template-punctuation string">`</span></span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Wrapper<span class="token operator">></span>데모 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>Wrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Wrapper2 $color<span class="token operator">=</span><span class="token string">"green"</span><span class="token operator">></span>데모 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>Wrapper2<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="테마-설정-추가하기" tabindex="-1"><a class="header-anchor" href="#테마-설정-추가하기" aria-hidden="true">#</a> 테마 설정 추가하기</h1>
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
<p>ThemeProvider를 사용하여 전체 애플리케이션에 테마를 가져오고 React context를 사용하는 것과 비슷한 방식으로 어디서든 액세스할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useContext<span class="token punctuation">,</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span> ThemeContext<span class="token punctuation">,</span> ThemeProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Wrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  color: red;
  text-align: center;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Wrapper2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">color</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
  text-align: center;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">"#0070f3"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> themeContext <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 테마 컨텍스트 가져오기</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"themeContext"</span><span class="token punctuation">,</span> themeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Wrapper<span class="token operator">></span>데모 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>Wrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Wrapper2 $color<span class="token operator">=</span><span class="token punctuation">{</span>themeContext<span class="token operator">?.</span>colors<span class="token punctuation">.</span>primary<span class="token punctuation">}</span><span class="token operator">></span>데모 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>Wrapper2<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Display <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="next-애플리케이션에서-사용하는-방법" tabindex="-1"><a class="header-anchor" href="#next-애플리케이션에서-사용하는-방법" aria-hidden="true">#</a> Next 애플리케이션에서 사용하는 방법</h2>
<p>만약 Next 애플리케이션에서 사용하고 싶다면, app/layout.tsx 파일에 다음 코드 스니펫을 추가하여 모든 페이지의 레이아웃을 설정하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이후 각 페이지에서는 테마 컨텍스트를 다음과 같이 가져올 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useContext<span class="token punctuation">,</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span> ThemeContext<span class="token punctuation">,</span> ThemeProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> themeContext <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 테마 컨텍스트 가져오기</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Wrapper<span class="token operator">></span>데모 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>Wrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Wrapper2 $color<span class="token operator">=</span><span class="token punctuation">{</span>themeContext<span class="token operator">?.</span>colors<span class="token punctuation">.</span>primary<span class="token punctuation">}</span><span class="token operator">></span>데모 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>Wrapper2<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>그래서 우리는 React/Next에서 styled-components를 성공적으로 설정했습니다. 사용 예제와 ThemeProvider를 사용하여 구성하는 방법을 제공했습니다. 이 기사가 도움이 되기를 바랍니다.</p>
<p>의견을 남기는 데 주저하지 마세요. 앞으로 더 많은 통찰력 있는 콘텐츠를 위해 좋아요, 공유 및 팔로우를 기억해 주세요!</p>
<p>이 콘텐츠가 도움이 되었다면, 블로그에서 원문 기사를 방문해 저자를 지원하고 더 많은 흥미로운 콘텐츠를 탐색해보세요.</p>
</div></template>
