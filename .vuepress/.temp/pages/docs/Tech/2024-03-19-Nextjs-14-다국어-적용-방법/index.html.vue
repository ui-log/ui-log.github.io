<template><div><h1 id="nextjs-14-다국어-적용-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-다국어-적용-방법" aria-hidden="true">#</a> Nextjs 14 다국어 적용 방법</h1>
<h1 id="국제화" tabindex="-1"><a class="header-anchor" href="#국제화" aria-hidden="true">#</a> 국제화</h1>
<p>Next.js를 사용하면 라우팅 및 콘텐츠 렌더링을 구성하여 여러 언어를 지원할 수 있습니다. 사이트를 다양한 로캘에 적응시키는 것은 번역된 콘텐츠(로컬라이제이션) 및 국제화된 라우트를 포함합니다.</p>
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
<h2 id="용어" tabindex="-1"><a class="header-anchor" href="#용어" aria-hidden="true">#</a> 용어</h2>
<ul>
<li>로캘: 언어 및 형식 지정 환경의 식별자입니다. 일반적으로 사용자의 기본 언어 및 지역 설정을 포함합니다.
<ul>
<li>en-US: 미국에서 사용되는 영어</li>
<li>nl-NL: 네덜란드에서 사용되는 네덜란드어</li>
<li>nl: 지정된 지역이 없는 네덜란드어</li>
</ul>
</li>
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
<h2 id="라우팅-개요" tabindex="-1"><a class="header-anchor" href="#라우팅-개요" aria-hidden="true">#</a> 라우팅 개요</h2>
<p>브라우저에서 사용자의 언어 환경 설정을 사용하여 어떤 로캘을 사용할지 선택하는 것이 좋습니다. 기본 언어를 변경하면 응용 프로그램에 들어오는 Accept-Language 헤더가 수정됩니다.</p>
<p>다음 라이브러리를 사용하면 다음과 같은 요청을 확인하여 로캘을 선택할 수 있습니다. 헤더, 지원할 로캘 및 기본 로캘에 따라 다릅니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> match <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@formatjs/intl-localematcher"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Negotiator <span class="token keyword">from</span> <span class="token string">"negotiator"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">"accept-language"</span><span class="token operator">:</span> <span class="token string">"en-US,en;q=0.5"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> languages <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Negotiator</span><span class="token punctuation">(</span><span class="token punctuation">{</span> headers <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">languages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> locales <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"en-US"</span><span class="token punctuation">,</span> <span class="token string">"nl-NL"</span><span class="token punctuation">,</span> <span class="token string">"nl"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> defaultLocale <span class="token operator">=</span> <span class="token string">"en-US"</span><span class="token punctuation">;</span>

<span class="token function">match</span><span class="token punctuation">(</span>languages<span class="token punctuation">,</span> locales<span class="token punctuation">,</span> defaultLocale<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> 'en-US'</span>
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
<p>라우팅은 하위 경로 (/fr/products) 또는 도메인 (my-site.fr/products)으로 국제화될 수 있습니다. 이 정보를 바탕으로 미들웨어 내에서 로캘을 기반으로 사용자를 리디렉션할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> locales <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'en-US'</span><span class="token punctuation">,</span> <span class="token string">'nl-NL'</span><span class="token punctuation">,</span> <span class="token string">'nl'</span><span class="token punctuation">]</span>

<span class="token comment">// 선호하는 로캘 가져오기, 위의 방법과 유사하거나 라이브러리 사용</span>
<span class="token keyword">function</span> <span class="token function">getLocale</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 경로명에 지원되는 로캘이 있는지 확인</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> request<span class="token punctuation">.</span>nextUrl
  <span class="token keyword">const</span> pathnameHasLocale <span class="token operator">=</span> locales<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">locale</span><span class="token punctuation">)</span> <span class="token operator">=></span> pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>locale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span> <span class="token operator">||</span> pathname <span class="token operator">===</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>locale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>pathnameHasLocale<span class="token punctuation">)</span> <span class="token keyword">return</span>

  <span class="token comment">// 로캘이 없는 경우 리디렉션</span>
  <span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token function">getLocale</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>
  request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>locale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pathname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token comment">// 예: 들어오는 요청이 /products인 경우</span>
  <span class="token comment">// 새 URL은 이제 /en-US/products입니다.</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 모든 내부 경로 (_next) 건너뛰기</span>
    <span class="token string">'/((?!_next).*)'</span><span class="token punctuation">,</span>
    <span class="token comment">// 선택 사항: 루트 (/) URL에서만 실행</span>
    <span class="token comment">// '/'</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>마지막으로, app/ 내의 모든 특수 파일이 app/[lang] 아래에 중첩되도록 확인하십시오. 이렇게 하면 Next.js 라우터가 경로의 다른 로캘을 동적으로 처리하고 모든 레이아웃과 페이지로 lang 매개변수를 전달할 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 현재 로캘에 액세스할 수 있습니다</span>
<span class="token comment">// 예: /en-US/products -> `lang`은 "en-US"입니다</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> lang <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">...</span>
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
루트 레이아웃도 새 폴더에 중첩될 수 있습니다 (예: app/[lang]/layout.js).
<h2 id="로컬라이제이션" tabindex="-1"><a class="header-anchor" href="#로컬라이제이션" aria-hidden="true">#</a> 로컬라이제이션</h2>
<p>사용자의 기본 로캘에 따라 표시되는 콘텐츠를 변경하는 로컬라이제이션은 Next.js에만 특정되지 않습니다. 아래 설명된 패턴은 모든 웹 애플리케이션에서 동일하게 작동합니다.</p>
<p>예를 들어, 애플리케이션 내에서 영어 및 네덜란드어 콘텐츠를 지원하고자 한다고 가정해 봅시다. 키에서 로컬라이즈된 문자열로의 매핑을 제공하는 두 가지 다른 &quot;사전&quot;을 유지할 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"products"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"cart"</span><span class="token operator">:</span> <span class="token string">"Add to Cart"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"products"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"cart"</span><span class="token operator">:</span> <span class="token string">"Toevoegen aan Winkelwagen"</span>
  <span class="token punctuation">}</span>
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
<p>그런 다음 요청된 로캘에 대한 번역을로드하는 getDictionary 함수를 만들 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'server-only'</span>

<span class="token keyword">const</span> dictionaries <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">en</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./dictionaries/en.json'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token operator">=></span> module<span class="token punctuation">.</span>default<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">nl</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./dictionaries/nl.json'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span>

 <span class="token operator">=></span> module<span class="token punctuation">.</span>default<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getDictionary</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">locale</span><span class="token punctuation">)</span> <span class="token operator">=></span> dictionaries<span class="token punctuation">[</span>locale<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
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
<p>현재 선택된 언어를 고려하여 레이아웃이나 페이지 내에서 사전을 가져올 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDictionary <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./dictionaries"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> lang <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dict <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getDictionary</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// en</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token punctuation">{</span>dict<span class="token punctuation">.</span>products<span class="token punctuation">.</span>cart<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// Add to Cart</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>app/ 디렉토리의 모든 레이아웃 및 페이지가 기본적으로 서버 컴포넌트이기 때문에 번역 파일의 크기가 클라이언트 측 JavaScript 번들 크기에 영향을 주지 않습니다. 이 코드는 서버에서만 실행되며 결과 HTML 만 브라우저로 전송됩니다.</p>
<h2 id="정적-생성" tabindex="-1"><a class="header-anchor" href="#정적-생성" aria-hidden="true">#</a> 정적 생성</h2>
<p>특정 로캘 집합에 대한 정적 라우트를 생성하려면 페이지나 레이아웃에서 generateStaticParams를 사용할 수 있습니다. 이것은 전역적일 수 있으며, 예를 들어 루트 레이아웃에서:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateStaticParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">"en-US"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">"de"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Root</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token punctuation">{</span>params<span class="token punctuation">.</span>lang<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="리소스" tabindex="-1"><a class="header-anchor" href="#리소스" aria-hidden="true">#</a> 리소스</h2>
<ul>
<li>최소한의 i18n 라우팅 및 번역</li>
<li>next-intl</li>
<li>next-international</li>
<li>next-i18n-router</li>
</ul>
</div></template>
