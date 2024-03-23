<template><div><img src="@source/docs/Tech/2024-03-23-HowcanyouuseTailwindcsswithNetCoreMVC/img/How-can-you-use-Tailwindcss-with-.Net-Core-MVC_0.png" />
<p>이 기사는 Tailwind를 .Net Core Mvc 웹 애플리케이션과 함께 사용하는 방법에 대한 것입니다.</p>
<h1 id="net-mvc-프로젝트-생성" tabindex="-1"><a class="header-anchor" href="#net-mvc-프로젝트-생성" aria-hidden="true">#</a> .Net Mvc 프로젝트 생성</h1>
<p>이 단계에서는 터미널을 사용할 것이지만 Visual Studio나 기타 툴을 선호하신다면 사용하셔도 됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ dotnet <span class="token keyword">new</span> <span class="token class-name">sln</span> <span class="token operator">-</span>n MvcProject
$ dotnet <span class="token keyword">new</span> <span class="token class-name">mvc</span> <span class="token operator">-</span>n MvcProject<span class="token punctuation">.</span>Web
$ dotnet sln add <span class="token punctuation">.</span><span class="token operator">/</span>MvcProject<span class="token punctuation">.</span>Web<span class="token operator">/</span>MvcProject<span class="token punctuation">.</span>Web<span class="token punctuation">.</span>csproj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="tailwindcss-설치하기" tabindex="-1"><a class="header-anchor" href="#tailwindcss-설치하기" aria-hidden="true">#</a> Tailwindcss 설치하기</h1>
<p>먼저 Node.js가 필요합니다. 시스템에 Node.js가 없는 경우 여기에서 다운로드할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ cd MvcProject
$ npm init

<span class="token operator">...</span> <span class="token punctuation">(</span>질문에 답변<span class="token punctuation">)</span>

$ npm i tailwindcss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="tailwindcss-준비하기" tabindex="-1"><a class="header-anchor" href="#tailwindcss-준비하기" aria-hidden="true">#</a> Tailwindcss 준비하기</h1>
<p>저희 프로젝트에 Tailwindcss를 설치했어요. 이제 Tailwindcss를 사용하기 위해 준비해야 해요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ npx tailwincss init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령어는 당신의 디렉토리에 tailwind.config.js 파일을 생성할 거에요.</p>
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
<p>그 파일의 기본 버전은 다음과 같습니다</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'tailwindcss'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하지만 우리는 MVC용으로 이 파일을 편집할 것입니다</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'tailwindcss'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./Pages/**/*.cshtml"</span><span class="token punctuation">,</span> <span class="token string">"./Views/**/*.cshtml"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 Tailwind는 .cshtml 파일을 감지할 수 있습니다.</p>
<h1 id="mvc를-위한-npm-설정-구성" tabindex="-1"><a class="header-anchor" href="#mvc를-위한-npm-설정-구성" aria-hidden="true">#</a> Mvc를 위한 npm 설정 구성</h1>
<p>package.json 파일에 다음 코드를 추가해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"css:build"</span><span class="token operator">:</span> <span class="token string">"npx tailwindcss -i ./wwwroot/css/site.css -o ./wwwroot/css/styles.css --minify"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"watch"</span><span class="token operator">:</span> <span class="token string">"npx tailwindcss -i ./wwwroot/css/site.css -o ./wwwroot/css/styles.css --minify --watch"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>npm watch 명령어를 사용하여 개발할 수 있어요. 이 명령어는 당신의 변경 사항을 지켜보고 tailwind 코드를 너무 빨리 다시 빌드해줄 거예요.</p>
<p>참고: 하지만 css:build 명령어를 사용하여 빌드해야 해요.</p>
<h1 id="views에-tailwindcss-추가하기" tabindex="-1"><a class="header-anchor" href="#views에-tailwindcss-추가하기" aria-hidden="true">#</a> Views에 Tailwindcss 추가하기</h1>
<p>우리는 npm과 tailwindcss 설정을 완료했어요. 이제 우리의 views에 tailwindcss 빌드를 추가할 차례에요.</p>
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
<p>./Views/Shared/_Layout.cshtml을 열어서 붙여넣어주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"/css/styles.css"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>작업 완료했어요. 이제 Mvc 프로젝트에서 Tailwindcss를 사용할 수 있어요.</p>
<h1 id="나의-정보" tabindex="-1"><a class="header-anchor" href="#나의-정보" aria-hidden="true">#</a> 나의 정보</h1>
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
<li>Github: <a href="https://github.com/omerasaf01" target="_blank" rel="noopener noreferrer">https://github.com/omerasaf01<ExternalLinkIcon/></a></li>
<li>Medium: <a href="https://medium.com/@omerconsept999" target="_blank" rel="noopener noreferrer">https://medium.com/@omerconsept999<ExternalLinkIcon/></a></li>
<li>Linkedin: <a href="https://www.linkedin.com/in/omerasaf/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/omerasaf/<ExternalLinkIcon/></a></li>
</ul>
<p>읽어 주셔서 감사합니다.</p>
</div></template>
