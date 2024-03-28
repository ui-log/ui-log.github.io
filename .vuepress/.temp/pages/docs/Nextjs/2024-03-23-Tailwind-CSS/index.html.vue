<template><div><h1 id="tailwind-css" tabindex="-1"><a class="header-anchor" href="#tailwind-css" aria-hidden="true">#</a> Tailwind CSS</h1>
<p>Tailwind CSS는 Next.js와 탁월하게 작동하는 유틸리티 기반 CSS 프레임워크입니다.</p>
<h2 id="tailwind-설치하기" tabindex="-1"><a class="header-anchor" href="#tailwind-설치하기" aria-hidden="true">#</a> Tailwind 설치하기</h2>
<p>Tailwind CSS 패키지를 설치하고 init 명령어를 실행하여 tailwind.config.js와 postcss.config.js 파일을 생성하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> tailwindcss postcss autoprefixer
npx tailwindcss init <span class="token operator">-</span>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tailwind-설정" tabindex="-1"><a class="header-anchor" href="#tailwind-설정" aria-hidden="true">#</a> Tailwind 설정</h2>
<p>tailwind.config.js 안에 Tailwind CSS 클래스 이름을 사용할 파일의 경로를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'tailwindcss'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"./app/**/*.{js,ts,jsx,tsx,mdx}"</span><span class="token punctuation">,</span> <span class="token comment">// 'app' 디렉토리가 추가되었음을 주의하세요.</span>
    <span class="token string">"./pages/**/*.{js,ts,jsx,tsx,mdx}"</span><span class="token punctuation">,</span>
    <span class="token string">"./components/**/*.{js,ts,jsx,tsx,mdx}"</span><span class="token punctuation">,</span>

    <span class="token comment">// 만약 'src' 디렉토리를 사용한다면:</span>
    <span class="token string">"./src/**/*.{js,ts,jsx,tsx,mdx}"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>postcss.config.js를 수정할 필요가 없습니다.</p>
<h2 id="스타일-가져오기" tabindex="-1"><a class="header-anchor" href="#스타일-가져오기" aria-hidden="true">#</a> 스타일 가져오기</h2>
<p>Tailwind CSS 지시문을 추가하면 Tailwind가 생성한 스타일을 전역 스타일시트에 주입합니다. 이는 다음과 같은 방법으로 애플리케이션에 삽입할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@tailwind base<span class="token punctuation">;</span>
@tailwind components<span class="token punctuation">;</span>
@tailwind utilities<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>커스텀 앱 파일(pages/_app.js) 안에서 전역 스타일 시트인 globals.css를 import하여 애플리케이션의 모든 경로에 스타일을 적용하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 이 스타일은 애플리케이션의 모든 경로에 적용됩니다</span>
<span class="token keyword">import</span> <span class="token string">"@/styles/globals.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/app"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span><span class="token operator">:</span> AppProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="클래스-사용하기" tabindex="-1"><a class="header-anchor" href="#클래스-사용하기" aria-hidden="true">#</a> 클래스 사용하기</h2>
<p>Tailwind CSS를 설치한 후 전역 스타일을 추가하면 응용 프로그램에서 Tailwind의 유틸리티 클래스를 사용할 수 있습니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"text-3xl font-bold underline"</span><span class="token operator">></span>안녕<span class="token punctuation">,</span> Next<span class="token punctuation">.</span>js<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="turbopack와-함께-사용하기" tabindex="-1"><a class="header-anchor" href="#turbopack와-함께-사용하기" aria-hidden="true">#</a> Turbopack와 함께 사용하기</h2>
<p>Next.js 13.1부터 Turbopack로 Tailwind CSS와 PostCSS를 지원합니다.</p>
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
