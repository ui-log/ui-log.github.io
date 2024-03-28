<template><div><h1 id="css-모듈" tabindex="-1"><a class="header-anchor" href="#css-모듈" aria-hidden="true">#</a> CSS 모듈</h1>
<p>Next.js는 .module.css 확장자를 사용하여 CSS 모듈을 내장 지원합니다.</p>
<p>CSS 모듈은 자동으로 고유한 클래스 이름을 생성하여 CSS를 지역적으로 스코프화합니다. 이는 충돌을 걱정하지 않고 서로 다른 파일에서 동일한 클래스 이름을 사용할 수 있도록 합니다. 이 행동은 CSS 모듈을 컴포넌트 수준 CSS를 포함하는 이상적인 방법으로 만듭니다.</p>
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
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
<p>예를 들어, components/ 폴더에 재사용 가능한 Button 컴포넌트가 있다고 가정해보세요:</p>
<p>먼저, 다음 내용으로 components/Button.module.css 파일을 생성하세요:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/*
.error {}가 다른 `.css` 또는 `.module.css` 파일과 충돌할 걱정은 없습니다!
*/</span>
<span class="token selector">.error</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, 위 CSS 파일을 import하여 사용하는 components/Button.js 파일을 생성하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">"./Button.module.css"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button
      type<span class="token operator">=</span><span class="token string">"button"</span>
      <span class="token comment">// "error" 클래스가 가져온 `styles` 객체의 속성으로 접근되는 방법을 주의하세요.</span>
      className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>error<span class="token punctuation">}</span>
    <span class="token operator">></span>
      파괴하기
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS 모듈은 선택적인 기능이며, <code v-pre>.module.css</code> 확장자를 가진 파일에서만 활성화됩니다. 일반 <code v-pre>link</code> 스타일시트와 글로벌 CSS 파일은 여전히 지원됩니다.</p>
<p>생산 환경에서는 모든 CSS 모듈 파일이 자동으로 많은 압축된 상태로 결합되어 많은 <code v-pre>.css</code> 파일로 분할됩니다. 이 <code v-pre>.css</code> 파일들은 애플리케이션의 핫 실행 경로를 나타내며, 애플리케이션이 렌더링되기 위해 로드되는 CSS 양을 최소화합니다.</p>
<h2 id="글로벌-스타일들" tabindex="-1"><a class="header-anchor" href="#글로벌-스타일들" aria-hidden="true">#</a> 글로벌 스타일들</h2>
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
<p>애플리케이션에 스타일시트를 추가하려면 pages/_app.js 내에서 CSS 파일을 가져와야 합니다.</p>
<p>예를 들어, 다음과 같이 styles.css라는 스타일시트를 고려해 보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'SF Pro Text'</span><span class="token punctuation">,</span> <span class="token string">'SF Pro Icons'</span><span class="token punctuation">,</span> <span class="token string">'Helvetica Neue'</span><span class="token punctuation">,</span> <span class="token string">'Helvetica'</span><span class="token punctuation">,</span><span class="token string">'Arial'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px 20px 60px<span class="token punctuation">;</span>
  max<span class="token operator">-</span>width<span class="token operator">:</span> 680px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pages/_app.js 파일을 만들어서 없다면 추가하세요. 그런 다음 styles.css 파일을 가져오세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"../styles.css"</span><span class="token punctuation">;</span>

