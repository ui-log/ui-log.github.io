<template><div><h1 id="터보-실험-중" tabindex="-1"><a class="header-anchor" href="#터보-실험-중" aria-hidden="true">#</a> 터보 (실험 중)</h1>
<p>터보팩은 다양한 파일을 변환하고 모듈 해결 방법을 변경하기 위해 사용자 정의할 수 있습니다.</p>
<blockquote>
<p>참고 사항:
이러한 기능은 실험 중이며 다음 --turbo로만 작동합니다.
Next.js용 터보팩에는 내장된 기능을 위한 로더나 로더 구성이 필요하지 않습니다. 터보팩은 CSS 및 현대적인 JavaScript를 컴파일하는 기능을 내장하고 있으므로 @babel/preset-env를 사용하는 경우 css-loader, postcss-loader 또는 babel-loader가 필요하지 않습니다.</p>
</blockquote>
<h2 id="웹팩-로더" tabindex="-1"><a class="header-anchor" href="#웹팩-로더" aria-hidden="true">#</a> 웹팩 로더</h2>
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
<p>만약 내장되어 있는 것 이상의 로더 지원이 필요하다면, 많은 웹팩 로더들이 이미 Turbopack과 호환된다. 현재 몇 가지 제한사항이 있습니다:</p>
<ul>
<li>웹팩 로더 API의 핵심 하위 집합만 구현되어 있습니다. 현재는 일부 인기 있는 로더를 다룰 수 있을 만큼 충분한 지원이 있으며, 앞으로 API 지원을 확대할 것입니다.</li>
<li>JavaScript 코드를 반환하는 로더만 지원됩니다. 스타일시트나 이미지와 같은 파일을 변환하는 로더는 현재 지원되지 않습니다.</li>
<li>webpack 로더에 전달되는 옵션은 일반 JavaScript 기본형, 객체, 배열이어야 합니다. 예를 들어 require()된 플러그인 모듈을 옵션 값으로 전달하는 것은 불가능합니다.</li>
</ul>
<p>로더를 구성하려면, 설치한 로더의 이름과 next.config.js에 로더의 파일 확장자를 로더 목록에 매핑하여 옵션을 추가하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">turbo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 옵션 형식</span>
        <span class="token string-property property">"*.md"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"@mdx-js/loader"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">"md"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 옵션이 없는 형식</span>
        <span class="token string-property property">"*.mdx"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@mdx-js/loader"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>위의 구성을 사용하면 앱에서 변환된 코드를 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> MyDoc <span class="token keyword">from</span> <span class="token string">"./my-doc.mdx"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>MyDoc <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 사항: Next.js 버전 13.4.4 이전에는 experimental.turbo.rules가 experimental.turbo.loaders로 이름이 지어졌으며 *.mdx 대신 .mdx와 같은 파일 확장자만 허용했습니다.</p>
</blockquote>
<h3 id="지원되는-로더" tabindex="-1"><a class="header-anchor" href="#지원되는-로더" aria-hidden="true">#</a> 지원되는 로더</h3>
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
<p>다음 렌더러들은 Turbopack의 웹팩 로더 구현과 함께 작동하는 것으로 확인되었습니다:</p>
<ul>
<li>babel-loader</li>
<li>@mdx-js/loader</li>
<li>@svgr/webpack</li>
<li>svg-inline-loader</li>
<li>yaml-loader</li>
<li>string-replace-loader</li>
<li>raw-loader</li>
</ul>
<h3 id="커스텀-로더" tabindex="-1"><a class="header-anchor" href="#커스텀-로더" aria-hidden="true">#</a> 커스텀 로더</h3>
<p>외부 패키지를 가져와서 로더 옵션으로 전달해야 하는 경우, 웹팩 로더를 자체적으로 래핑하여 해당 옵션을 지정할 수 있습니다. 이는 임시적인 해결책이며 향후에는 필요하지 않을 것입니다.</p>
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
<p>이 로더는 @mdx-js/loader를 감싸고 rehypePrism rehype 플러그인을 구성합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> mdxLoader <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@mdx-js/loader"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> rehypePrism <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@mapbox/rehype-prism"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> prevGetOptions <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getOptions</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">prevGetOptions</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rehypePlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>rehypePrism<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">mdxLoader</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, Next.js를 구성하여 래퍼 로더를 로드하도록 설정하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">turbo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"*.mdx"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./my-mdx-loader"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="별칭-해결" tabindex="-1"><a class="header-anchor" href="#별칭-해결" aria-hidden="true">#</a> 별칭 해결</h2>
<p>Turbopack을 통해 모듈 해결을 수정할 수 있는 next.config.js를 통해 <code v-pre>resolve.alias</code> 구성과 유사한 방식으로 별칭을 정의할 수 있습니다.</p>
<p>별칭을 설정하려면, imported patterns을 next.config.js에서 새 목적지로 매핑하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">turbo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">resolveAlias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">underscore</span><span class="token operator">:</span> <span class="token string">"lodash"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mocha</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token string">"mocha/browser-entry.js"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 명령어는 Underscore 패키지를 Lodash 패키지로 가져오는 별칭(alias)를 설정합니다. 다시 말하면, <code v-pre>underscore</code>에서 Underscore를 가져오는 대신 Lodash 모듈을 불러올 겁니다.</p>
<p>Turbopack은 또한 Node.js의 조건부 익스포트와 유사한 방식으로 이 필드를 통해 조건부 별칭을 지원합니다. 현재는 브라우저 조건만 지원됩니다. 위의 예에서 Turbopack이 브라우저 환경을 대상으로 할 때 mocha 모듈의 가져옴을 mocha/browser-entry.js로 별칭 지정할 겁니다.</p>
<h2 id="확장자-해석" tabindex="-1"><a class="header-anchor" href="#확장자-해석" aria-hidden="true">#</a> 확장자 해석</h2>
<p>next.config.js를 통해 Turbopack을 확장자 해석을 커스터마이징하여 모듈을 해석할 수 있습니다. 이는 webpack의 resolve.extensions 구성과 유사합니다.</p>
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
<p>다음과 같이 next.config.js 파일의 resolveExtensions 필드를 사용하여 resolve 확장자(extension)를 구성할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">turbo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">resolveExtensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".mdx"</span><span class="token punctuation">,</span> <span class="token string">".tsx"</span><span class="token punctuation">,</span> <span class="token string">".ts"</span><span class="token punctuation">,</span> <span class="token string">".jsx"</span><span class="token punctuation">,</span> <span class="token string">".js"</span><span class="token punctuation">,</span> <span class="token string">".mjs"</span><span class="token punctuation">,</span> <span class="token string">".json"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 제공된 목록으로 기존의 resolve 확장자(extension)를 덮어씁니다. 기본 확장자들도 포함되어 있는지 확인해주세요.</p>
<p>Webpack에서 앱을 Turbopack으로 이관하는 방법에 대한 자세한 정보 및 지침은 webpack 호환성에 대한 Turbopack 문서를 참조하세요.</p>
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
