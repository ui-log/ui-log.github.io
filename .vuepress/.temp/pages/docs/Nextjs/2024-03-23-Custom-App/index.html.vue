<template><div><h1 id="사용자-정의-앱" tabindex="-1"><a class="header-anchor" href="#사용자-정의-앱" aria-hidden="true">#</a> 사용자 정의 앱</h1>
<p>Next.js는 페이지를 초기화하기 위해 App 컴포넌트를 사용합니다. 이를 재정의하여 페이지 초기화를 제어하고 다음을 수행할 수 있습니다:</p>
<ul>
<li>페이지 변경 사이에서 공유 레이아웃 만들기</li>
<li>페이지에 추가 데이터 주입</li>
<li>글로벌 CSS 추가</li>
</ul>
<h2 id="사용법" tabindex="-1"><a class="header-anchor" href="#사용법" aria-hidden="true">#</a> 사용법</h2>
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
<p>기본 App을 재정의하려면 아래와 같이 파일 pages/_app을 생성하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/app"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span><span class="token operator">:</span> AppProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Component 프롭은 활성 페이지이므로 경로 간에 이동할 때마다 Component가 새 페이지로 변경됩니다. 따라서 Component로 전송하는 모든 프롭은 페이지에서 받을 수 있습니다.</p>
<p>pageProps는 초기 프롭이라는 객체이며, 이는 데이터 가져오기 방법 중 하나로 페이지를 미리 로드했거나 그렇지 않은 경우엔 빈 객체입니다.</p>
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
<p>알아두면 좋아요
만약 애플리케이션이 실행 중이고 사용자 정의 앱을 추가했다면 개발 서버를 다시 시작해야 합니다. 이전에 pages/_app.js가 없었던 경우에만 필요합니다.
앱은 getStaticProps 또는 getServerSideProps와 같은 Next.js 데이터 가져오기 방법을 지원하지 않습니다.</p>
</blockquote>
<h2 id="앱에서-getinitialprops-사용하기" tabindex="-1"><a class="header-anchor" href="#앱에서-getinitialprops-사용하기" aria-hidden="true">#</a> 앱에서 getInitialProps 사용하기</h2>
<p>앱에서 getInitialProps를 사용하면 getStaticProps가 없는 페이지에 대해 자동 정적 최적화가 비활성화됩니다.</p>
<p>이 패턴을 사용하는 것을 권장하지 않습니다. 대신 페이지와 레이아웃에 대한 데이터를 더 쉽게 가져올 수 있도록 해주는 App Router를 점진적으로 적용하는 것을 고려해보세요.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> App<span class="token punctuation">,</span> <span class="token punctuation">{</span> AppContext<span class="token punctuation">,</span> AppInitialProps<span class="token punctuation">,</span> AppProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/app"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">AppOwnProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span> example<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps<span class="token punctuation">,</span> example <span class="token punctuation">}</span><span class="token operator">:</span> AppProps <span class="token operator">&amp;</span> AppOwnProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Data<span class="token operator">:</span> <span class="token punctuation">{</span>example<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

MyApp<span class="token punctuation">.</span>getInitialProps <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>context<span class="token operator">:</span> AppContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>AppOwnProps <span class="token operator">&amp;</span> AppInitialProps<span class="token operator">></span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ctx <span class="token operator">=</span> <span class="token keyword">await</span> App<span class="token punctuation">.</span><span class="token function">getInitialProps</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>ctx<span class="token punctuation">,</span> example<span class="token operator">:</span> <span class="token string">"data"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
