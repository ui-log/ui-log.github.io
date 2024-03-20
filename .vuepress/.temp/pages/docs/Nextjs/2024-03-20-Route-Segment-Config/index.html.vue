<template><div><h1 id="nextjs-14에서-라우트-세그먼트-구성-하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-라우트-세그먼트-구성-하는-방법" aria-hidden="true">#</a> Nextjs 14에서 라우트 세그먼트 구성 하는 방법</h1>
<p>Route Segment 옵션을 사용하면 페이지, 레이아웃 또는 라우트 핸들러의 동작을 직접 설정할 수 있습니다. 다음 변수를 직접 내보내어 구성할 수 있습니다:</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#dynamic">dynamic</a></td>
<td><code v-pre>'auto'   | 'force-dynamic'        | 'error'      | 'force-static'</code></td>
<td><code v-pre>'auto'</code></td>
</tr>
<tr>
<td><a href="#dynamicparams">dynamicParams</a></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td><a href="#revalidate">revalidate</a></td>
<td><code v-pre>false    | 0                      | number</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td><a href="#fetchcache">fetchCache</a></td>
<td><code v-pre>'auto'   | 'default-cache'        | 'only-cache' | 'force-cache'   | 'force-no-store' | 'default-no-store' | 'only-no-store'</code></td>
<td><code v-pre>'auto'</code></td>
</tr>
<tr>
<td><a href="#runtime">runtime</a></td>
<td><code v-pre>'nodejs' | 'edge'</code></td>
<td><code v-pre>'nodejs'</code></td>
</tr>
<tr>
<td><a href="#preferredregion">preferredRegion</a></td>
<td><code v-pre>'auto'   | 'global'               | 'home'       | string          | string[]</code></td>
<td><code v-pre>'auto'</code></td>
</tr>
<tr>
<td><a href="#maxduration">maxDuration</a></td>
<td><code v-pre>number</code></td>
<td>배포 플랫폼에서 설정함</td>
</tr>
</tbody>
</table>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> dynamic <span class="token operator">=</span> <span class="token string">"auto"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> dynamicParams <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> revalidate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> fetchCache <span class="token operator">=</span> <span class="token string">"auto"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> runtime <span class="token operator">=</span> <span class="token string">"nodejs"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> preferredRegion <span class="token operator">=</span> <span class="token string">"auto"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> maxDuration <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
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
<blockquote>
<p>좋은 정보:
현재 구성 옵션의 값은 정적으로 분석될 수 있어야 합니다. 예를 들어 revalidate = 600은 유효하지만 revalidate = 60 * 10은 유효하지 않습니다.</p>
</blockquote>
<h2 id="옵션" tabindex="-1"><a class="header-anchor" href="#옵션" aria-hidden="true">#</a> 옵션</h2>
<h3 id="동적" tabindex="-1"><a class="header-anchor" href="#동적" aria-hidden="true">#</a> 동적</h3>
<p>레이아웃이나 페이지의 동적 동작을 완전히 정적 또는 완전히 동적으로 변경합니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> dynamic <span class="token operator">=</span> <span class="token string">"auto"</span><span class="token punctuation">;</span>
<span class="token comment">// 'auto' | 'force-dynamic' | 'error' | 'force-static'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>좋아요: 앱 디렉토리의 새 모델은 페이지 디렉토리의 getServerSideProps 및 getStaticProps의 이진 온오프 모델보다 가져오기 요청 수준에서 세밀한 캐싱 제어를 선호합니다. dynamic 옵션은 편의를 위해 이전 모델로 다시 돌아가는 방법이며 간단한 이전 경로를 제공합니다.</p>
</blockquote>
<ul>
<li><code v-pre>auto</code> (기본값): 모든 컴포넌트가 동적 동작으로 옵션화되지 않도록 가능한 한 많이 캐시하는 기본 옵션입니다.</li>
<li><code v-pre>force-dynamic</code>: 강제적인 동적 렌더링, 사용자마다 요청 시 경로를 렌더링하는 결과를 가져옵니다. 이 옵션은 페이지 디렉토리의 getServerSideProps()와 동등합니다.</li>
<li><code v-pre>error</code>: 정적 렌더링을 강제하고 레이아웃이나 페이지의 데이터를 캐시하지만, 동적 함수나 캐시되지 않은 데이터를 사용하는 컴포넌트가 있을 경우 오류를 발생시킵니다. 이 옵션은 다음과 같습니다:
getStaticProps()를 페이지 디렉토리에서 사용합니다.
모든 레이아웃 또는 페이지에서 fetch() 요청의 옵션을 { cache: <code v-pre>force-cache</code> }로 설정합니다.
섹션 구성을 fetchCache = <code v-pre>only-cache</code>, dynamicParams = false로 설정합니다.
dynamic = <code v-pre>error</code>는 dynamicParams의 기본값을 true에서 false로 변경합니다. generateStaticParams로 생성된 동적 매개변수가 아닌 동적 매개변수를 사용하여 동적 페이지를 다시 렌더링하려면 dynamicParams = true로 수동 설정하면 됩니다.</li>
<li>getStaticProps()를 페이지 디렉토리에서 사용합니다.</li>
<li>모든 레이아웃 또는 페이지에서 fetch() 요청의 옵션을 { cache: <code v-pre>force-cache</code> }로 설정합니다.</li>
<li>섹션 구성을 fetchCache = <code v-pre>only-cache</code>, dynamicParams = false로 설정합니다.</li>
<li>dynamic = <code v-pre>error</code>는 dynamicParams의 기본값을 true에서 false로 변경합니다. generateStaticParams로 생성된 동적 매개변수가 아닌 동적 매개변수를 사용하여 동적 페이지를 다시 렌더링하려면 dynamicParams = true로 수동 설정하면 됩니다.</li>
<li><code v-pre>force-static</code>: 정적 렌더링을 강제하고 레이아웃이나 페이지의 데이터를 캐시하는 옵션으로 cookies(), headers() 및 useSearchParams()가 빈 값을 반환하도록 합니다.</li>
</ul>
<blockquote>
<p>좋아요:
getServerSideProps 및 getStaticProps에서 동적으로 마이그레이션하는 방법에 대한 지침은 업그레이드 가이드에서 찾을 수 있습니다.```</p>
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
<h3 id="dynamicparams" tabindex="-1"><a class="header-anchor" href="#dynamicparams" aria-hidden="true">#</a> dynamicParams</h3>
<p>generateStaticParams로 생성되지 않은 동적 세그먼트가 방문되었을 때 어떻게 작동할지 제어합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> dynamicParams <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// true | false,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>true (기본값): generateStaticParams에 포함되지 않은 동적 세그먼트는 필요에 따라 생성됩니다.</li>
<li>false: generateStaticParams에 포함되지 않은 동적 세그먼트는 404를 반환합니다.</li>
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
<blockquote>
<p>알아두면 좋은 사항:
이 옵션은 페이지 디렉토리에서 getStaticPaths의 fallback: true | false | blocking 옵션을 대체합니다.
dynamicParams = true 인 경우 세그먼트는 스트리밍 서버 렌더링을 사용합니다.
dynamic = <code v-pre>error</code> 및 dynamic = <code v-pre>force-static</code>을 사용하면 dynamicParams의 기본값을 false로 변경합니다.</p>
</blockquote>
<h3 id="revalidate" tabindex="-1"><a class="header-anchor" href="#revalidate" aria-hidden="true">#</a> revalidate</h3>
<p>레이아웃이나 페이지에 대한 기본 재유효화 시간을 설정합니다. 이 옵션은 개별 fetch 요청에서 설정된 revalidate 값에 재정의되지 않습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> revalidate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token comment">// false | 0 | number</span>
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
<ul>
<li>false (기본값): <code v-pre>force-cache</code>로 캐시 옵션을 설정한 모든 페치 요청을 캐시하는 기본 휴리스틱 또는 동적 기능 사용 전에 발견된 요청을 캐시합니다. 실질적으로 revalidate: Infinity과 동의어이며, 이는 자원이 무기한으로 캐시되어야 함을 의미합니다. 여전히 개별 페치 요청이 캐시: <code v-pre>no-store</code> 또는 revalidate: 0을 사용하여 캐시를 피하거나 경로를 동적으로 렌더링하도록 할 수 있습니다. 또는 revalidate를 경로 기본값보다 작은 양수로 설정하여 경로의 다시 유효화 빈도를 증가할 수 있습니다.</li>
<li>0: 동적 기능이나 캐시되지 않은 데이터 페치가 발견되지 않더라도 레이아웃이나 페이지가 항상 동적으로 렌더링되도록 합니다. 이 옵션은 캐시 옵션을 설정하지 않은 페치 요청의 기본값을 <code v-pre>no-store</code>로 변경하지만 <code v-pre>force-cache</code>를 선택하거나 양수 revalidate를 사용하는 페치 요청은 그대로 유지됩니다.</li>
<li>숫자: (초 단위) 레이아웃이나 페이지의 기본 재검증 빈도를 n 초로 설정합니다.</li>
</ul>
<blockquote>
<p>알아두세요: revalidate 옵션은 Node.js 런타임을 사용할 때에만 사용할 수 있습니다. 즉, runtime = <code v-pre>edge</code>로 revalidate 옵션을 사용하는 것은 작동하지 않습니다.</p>
</blockquote>
<h4 id="재검증-빈도" tabindex="-1"><a class="header-anchor" href="#재검증-빈도" aria-hidden="true">#</a> 재검증 빈도</h4>
<ul>
<li>단일 경로의 각 레이아웃과 페이지를 통해 가장 낮은 revalidate가 전체 경로의 재검증 빈도를 결정합니다. 이로써 하위 페이지가 상위 레이아웃과 동일한 빈도로 다시 유효화됩니다.</li>
<li>개별 페치 요청은 경로의 기본 재검증보다 낮은 revalidate를 설정하여 전체 경로의 재검증 빈도를 높일 수 있습니다. 이를 통해 일부 기준을 기반으로 특정 경로에 대해 더 자주 재검증하도록 동적으로 선택할 수 있습니다.</li>
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
<h3 id="fetchcache" tabindex="-1"><a class="header-anchor" href="#fetchcache" aria-hidden="true">#</a> fetchCache</h3>
<h3 id="runtime" tabindex="-1"><a class="header-anchor" href="#runtime" aria-hidden="true">#</a> runtime</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> runtime <span class="token operator">=</span> <span class="token string">"노드JS"</span><span class="token punctuation">;</span>
<span class="token comment">// '노드JS' | '에지'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>노드JS</code> (기본값)</li>
<li><code v-pre>에지</code></li>
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
<p>Edge 및 Node.js 런타임에 대해 더 알아보세요.</p>
<h3 id="preferredregion" tabindex="-1"><a class="header-anchor" href="#preferredregion" aria-hidden="true">#</a> preferredRegion</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> preferredRegion <span class="token operator">=</span> <span class="token string">"auto"</span><span class="token punctuation">;</span>
<span class="token comment">// 'auto' | 'global' | 'home' | ['iad1', 'sfo1']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>preferredRegion 및 지원되는 지역은 배포 플랫폼에 따라 달라집니다.</p>
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
<p>알아 두면 좋은 사실:
만약 preferredRegion이 지정되지 않았다면, 가장 가까운 부모 레이아웃의 옵션을 상속받습니다.
루트 레이아웃은 기본적으로 모든 지역을 기본값으로 설정합니다.</p>
</blockquote>
<h3 id="최대-실행-시간" tabindex="-1"><a class="header-anchor" href="#최대-실행-시간" aria-hidden="true">#</a> 최대 실행 시간</h3>
<p>기본적으로 Next.js는 서버 측 로직의 실행(페이지 렌더링 또는 API 처리)에 제한을 두지 않습니다. 배포 플랫폼은 Next.js 빌드 출력에서 maxDuration을 사용하여 특정 실행 제한을 추가할 수 있습니다. 예를 들어, Vercel에서</p>
<p>참고: 이 설정은 Next.js 13.4.10 이상에서 지원됩니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> maxDuration <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>좋은 정보:
서버 액션을 사용하는 경우 페이지 수준에서 maxDuration을 설정하여 페이지에서 사용되는 모든 서버 액션의 기본 타임아웃을 변경할 수 있습니다.</p>
</blockquote>
<h3 id="generatestaticparams" tabindex="-1"><a class="header-anchor" href="#generatestaticparams" aria-hidden="true">#</a> generateStaticParams</h3>
<p>generateStaticParams 함수는 동적 라우트 세그먼트와 함께 사용되어 빌드 시간에 동적으로 요청 시간이 아닌 정적으로 생성될 라우트 세그먼트 매개변수 목록을 정의하는 데 사용할 수 있습니다.</p>
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
<p>더 많은 세부 정보는 API 참조를 참조하세요.</p>
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
