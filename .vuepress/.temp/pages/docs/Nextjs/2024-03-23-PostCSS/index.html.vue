<template><div><h1 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> PostCSS</h1>
<h2 id="기본-동작" tabindex="-1"><a class="header-anchor" href="#기본-동작" aria-hidden="true">#</a> 기본 동작</h2>
<p>Next.js는 내장 CSS 지원을 위해 PostCSS를 사용하여 CSS를 컴파일합니다.</p>
<p>구성 없이 사용하면 Next.js가 다음 변환을 적용하여 CSS를 컴파일합니다:</p>
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
<li>Autoprefixer는 CSS 규칙에 벤더 접두사를 자동으로 추가해줘서 IE11에서 작동합니다.</li>
<li>크로스 브라우저 Flexbox 버그가 규격대로 동작하도록 수정됩니다.</li>
<li>새로운 CSS 기능은 Internet Explorer 11 호환성을 위해 자동으로 컴파일됩니다:
<ul>
<li>모든 속성</li>
<li>Break 속성</li>
<li>font-variant 속성</li>
<li>갭 속성</li>
<li>미디어 쿼리 범위</li>
</ul>
</li>
<li>기본적으로 CSS 그리드와 사용자 정의 속성(CSS 변수)은 IE11 지원을 위해 컴파일되지 않습니다.</li>
</ul>
<p>CSS 그리드 레이아웃을 IE11을 위해 컴파일하려면 CSS 파일 상단에 다음 주석을 추가하면 됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* autoprefixer grid: autoplace */</span>
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
<p>CSS 그리드 레이아웃의 IE11 지원을 전체 프로젝트에서 사용하려면 아래 구성을 사용하여 autoprefixer를 구성할 수도 있습니다. 자세한 내용은 아래의 &quot;플러그인 사용자 정의&quot;를 참조하세요.</p>
<p>CSS 변수는 안전하게 컴파일하기 어렵기 때문에 컴파일되지 않습니다. 변수를 사용해야 하는 경우 Sass 변수와 같은 것을 사용해보세요. 이러한 변수는 Sass에 의해 제거됩니다.</p>
<h2 id="대상-브라우저-사용자-정의" tabindex="-1"><a class="header-anchor" href="#대상-브라우저-사용자-정의" aria-hidden="true">#</a> 대상 브라우저 사용자 정의</h2>
<p>Next.js를 통해 Autoprefixer 및 컴파일된 CSS 기능의 대상 브라우저(Browserslist를 통해)를 구성할 수 있습니다.</p>
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
<p>브라우저 목록을 사용자 정의하려면 package.json 파일에 다음과 같이 browserslist 키를 만들어 주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"browserslist"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">">0.3%"</span><span class="token punctuation">,</span> <span class="token string">"not dead"</span><span class="token punctuation">,</span> <span class="token string">"not op_mini all"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>browsersl.ist 도구를 사용하여 대상 브라우저를 시각화할 수 있어요.</p>
<h2 id="css-모듈" tabindex="-1"><a class="header-anchor" href="#css-모듈" aria-hidden="true">#</a> CSS 모듈</h2>
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
<p>CSS 모듈을 지원하기 위해 구성을 변경할 필요가 없습니다. 파일에 CSS 모듈을 활성화하려면 파일의 확장자를 .module.css로 바꿉니다.</p>
<p>더 많은 정보를 알아보려면 Next.js의 CSS 모듈 지원 페이지를 참조하세요.</p>
<h2 id="플러그인-사용자-정의" tabindex="-1"><a class="header-anchor" href="#플러그인-사용자-정의" aria-hidden="true">#</a> 플러그인 사용자 정의</h2>
<blockquote>
<p>경고: 사용자 정의 PostCSS 구성 파일을 정의하면 Next.js에서 기본 동작을 완전히 비활성화합니다. 자동 접두어와 같은 필요한 기능을 수동으로 구성해야 합니다.
사용자 지정 구성에 포함된 플러그인은 수동으로 설치해야 합니다. 예: npm install postcss-flexbugs-fixes postcss-preset-env.</p>
</blockquote>
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
<p>PostCSS 설정을 사용자 정의하려면 프로젝트의 루트에 postcss.config.json 파일을 생성하세요.</p>
<p>다음은 Next.js에서 사용하는 기본 구성입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"postcss-flexbugs-fixes"</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">"postcss-preset-env"</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">"autoprefixer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"flexbox"</span><span class="token operator">:</span> <span class="token string">"no-2009"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">"stage"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token string-property property">"features"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"custom-properties"</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아 두면 좋은 사항: Next.js는 파일의 이름을 .postcssrc.json으로 지정하거나 package.json의 postcss 키에서 읽을 수도 있습니다.</p>
</blockquote>
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
<p>PostCSS를 postcss.config.js 파일로 구성하는 것도 가능합니다. 이 방법은 환경에 따라 플러그인을 조건부로 포함하고 싶을 때 유용합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">"production"</span>
      <span class="token operator">?</span> <span class="token punctuation">[</span>
          <span class="token string">"postcss-flexbugs-fixes"</span><span class="token punctuation">,</span>
          <span class="token punctuation">[</span>
            <span class="token string">"postcss-preset-env"</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">flexbox</span><span class="token operator">:</span> <span class="token string">"no-2009"</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">stage</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
              <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">"custom-properties"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 개발 환경에서는 변환이 없음</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고: Next.js에서 .postcssrc.js 파일명을 사용할 수도 있습니다.</p>
</blockquote>
<p>PostCSS 플러그인을 가져오기 위해 require()을 사용하지 말아야 합니다. 플러그인은 문자열로 제공되어야 합니다.</p>
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
<blockquote>
<p>알아 두면 좋은 정보: 만약 postcss.config.js가 동일한 프로젝트에서 Next.js 이외의 다른 도구를 지원해야 한다면, 상호 운용 가능한 객체 기반 형식을 사용해야 합니다:</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"postcss-flexbugs-fixes"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"postcss-preset-env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">flexbox</span><span class="token operator">:</span> <span class="token string">"no-2009"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">stage</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"custom-properties"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
