<template><div><h1 id="nextjs-13에서-14로-업그레이드-하기" tabindex="-1"><a class="header-anchor" href="#nextjs-13에서-14로-업그레이드-하기" aria-hidden="true">#</a> Nextjs 13에서 14로 업그레이드 하기</h1>
<h2 id="_13에서-14로-업그레이드하기" tabindex="-1"><a class="header-anchor" href="#_13에서-14로-업그레이드하기" aria-hidden="true">#</a> 13에서 14로 업그레이드하기</h2>
<p>Next.js 버전 14로 업데이트하려면 즐겨 사용하는 패키지 매니저를 사용하여 다음 명령을 실행하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i next@latest react@latest react<span class="token operator">-</span>dom@latest eslint<span class="token operator">-</span>config<span class="token operator">-</span>next@latest
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add next@latest react@latest react<span class="token operator">-</span>dom@latest eslint<span class="token operator">-</span>config<span class="token operator">-</span>next@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm up next react react<span class="token operator">-</span>dom eslint<span class="token operator">-</span>config<span class="token operator">-</span>next <span class="token operator">--</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bun add next@latest react@latest react<span class="token operator">-</span>dom@latest eslint<span class="token operator">-</span>config<span class="token operator">-</span>next@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>좋아 알아두세요: TypeScript를 사용 중이라면, @types/react와 @types/react-dom도 최신 버전으로 업그레이드하는 것을 잊지 마세요.</p>
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
<h3 id="v14-요약" tabindex="-1"><a class="header-anchor" href="#v14-요약" aria-hidden="true">#</a> v14 요약</h3>
<ul>
<li>Node.js의 최소 버전이 16.14에서 18.17로 상향 조정되었습니다. 16.x 버전은 지원 종료되었기 때문입니다.</li>
<li><code v-pre>export</code> 구성을 사용하기 위해 next 명령어가 제거되었습니다. 자세한 내용은 문서를 참고해주세요.</li>
<li>ImageResponse를 위한 next/server import가 next/og로 이름이 변경되었습니다. 안전하고 자동으로 import 이름을 바꾸기 위한 codemod가 제공됩니다.</li>
<li>@next/font 패키지가 내장 next/font로 완전히 대체되었습니다. 안전하고 자동으로 import 이름을 바꾸기 위한 codemod가 제공됩니다.</li>
<li>next-swc의 WASM 타겟이 제거되었습니다.</li>
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
</div></template>
