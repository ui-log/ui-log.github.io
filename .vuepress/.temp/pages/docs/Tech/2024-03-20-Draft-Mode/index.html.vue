<template><div><h1 id="nextjs-14-draft-mode-방법-정리" tabindex="-1"><a class="header-anchor" href="#nextjs-14-draft-mode-방법-정리" aria-hidden="true">#</a> Nextjs 14 Draft Mode 방법 정리</h1>
<p>정적 렌더링은 페이지가 헤드리스 CMS에서 데이터를 가져올 때 유용합니다. 그러나 헤드리스 CMS에서 초안을 작성하고 바로 페이지에서 확인하고 싶은 경우에 이상적이지 않습니다. 이럴 때 Next.js가 이러한 페이지를 빌드 시간이 아니라 요청 시간에 렌더링하고 게시된 콘텐츠가 아니라 초안 콘텐츠를 가져오도록 하고 싶을 것입니다. 이 특별한 경우에만 Next.js가 동적 렌더링으로 전환될 수 있도록 하고 싶을 것입니다.
Next.js에는 이 문제를 해결하는 Draft Mode라는 기능이 있습니다. 사용 방법은 다음과 같습니다.</p>
<h2 id="단계-1-라우트-핸들러-생성-및-접근" tabindex="-1"><a class="header-anchor" href="#단계-1-라우트-핸들러-생성-및-접근" aria-hidden="true">#</a> 단계 1: 라우트 핸들러 생성 및 접근</h2>
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
<p>먼저 Route Handler를 만들어보세요. 이름은 어떤 것이든 됩니다 - 예를 들어 app/api/draft/route.ts
그런 다음 next/headers에서 draftMode를 가져와 enable() 메소드를 호출하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 드래프트 모드를 활성화하는 route handler</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> draftMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">draftMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">"드래프트 모드가 활성화되었습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 해서 쿠키를 설정하여 드래프트 모드를 활성화할 수 있습니다. 이 쿠키를 포함한 후속 요청은 정적으로 생성된 페이지의 동작을 변경하는 드래프트 모드를 트리거할 것입니다 (이에 대해 나중에 자세히 설명하겠습니다).</p>
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
<p>수동으로 이를 테스트하려면 /api/draft를 방문하여 브라우저의 개발자 도구를 확인해보세요. &quot;Set-Cookie&quot;라는 응답 헤더에 &quot;__prerender_bypass&quot;라는 이름의 쿠키가 있는 것을 확인할 수 있습니다.</p>
<h3 id="헤들리스-cms에서-안전하게-접근하기" tabindex="-1"><a class="header-anchor" href="#헤들리스-cms에서-안전하게-접근하기" aria-hidden="true">#</a> 헤들리스 CMS에서 안전하게 접근하기</h3>
<p>실제로는 헤들리스 CMS에서 이 라우트 핸들러를 안전하게 호출하고 싶을 것입니다. 사용하는 헤들리스 CMS에 따라 구체적인 단계는 다를 수 있지만, 여기에 몇 가지 일반적인 단계가 있습니다.
이러한 단계들은 사용 중인 헤들리스 CMS가 사용자 정의 드래프트 URL 설정을 지원하는 것으로 가정합니다. 그렇지 않은 경우에도 이 방법을 사용하여 드래프트 URL을 보호할 수 있지만, 드래프트 URL을 수동으로 구성하고 액세스해야 할 것입니다.</p>
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
<p>먼저, 자신이 선택한 토큰 생성기를 사용하여 시크릿 토큰 문자열을 생성해야 합니다. 이 시크릿은 당신의 Next.js 앱과 헤드리스 CMS만이 알게 될 것입니다. 이 시크릿은 CMS에 액세스할 수 없는 사람들이 초안 URL에 액세스하는 것을 방지합니다.
둘째, 헤드리스 CMS가 사용자 정의 초안 URL을 설정하는 것을 지원하는 경우, 다음을 초안 URL로 지정하십시오. 이는 Route Handler가 app/api/draft/route.ts에 위치한다고 가정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">&lt;</span>your<span class="token operator">-</span>site<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>draft<span class="token operator">?</span>secret<span class="token operator">=</span><span class="token operator">&lt;</span>token<span class="token operator">></span><span class="token operator">&amp;</span>slug<span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;your-site&gt;</code>는 배포 도메인이어야 합니다.</li>
<li><code v-pre>&lt;token&gt;</code>은 생성한 시크릿 토큰으로 대체해야 합니다.</li>
<li><code v-pre>&lt;path&gt;</code>는 보고 싶은 페이지의 경로여야 합니다. /posts/foo를 보고 싶다면 &amp;slug=/posts/foo를 사용해야 합니다.</li>
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
<p>헤들리스 CMS를 사용하면 초안 URL에 변수를 포함할 수 있어요. 이렇게하면 <code v-pre>&lt;path&gt;</code>가 CMS 데이터에 따라 동적으로 설정될 수 있어요: &amp;slug=/posts/{entry.fields.slug}
마지막으로, 라우트 핸들러에서:</p>
<ul>
<li>비밀 토큰을 확인하고 슬러그 매개변수가 있는지 확인하세요 (그렇지 않으면 요청이 실패해야 합니다).</li>
<li>draftMode.enable()을 호출하여 쿠키를 설정하세요.</li>
<li>그런 다음 브라우저를 slug로 지정된 경로로 리디렉션하세요.</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 비밀 및 슬러그 있는 라우트 핸들러</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> draftMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 쿼리 문자열 매개변수 구문 분석</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> searchParams <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> secret <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"secret"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> slug <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"slug"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 비밀 및 다음 매개변수 확인</span>
  <span class="token comment">//이 비밀 정보는 이 라우트 핸들러와 CMS에서만 알려진 정보여야 합니다</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>secret <span class="token operator">!==</span> <span class="token string">"MY_SECRET_TOKEN"</span> <span class="token operator">||</span> <span class="token operator">!</span>slug<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">"유효하지 않은 토큰"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">401</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Headless CMS를 가져와 제공된 'slug'가 있는지 확인합니다</span>
  <span class="token comment">// getPostBySlug는 Headless CMS로 필요한 가져오기 로직을 구현할 것입니다</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPostBySlug</span><span class="token punctuation">(</span>slug<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// slug가 존재하지 않는 경우 초안 모드를 활성화하지 않음</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>post<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">"유효하지 않은 슬러그"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">401</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 쿠키를 설정하여 초안 모드 활성화</span>
  <span class="token function">draftMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 가져온 게시물의 경로로 리디렉션</span>
  <span class="token comment">// open redirect 취약점으로 이어질 수 있는 searchParams.slug로 리디렉션하지 않습니다</span>
  <span class="token function">redirect</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>slug<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>이것이 성공하면, 브라우저가 원하는 경로로 redirect되며 초안 모드 쿠키로 설정될 것입니다.</p>
