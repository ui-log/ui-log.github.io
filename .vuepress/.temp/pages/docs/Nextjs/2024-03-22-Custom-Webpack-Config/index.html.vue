<template><div><h1 id="사용자-정의-webpack-설정" tabindex="-1"><a class="header-anchor" href="#사용자-정의-webpack-설정" aria-hidden="true">#</a> 사용자 정의 Webpack 설정</h1>
<blockquote>
<p>참고: 웹팩 구성 변경은 세맨버로 덮지 않으므로 자신의 책임 하에 진행하십시오.</p>
</blockquote>
<p>귀하의 애플리케이션에 사용자 정의 웹팩 구성을 추가하기 전에 Next.js가 이미 귀하의 사용 사례를 지원하는지 확인하십시오:</p>
<ul>
<li>CSS 임포트</li>
<li>CSS 모듈</li>
<li>Sass/SCSS 임포트</li>
<li>Sass/SCSS 모듈</li>
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
<p>일부 자주 요청되는 기능은 플러그인으로 제공됩니다:</p>
<ul>
<li>@next/mdx</li>
<li>@next/bundle-analyzer</li>
</ul>
<p>웹팩의 사용을 확장하기 위해 next.config.js 내에서 구성(config)을 확장하는 함수를 정의할 수 있습니다. 아래와 같이:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">webpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> <span class="token punctuation">{</span> buildId<span class="token punctuation">,</span> dev<span class="token punctuation">,</span> isServer<span class="token punctuation">,</span> defaultLoaders<span class="token punctuation">,</span> nextRuntime<span class="token punctuation">,</span> webpack <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 중요: 수정된 구성을 반환하세요</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<blockquote>
<p>웹팩 함수는 서버(nodejs / edge 실행 환경)에 대해 두 번, 클라이언트에 대해 한 번 실행됩니다. 이를 통해 isServer 속성을 사용하여 클라이언트와 서버 구성을 구분할 수 있습니다.</p>
</blockquote>
<p>웹팩 함수의 두 번째 인수는 다음과 같은 속성을 가진 객체입니다:</p>
<ul>
<li>buildId: String - 빌드 id로 두 빌드 간에 고유 식별자로 사용됩니다.</li>
<li>dev: Boolean - 컴파일이 개발 중에 수행될지 여부를 나타냅니다.</li>
<li>isServer: Boolean - 서버 측 컴파일에 대해서는 true이며, 클라이언트 측 컴파일에 대해서는 false입니다.</li>
<li>nextRuntime: String | undefined - 서버 측 컴파일을 위한 대상 런타임; &quot;edge&quot; 또는 &quot;nodejs&quot; 중 하나이며, 클라이언트 측 컴파일에 대해서는 정의되지 않습니다.</li>
<li>defaultLoaders: Object - Next.js에서 내부적으로 사용되는 기본 로더:
babel: Object - 기본 babel-loader 구성</li>
</ul>
<p>defaultLoaders.babel 사용 예시:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 베이블 로더에 의존하는 로더를 추가하는 예시 설정</span>
<span class="token comment">// 이 소스는 @next/mdx 플러그인 소스에서 가져왔습니다:</span>
<span class="token comment">// https://github.com/vercel/next.js/tree/canary/packages/next-mdx</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">webpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.mdx</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        options<span class="token punctuation">.</span>defaultLoaders<span class="token punctuation">.</span>babel<span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"@mdx-js/loader"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> pluginOptions<span class="token punctuation">.</span>options<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nextruntime" tabindex="-1"><a class="header-anchor" href="#nextruntime" aria-hidden="true">#</a> nextRuntime</h4>
<p>nextRuntime이 &quot;edge&quot; 또는 &quot;nodejs&quot;인 경우 isServer가 true임을 알 수 있습니다. 현재 nextRuntime &quot;edge&quot;는 미들웨어 및 에지 런타임에서만 서버 컴포넌트를 위한 것입니다.</p>
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
