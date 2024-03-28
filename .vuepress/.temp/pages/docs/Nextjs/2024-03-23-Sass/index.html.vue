<template><div><h1 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> Sass</h1>
<p>Next.js는 .scss 및 .sass 확장자를 사용하여 sass를 통합하는 내장 지원 기능을 제공합니다. .module.scss 또는 .module.sass 확장자로 CSS Modules를 사용하여 구성 요소 수준의 Sass를 사용할 수 있습니다.</p>
<p>먼저 sass를 설치하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev sass
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
<blockquote>
<p>알면 좋은 사실:
Sass는 두 가지 다른 구문을 지원합니다. 각각에 대해 확장 기능이 있습니다. .scss 확장자는 SCSS 구문을 사용해야 하며, .sass 확장자는 Indented Syntax (&quot;Sass&quot;)를 사용해야 합니다.
어떤 것을 선택할지 확신이 없다면, CSS의 상위집합인 .scss 확장자를 시작으로 선택하고, Indented Syntax (&quot;Sass&quot;)를 배울 필요가 없습니다.</p>
</blockquote>
<h3 id="sass-옵션-사용자-정의" tabindex="-1"><a class="header-anchor" href="#sass-옵션-사용자-정의" aria-hidden="true">#</a> Sass 옵션 사용자 정의</h3>
<p>만약 Sass 컴파일러를 구성하려면, next.config.js에서 sassOptions를 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">sassOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">includePaths</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"styles"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="sass-변수" tabindex="-1"><a class="header-anchor" href="#sass-변수" aria-hidden="true">#</a> Sass 변수</h3>
<p>Next.js에서는 CSS 모듈 파일에서 내보낸 Sass 변수를 지원합니다.</p>
<p>예를 들어, 내보낸 primaryColor Sass 변수를 사용하려면:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$primary<span class="token operator">-</span>color<span class="token operator">:</span> #64ff00<span class="token punctuation">;</span>

<span class="token operator">:</span><span class="token keyword">export</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">primaryColor</span><span class="token operator">:</span> $primary<span class="token operator">-</span>color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> variables <span class="token keyword">from</span> <span class="token string">"../styles/variables.module.scss"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout color<span class="token operator">=</span><span class="token punctuation">{</span>variables<span class="token punctuation">.</span>primaryColor<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
</div></template>
