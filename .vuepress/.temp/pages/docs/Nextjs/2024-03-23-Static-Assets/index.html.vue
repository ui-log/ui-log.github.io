<template><div><h1 id="정적-자산" tabindex="-1"><a class="header-anchor" href="#정적-자산" aria-hidden="true">#</a> 정적 자산</h1>
<p>Next.js는 루트 디렉토리에있는 public이라는 폴더 아래와 같이 이미지와 같은 정적 파일을 제공 할 수 있습니다. public 내부의 파일은 기본 URL (/)을 기준으로 코드에서 참조 할 수 있습니다.</p>
<p>예를 들어, public/avatars/me.png 파일은 /avatars/me.png 경로를 방문하여 볼 수 있습니다. 해당 이미지를 표시하는 코드는 다음과 같이 보일 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Avatar</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id<span class="token punctuation">,</span> alt <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/avatars/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.png</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token punctuation">{</span>alt<span class="token punctuation">}</span> width<span class="token operator">=</span><span class="token string">"64"</span> height<span class="token operator">=</span><span class="token string">"64"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">AvatarOfMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Avatar id<span class="token operator">=</span><span class="token string">"me"</span> alt<span class="token operator">=</span><span class="token string">"내 초상화"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
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
<h2 id="캐싱" tabindex="-1"><a class="header-anchor" href="#캐싱" aria-hidden="true">#</a> 캐싱</h2>
<p>Next.js는 public 폴더에 있는 에셋을 안전하게 캐시할 수 없습니다. 왜냐하면 그것들이 변경될 수 있기 때문입니다. 적용된 기본 캐싱 헤더는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Cache<span class="token operator">-</span>Control<span class="token operator">:</span> <span class="token keyword">public</span><span class="token punctuation">,</span> max<span class="token operator">-</span>age<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="로봇-파비콘-그리고-그-외의-것들" tabindex="-1"><a class="header-anchor" href="#로봇-파비콘-그리고-그-외의-것들" aria-hidden="true">#</a> 로봇, 파비콘, 그리고 그 외의 것들</h2>
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
<p>폴더는 robots.txt, favicon.ico, Google 사이트 확인 및 다른 정적 파일(.html 포함)에도 유용합니다. 그러나 pages/ 디렉토리 내의 파일 이름과 동일한 정적 파일이 있으면 오류가 발생할 수 있으니 주의해주세요. 자세한 내용은 여기서 확인하세요.</p>
<blockquote>
<p>알아 두면 좋은 사항:
디렉토리는 public으로 지정되어야 합니다. 이름을 변경할 수 없으며, 정적 자산을 제공하는 유일한 디렉토리입니다.
빌드 시점에 public 디렉토리에 있는 자산만 Next.js가 제공할 수 있습니다. 요청 시 추가된 파일은 사용할 수 없습니다. 지속적 파일 저장을 위해 Vercel Blob과 같은 타사 서비스를 사용하는 것을 권장합니다.</p>
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
</div></template>
