<template><div><h1 id="nextjs-14-데이터-fetching-캐싱-revalidating" tabindex="-1"><a class="header-anchor" href="#nextjs-14-데이터-fetching-캐싱-revalidating" aria-hidden="true">#</a> Nextjs 14 데이터 fetching, 캐싱, revalidating</h1>
<h1 id="데이터-가져오기-캐싱-및-재검증" tabindex="-1"><a class="header-anchor" href="#데이터-가져오기-캐싱-및-재검증" aria-hidden="true">#</a> 데이터 가져오기, 캐싱 및 재검증</h1>
<p>데이터 가져오기는 모든 애플리케이션의 핵심 부분입니다. 이 페이지에서는 React 및 Next.js에서 데이터를 가져오고 캐시하고 재검증하는 방법에 대해 알아봅니다.</p>
<p>데이터를 가져오는 네 가지 방법이 있습니다:</p>
<ul>
<li>서버에서 fetch를 사용하여</li>
<li>서버에서 제3자 라이브러리를 사용하여</li>
<li>클라이언트에서 Route Handler를 통해</li>
<li>클라이언트에서 제3자 라이브러리를 사용하여</li>
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
<h2 id="fetch를-사용하여-서버에서-데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#fetch를-사용하여-서버에서-데이터-가져오기" aria-hidden="true">#</a> fetch를 사용하여 서버에서 데이터 가져오기</h2>
<p>Next.js는 서버에서 각 fetch 요청에 대한 캐싱 및 재검증 동작을 구성할 수 있도록 기본 fetch Web API를 확장합니다. React는 fetch를 확장하여 React 컴포넌트 트리를 렌더링하는 동안 fetch 요청을 자동으로 메모이즈합니다.</p>
<p>fetch를 async/await와 함께 Server Components, Route Handlers 및 Server Actions에서 사용할 수 있습니다.</p>
<p>예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.example.com/..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 반환 값은 직렬화되지 않습니다</span>
  <span class="token comment">// Date, Map, Set 등을 반환할 수 있습니다.</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 가장 가까운 'error.js' 에러 바운더리가 활성화됩니다</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"데이터 가져오기 실패"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>main<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<blockquote>
