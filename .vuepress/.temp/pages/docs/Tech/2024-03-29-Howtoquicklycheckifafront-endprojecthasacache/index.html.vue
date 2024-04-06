<template><div><p>컨테이너화 시대에는 페이지에 문제가 발생할 때 새로운 버전이 이미 수정되었을 가능성이 높습니다. 따라서 문제 해결을 위해 고군분투할 필요가 없습니다.</p>
<p>왜 항상 최신 버전이 아닌가요? 한 가지 이유는 캐싱일 수 있고, 다른 이유로 운영팀 구성원이 버전을 원래대로 롤백했을 수도 있습니다. 문제가 발생한 버전을 어떻게 확인할 수 있을까요? 이를 확인하려면 페이지에 버전 번호를 삽입해야 합니다.</p>
<p>일반적으로 이 단계는 빌드를 패키징할 때 package.json에 있는 버전 필드를 html에 삽입하는 것입니다 (따라서 각 릴리스마다 해당 버전을 수정해야 하며, 이는 npm version 명령을 사용하여 하는 게 좋습니다). 저는 head에 meta를 추가하는 것을 선호하지만, 물론 화면에 출력해도 됩니다.</p>
<h1 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> vite</h1>
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
<p>vite 프로젝트에서는 vite-plugin-html-template 플러그인을 사용할 수 있어요. vite.config.ts 파일에 다음 코드를 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> htmlTemplate <span class="token keyword">from</span> <span class="token string">'vite-plugin-html-template'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> version <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./package.json"</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token function">htmlTemplate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        version
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하지만 국제화된 단어가 너무 많으면 문제가 발생할 수 있어요. 자원 파일이 너무 커지면 페이지에 접속할 때마다 모든 언어 자원을 로드해야 하며, 페이지에서 필요한 언어가 한 가지 뿐이라면 다른 언어의 자원은 사용되지 않아 웹사이트 첫 화면의 로딩 속도에 영향을 줄 수 있어요.</p>
<p>json 파일을 참조하기 때문에 기본 tsconfig.config.json 파일을 수정해야 해요. package.json을 포함하도록 &quot;include&quot;에 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span>xxx<span class="token punctuation">,</span> <span class="token string">"package.json"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
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
<p><code v-pre>index.html</code> 파일을 <code v-pre>public</code> 디렉토리로 이동하고 <code v-pre>head</code>에 다음과 같은 문장을 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>meta version<span class="token operator">=</span><span class="token string">"&lt;%- version %>"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">...</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 하면 페이지에서 버전 번호를 확인할 수 있습니다.</p>
<img src="@source/docs/Tech/2024-03-29-Howtoquicklycheckifafront-endprojecthasacache/img/Howtoquicklycheckifafront-endprojecthasacache_0.png" /></div></template>