<h2 id="단계-2-페이지-업데이트" tabindex="-1"><a class="header-anchor" href="#단계-2-페이지-업데이트" aria-hidden="true">#</a> 단계 2: 페이지 업데이트</h2>
<p>다음 단계는 페이지를 업데이트하여 draftMode().isEnabled의 값을 확인하는 것입니다.
쿠키가 설정된 페이지를 요청하면 데이터가 빌드 시간이 아닌 요청 시간에 가져올 것입니다.</p>
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
<p>더욱이, isEnabled의 값은 true가 될 것입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 데이터를 가져오는 페이지</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> draftMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> isEnabled <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">draftMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> url <span class="token operator">=</span> isEnabled <span class="token operator">?</span> <span class="token string">"https://draft.example.com"</span> <span class="token operator">:</span> <span class="token string">"https://production.example.com"</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> desc <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>desc<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기까지입니다! 만약 헤들리스 CMS나 수동으로 숨은 Route Handler에 액세스한다면, 이제 드래프트 컨텐츠를 볼 수 있어야 합니다. 또한, 드래프트를 업데이트하고 발행하지 않은 경우에도 드래프트를 볼 수 있어야 합니다.
이를 헤들리스 CMS의 드래프트 URL로 설정하거나 수동으로 액세스하여 드래프트를 볼 수 있어야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">&lt;</span>your<span class="token operator">-</span>site<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>draft<span class="token operator">?</span>secret<span class="token operator">=</span><span class="token operator">&lt;</span>token<span class="token operator">></span><span class="token operator">&amp;</span>slug<span class="token operator">=</span><span class="token operator">&lt;</span>path<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="더-자세한-정보" tabindex="-1"><a class="header-anchor" href="#더-자세한-정보" aria-hidden="true">#</a> 더 자세한 정보</h2>
<h3 id="드래프트-모드-쿠키-지우기" tabindex="-1"><a class="header-anchor" href="#드래프트-모드-쿠키-지우기" aria-hidden="true">#</a> 드래프트 모드 쿠키 지우기</h3>
<p>기본적으로, 브라우저가 닫히면 드래프트 모드 세션이 종료됩니다.</p>
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
<p>Draft Mode 쿠키를 수동으로 지우려면 draftMode().disable()를 호출하는 Route Handler를 생성하십시오:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> draftMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">draftMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">"Draft mode is disabled"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 /api/disable-draft로 요청을 보내어 Route Handler를 호출하십시오. 만약 next/link를 사용하여 이 라우트를 호출하는 경우, 미리 가져오기(prefetch)에서 실수로 쿠키를 삭제하는 것을 방지하기 위해 prefetch={false}를 전달해야 합니다.</p>
<h3 id="각각의-next-빌드별로-고유함" tabindex="-1"><a class="header-anchor" href="#각각의-next-빌드별로-고유함" aria-hidden="true">#</a> 각각의 next 빌드별로 고유함</h3>
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
<p>다음 빌드를 실행할 때마다 새로운 바이패스 쿠키 값이 생성됩니다.<br>
이렇게 함으로써 바이패스 쿠키가 추측되지 않도록 보장됩니다.</p>
<blockquote>
<p>알아두면 좋은 사항: Draft Mode를 로컬에서 HTTP로 테스트하려면 브라우저가 제3자 쿠키와 로컬 저장소 액세스를 허용해야 합니다.</p>
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