<span class="token comment">// 이 기본 내보내기는 새로운 `pages/_app.js` 파일에서 필요합니다.</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 스타일(styles.css)은 애플리케이션의 모든 페이지와 구성 요소에 적용됩니다. 스타일시트의 전역적인 특성 및 충돌을 피하기 위해, 페이지/_app.js 내에서만 가져올 수 있습니다.</p>
<p>개발 중에 이렇게 스타일시트를 표현하는 것은 스타일을 편집하는 동안 스타일이 열심히 다시로드되어 응용 프로그램 상태를 유지할 수 있음을 의미합니다.</p>
<p>프로덕션에서 모든 CSS 파일은 자동으로 하나의 압축된 .css 파일로 연결됩니다. CSS를 연결하는 순서는 CSS가 _app.js 파일에 가져올 때의 순서와 일치합니다. 자체 CSS를 포함하는 가져온 JS 모듈에 특별히 주의를 기울일 필요가 있습니다; JS 모듈의 CSS는 가져온 CSS 파일과 동일한 순서 규칙에 따라 연결됩니다. 예를 들어:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"../styles.css"</span><span class="token punctuation">;</span>
<span class="token comment">// ErrorBoundary에있는 CSS는 전역 CSS인 styles.css에 따라 달라지므로</span>
<span class="token comment">// styles.css를 가져온 후에 가져옵니다.</span>
<span class="token keyword">import</span> ErrorBoundary <span class="token keyword">from</span> <span class="token string">"../components/ErrorBoundary"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ErrorBoundary<span class="token operator">></span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ErrorBoundary<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="외부-스타일시트" tabindex="-1"><a class="header-anchor" href="#외부-스타일시트" aria-hidden="true">#</a> 외부 스타일시트</h2>
<p>Next.js에서는 자바스크립트 파일에서 CSS 파일을 가져올 수 있습니다. Next.js는 import 개념을 자바스크립트 이상으로 확장하였기 때문에 가능합니다.</p>
<h3 id="node-modules에서-스타일-가져오기" tabindex="-1"><a class="header-anchor" href="#node-modules에서-스타일-가져오기" aria-hidden="true">#</a> node_modules에서 스타일 가져오기</h3>
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
<p>Next.js 9.5.4 버전부터는 CSS 파일을 node_modules에서 어디서든 import할 수 있습니다.</p>
<p>부트스트랩이나 nprogress와 같은 전역 스타일시트를 사용하는 경우 pages/_app.js 파일 내에서 해당 파일을 import해야 합니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"bootstrap/dist/css/bootstrap.css"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>서드파티 컴포넌트에서 필요한 CSS를 import하려면 해당 컴포넌트에서 직접 처리할 수 있습니다. 예를 들어:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reach/dialog"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VisuallyHidden <span class="token keyword">from</span> <span class="token string">"@reach/visually-hidden"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"@reach/dialog/styles.css"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ExampleDialog</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showDialog<span class="token punctuation">,</span> setShowDialog<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setShowDialog</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">close</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setShowDialog</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>open<span class="token punctuation">}</span><span class="token operator">></span>대화 상자 열기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dialog isOpen<span class="token operator">=</span><span class="token punctuation">{</span>showDialog<span class="token punctuation">}</span> onDismiss<span class="token operator">=</span><span class="token punctuation">{</span>close<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"close-button"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>close<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>VisuallyHidden<span class="token operator">></span>닫기<span class="token operator">&lt;</span><span class="token operator">/</span>VisuallyHidden<span class="token operator">></span>
          <span class="token operator">&lt;</span>span aria<span class="token operator">-</span>hidden<span class="token operator">></span>×<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>안녕하세요<span class="token punctuation">.</span> 저는 대화 상자입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dialog<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="추가-기능" tabindex="-1"><a class="header-anchor" href="#추가-기능" aria-hidden="true">#</a> 추가 기능</h2>
<p>Next.js에는 스타일을 추가하는 작성 경험을 향상시키는 추가 기능이 포함되어 있습니다:</p>
<ul>
<li>next dev로 로컬로 실행할 때, 로컬 스타일시트(글로벌 또는 CSS 모듈)는 Fast Refresh를 활용하여 편집을 저장할 때 즉시 변경 사항을 반영합니다.</li>
<li>next build로 프로덕션 빌드할 때, CSS 파일은 미니파이된 .css 파일로 번들링되어 네트워크 요청 수를 줄이기 위해 더 적은 수의 파일로 묶입니다.</li>
<li>JavaScript를 비활성화하면 스타일은 여전히 프로덕션 빌드(next start)에서 로드됩니다. 그러나 Fast Refresh를 활성화하려면 JavaScript가 next dev에 필요합니다.</li>
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
</div></template>