<p>알아두세요:
Next.js는 Server Components에서 데이터를 가져올 때 유용한 함수를 제공합니다. 이 함수들은 쿠키와 헤더와 같은 요청 시간 정보에 의존하기 때문에 경로가 동적으로 렌더링됩니다.
Route Handler에서는 fetch 요청이 메모이즈되지 않습니다. Route Handler는 React 컴포넌트 트리의 일부가 아니기 때문입니다.
Server Actions에서는 fetch 요청이 캐시되지 않습니다 (기본값: 캐시 없음).
TypeScript로 Server Component에서 async/await를 사용하려면 TypeScript 5.1.3 이상 및 @types/react 18.2.8 이상을 사용해야 합니다.</p>
</blockquote>
<h3 id="데이터-캐싱" tabindex="-1"><a class="header-anchor" href="#데이터-캐싱" aria-hidden="true">#</a> 데이터 캐싱</h3>
<p>캐싱은 데이터를 매번 데이터 소스에서 다시 가져 오지 않고 저장하는 것을 의미합니다.</p>
<p>기본적으로 Next.js는 서버의 데이터 캐시에 fetch의 반환 값을 자동으로 캐시합니다. 이는 데이터가 빌드 시간이나 요청 시간에 가져와 캐시되어 각 데이터 요청에 재사용될 수 있음을 의미합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 'force-cache'는 기본값이며 생략할 수 있습니다</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://..."</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">"force-cache"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그러나 예외가 있습니다. fetch 요청은 다음과 같은 경우에 캐시되지 않습니다.</p>
<ul>
<li>Server Action 내에서 사용될 때</li>
<li>POST 메서드를 사용하는 Route Handler 내에서 사용될 때</li>
</ul>
<blockquote>
<p>데이터 캐시란?
데이터 캐시는 영구적인 HTTP 캐시입니다. 플랫폼에 따라 캐시는 자동으로 확장되고 여러 지역에서 공유될 수 있습니다.
데이터 캐시에 대해 더 알아보세요.</p>
</blockquote>
<h3 id="데이터-재검증" tabindex="-1"><a class="header-anchor" href="#데이터-재검증" aria-hidden="true">#</a> 데이터 재검증</h3>
<p>재검증은 데이터 캐시를 제거하고 최신 데이터를 다시 가져오는 프로세스입니다. 데이터가 변경되고 최신 정보를 표시하려는 경우 유용합니다.</p>
<p>캐시된 데이터는 두 가지 방법으로 재검증될 수 있습니다.</p>
<ul>
<li>시간 기반 재검증: 리소스의 캐시 수명을 설정하여 일정 시간이 지난 후 데이터를 자동으로 재검증합니다. 이는 데이터가 드물게 변경되고 신선도가 중요하지 않을 때 유용합니다.</li>
<li>요청 기반 재검증: 이벤트(예: 양식 제출)에 따라 데이터를 수동으로 재검증합니다. 요청 기반 재검증은 한 번에 여러 데이터 그룹을 재검증하도록 태그 기반이나 경로 기반 접근 방식을 사용할 수 있습니다. 내용이 업데이트되었을 때 가능한 빨리 최신 데이터가 표시되도록 할 때 유용합니다(예: 헤드리스 CMS에서 콘텐츠가 업데이트될 때).</li>
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
<h4 id="시간-기반-재검증" tabindex="-1"><a class="header-anchor" href="#시간-기반-재검증" aria-hidden="true">#</a> 시간 기반 재검증</h4>
<p>특정 간격으로 데이터를 재검증하려면 fetch의 next.revalidate 옵션을 사용하여 리소스의 캐시 수명을 설정할 수 있습니다(초 단위).</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://..."</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">3600</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>또는 라우트 세그먼트의 모든 fetch 요청을 재검증하려면 Segment Config 옵션을 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> revalidate <span class="token operator">=</span> <span class="token number">3600</span><span class="token punctuation">;</span> <span class="token comment">// 최대 한 시간마다 재검증</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>정적으로 렌더링된 라우트에 여러 fetch 요청이 있고 각각이 다른 재검증 빈도를 가지고 있는 경우 가장 낮은 시간이 모든 요청에 대해 사용됩니다. 동적으로 렌더링된 라우</p>
<p>트의 경우 각 fetch 요청은 독립적으로 재검증됩니다.</p>
<p>시간 기반 재검증에 대해 더 알아보세요.</p>
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
<h4 id="요청-기반-재검증" tabindex="-1"><a class="header-anchor" href="#요청-기반-재검증" aria-hidden="true">#</a> 요청 기반 재검증</h4>
<p>데이터는 Server Action 또는 Route Handler 내에서 경로(revalidatePath) 또는 캐시 태그(revalidateTag)별로 재검증될 수 있습니다.</p>
<p>Next.js에는 라우트 간에 fetch 요청을 무효화하는 캐시 태그 시스템이 있습니다.</p>
<ul>
<li>fetch를 사용할 때 하나 이상의 태그로 캐시 항목을 태그 지정할 수 있습니다.</li>
<li>그런 다음 revalidateTag를 호출하여 해당 태그와 관련된 모든 항목을 재검증할 수 있습니다.</li>
</ul>
<p>예를 들어, 다음 fetch 요청은 캐시 태그 collection으로 태그 지정됩니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://..."</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> next<span class="token operator">:</span> <span class="token punctuation">{</span> tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"collection"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 Server Action에서 collection 태그로 태그 지정된 이 fetch 호출을 revalidateTag를 호출하여 재검증할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use server"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> revalidateTag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">revalidateTag</span><span class="token punctuation">(</span><span class="token string">"collection"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>요청 기반 재검증에 대해 더 알아보세요.</p>
<h4 id="오류-처리-및-재검증" tabindex="-1"><a class="header-anchor" href="#오류-처리-및-재검증" aria-hidden="true">#</a> 오류 처리 및 재검증</h4>
<p>데이터를 재검증하려고 시도하는 동안 오류가 발생하면 마지막으로 성공적으로 생성된 데이터가 캐시에서 계속 제공됩니다. 다음 요청에서 Next.js는 데이터를 다시 재검증하기 위해 재시도합니다.</p>
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
<h3 id="데이터-캐싱-비활성화" tabindex="-1"><a class="header-anchor" href="#데이터-캐싱-비활성화" aria-hidden="true">#</a> 데이터 캐싱 비활성화</h3>
<p>fetch 요청은 다음과 같은 경우에 캐시되지 않습니다.</p>
<ul>
<li>cache: <code v-pre>no-store</code>가 fetch 요청에 추가되었을 때.</li>
<li>개별 fetch 요청에 revalidate: 0 옵션이 추가되었을 때.</li>
<li>POST 메서드를 사용하는 Router Handler 내에 fetch 요청이 있을 때.</li>
<li>헤더나 쿠키를 사용한 후에 fetch 요청이 있을 때.</li>
<li>const dynamic = <code v-pre>force-dynamic</code> 라우트 세그먼트 옵션이 사용되었을 때.</li>
<li>fetchCache 라우트 세그먼트 옵션이 기본적으로 캐시를 건너 뛰도록 구성되었을 때.</li>
<li>fetch 요청이 Authorization이나 Cookie 헤더를 사용하고 컴포넌트 트리에서 위에 캐시되지 않은 요청이 있을 때.</li>
</ul>
<h4 id="개별-fetch-요청" tabindex="-1"><a class="header-anchor" href="#개별-fetch-요청" aria-hidden="true">#</a> 개별 fetch 요청</h4>
<p>개별 fetch 요청의 캐싱을 비활성화하려면 fetch의 cache 옵션을 <code v-pre>no-store</code>로 설정할 수 있습니다. 이렇게 하면 모든 요청에 대해 동적으로 데이터를 가져올 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://..."</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">"no-store"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>fetch API 참조에서 사용 가능한 모든 캐시 옵션을 확인하세요.</p>
<h4 id="여러-fetch-요청" tabindex="-1"><a class="header-anchor" href="#여러-fetch-요청" aria-hidden="true">#</a> 여러 fetch 요청</h4>
<p>라우트 세그먼트(예: Layout 또는 Page)에 여러 fetch 요청이 있는 경우 세그먼트 구성 옵션을 사용하여 세그먼트 내의 모든 데이터 요청의 캐싱 동작을 구성할 수 있습니다.</p>
<p>그러나 각 fetch 요청의 캐싱 동작을 개별적으로 구성하는 것이 좋습니다. 이렇게 하면 캐싱 동작을 더 세밀하게 제어할 수 있습니다.</p>
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
<h2 id="서버에서-제3자-라이브러리를-사용하여-데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#서버에서-제3자-라이브러리를-사용하여-데이터-가져오기" aria-hidden="true">#</a> 서버에서 제3자 라이브러리를 사용하여 데이터 가져오기</h2>
<p>제3자 라이브러리를 사용하는 경우(fetch를 지원하거나 노출하지 않는 데이터베이스, CMS 또는 ORM 클라이언트와 같은 경우) Route Segment Config 옵션과 React의 cache 함수를 사용하여 해당 요청의 캐싱 및 재검증 동작을 구성할 수 있습니다.</p>
<p>데이터가 캐시되는지 여부는 세그먼트가 정적으로 또는 동적으로 렌더링되는지에 따라 달라집니다. 세그먼트가 정적(기본값)인 경우 요청의 출력이 라우트 세그먼트의 일부로 캐시되고 재검증됩니다. 세그먼트가 동적인 경우 요청의 출력이 캐시되지 않으며 세그먼트가 렌더링될 때마다 매번 다시 가져옵니다.</p>
<p>또한 실험적인 unstable_cache API를 사용할 수도 있습니다.</p>
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
<h3 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h3>
<p>아래 예시에서는:</p>
<ul>
<li>React의 cache 함수를 사용하여 데이터 요청을 메모이즈합니다.</li>
<li>Layout 및 Page 세그먼트에서 revalidate 옵션이 3600으로 설정되어 있으며, 이는 데이터가 최대 한 시간마다 캐시되고 재검증됨을 의미합니다.</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> cache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getItem <span class="token operator">=</span> <span class="token function">cache</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span>item<span class="token punctuation">.</span><span class="token function">findUnique</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getItem 함수가 두 번 호출되더라도 데이터베이스에 대한 쿼리는 한 번만 실행됩니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/utils/get-item"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> revalidate <span class="token operator">=</span> <span class="token number">3600</span><span class="token punctuation">;</span> <span class="token comment">// 최대 한 시간마다 데이터 재검증</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getItem</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/utils/get-item"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> revalidate <span class="token operator">=</span> <span class="token number">3600</span><span class="token punctuation">;</span> <span class="token comment">// 최대 한 시간마다 데이터 재검증</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getItem</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
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
<h2 id="라우트-핸들러를-사용하여-클라이언트에서-데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#라우트-핸들러를-사용하여-클라이언트에서-데이터-가져오기" aria-hidden="true">#</a> 라우트 핸들러를 사용하여 클라이언트에서 데이터 가져오기</h2>
<p>클라이언트 컴포넌트에서 데이터를 가져와야 하는 경우 클라이언트에서 라우트 핸들러를 호출할 수 있습니다. 라우트 핸들러는 서버에서 실행되고 데이터를 클라이언트에 반환합니다. 이것은 API 토큰과 같은 민감한 정보를 클라이언트에 노출시키고 싶지 않을 때 유용합니다.</p>
<p>예제는 라우트 핸들러 문서를 참조하세요.</p>
<blockquote>
<p>서버 컴포넌트와 라우트 핸들러
서버 컴포넌트는 서버에서 렌더링되기 때문에 데이터를 가져오기 위해 클라이언트에서 라우트 핸들러를 호출할 필요가 없습니다. 대신, 서버 컴포넌트 내에서 데이터를 직접 가져올 수 있습니다.</p>
</blockquote>
<h2 id="서드파티-라이브러리를-사용하여-클라이언트에서-데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#서드파티-라이브러리를-사용하여-클라이언트에서-데이터-가져오기" aria-hidden="true">#</a> 서드파티 라이브러리를 사용하여 클라이언트에서 데이터 가져오기</h2>
<p>SWR 또는 TanStack Query와 같은 서드파티 라이브러리를 사용하여 클라이언트에서도 데이터를 가져올 수 있습니다. 이러한 라이브러리들은 요청을 메모이즈하고, 캐시하고, 재유효화하고, 데이터를 변경하는 데에 대한 자체 API를 제공합니다.</p>
<blockquote>
<p>향후 API:
use는 함수가 반환한 프로미스를 받아들이고 처리하는 React 함수입니다. fetch를 use로 래핑하는 것은 현재 클라이언트 컴포넌트에서 권장되지 않으며 여러 번의 다시 렌더링을 유발할 수 있습니다. use에 대해 더 알아보려면 React 문서를 참조하세요.</p>
</blockquote>
</div></template>
