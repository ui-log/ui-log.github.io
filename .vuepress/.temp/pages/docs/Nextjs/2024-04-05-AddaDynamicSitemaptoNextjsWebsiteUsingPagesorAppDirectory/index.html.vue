<template><div><p><img src="@source/docs/Nextjs/2024-04-05-AddaDynamicSitemaptoNextjsWebsiteUsingPagesorAppDirectory/img/AddaDynamicSitemaptoNextjsWebsiteUsingPagesorAppDirectory_0.png" alt="AddaDynamicSitemaptoNextjsWebsiteUsingPagesorAppDirectory_0"></p>
<p>최신 버전은 https://claritydev.net 에서 이용할 수 있어요.</p>
<p>이 게시물에서는 Next.js 웹사이트에 동적 사이트맵을 추가하는 방법을 살펴볼 거예요. 먼저 &quot;pages&quot; 디렉토리를 사용하여 사이트맵을 추가한 다음 새 &quot;app&quot; 디렉토리를 활용해 업데이트할 거에요. 우리는 동적 사이트맵을 구현할 건데, 이는 웹사이트에 새 페이지가 추가되거나 제거될 때 자동으로 업데이트되는 기능을 제공해요. 이는 블로그 웹사이트와 같이 정기적으로 콘텐츠가 추가되는 사이트를 위해서 특히 SEO 목적에 더 유용해요. 구현 세부 사항에 집중하기 전에, 사이트맵이 무엇이며 사용 용도에 대해 간략히 살펴보고 정적과 동적 사이트맵 간의 주요 차이점에 대해 이야기할 거예요. 이 게시물을 마치면 Next.js 웹사이트에 완전히 작동하는 동적 사이트맵이 준비돼 있을 거에요.</p>
<h1 id="사이트맵이란-무엇이며-웹사이트에-필요한가요" tabindex="-1"><a class="header-anchor" href="#사이트맵이란-무엇이며-웹사이트에-필요한가요" aria-hidden="true">#</a> 사이트맵이란 무엇이며 웹사이트에 필요한가요?</h1>
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
<p>사이트맵은 웹사이트의 모든 페이지 목록과 서로 간의 관계를 포함하는 파일입니다. 이 파일은 검색 엔진이 웹사이트를 순회하고 웹사이트의 구조를 이해하는 데 도움이 됩니다. 사이트맵은 각 페이지에 대한 중요한 정보를 제공할 수도 있습니다. 예를 들어, 마지막으로 업데이트된 날짜나 얼마나 자주 변경되는지와 같은 정보를 포함할 수 있습니다. 사이트맵은 특히 대규모 웹사이트나 복잡한 구조를 가진 웹사이트에서 중요합니다. 왜냐하면 이는 검색 엔진이 사이트의 모든 페이지를 발견하고 색인화하기 쉽게 만들어줄 수 있기 때문입니다. 그러나 Google에 따르면, 사이트맵은 많은 외부 링크가 없는 새로운 웹사이트나 서로 잘 연결되지 않은 콘텐츠가 있는 웹사이트에도 도움이 됩니다. 어쨌든, 사이트맵은 가치 있는 정보를 제공하여 웹사이트의 SEO를 개선하고 웹사이트 네비게이션을 더 쉽게 만들어 줄 수 있습니다.</p>
<h1 id="정적-대-동적-사이트맵" tabindex="-1"><a class="header-anchor" href="#정적-대-동적-사이트맵" aria-hidden="true">#</a> 정적 대 동적 사이트맵</h1>
<p>사이트맵에는 두 가지 주요 유형이 있습니다: 정적과 동적. 정적 사이트맵은 수동으로 생성되며 웹사이트의 모든 페이지를 나열합니다. 이 유형의 사이트맵은 일반적으로 XML 형식으로 생성되어 검색 엔진에 제출되어 사이트의 모든 페이지를 발견하고 색인화하는 데 도움을 줍니다. 반면, 동적 사이트맵은 자동으로 생성되며 새로운 페이지가 추가되거나 제거될 때 웹사이트 서버에서 업데이트됩니다. 이 유형의 사이트맵은 대규모나 복잡한 웹사이트에서 수동으로 모든 페이지를 추적하는 것이 어려울 수 있기 때문에 유용합니다. 사이트의 구조를 이해하는 데 도움이 되는 두 유형의 사이트맵이지만, 동적 사이트맵은 일반적으로 수동 업데이트가 필요 없어 더 효율적으로 간주됩니다. 이러한 이유로 Next.js 웹사이트에 동적 웹사이트 사이트맵을 추가할 것입니다. 이 사이트맵은 새로운 페이지가 추가될 때 자동으로 업데이트되며, 예를 들어 새 블로그 글이 게시될 때 자동으로 업데이트될 것입니다.</p>
<h1 id="페이지-디렉토리에-사이트맵-추가하기" tabindex="-1"><a class="header-anchor" href="#페이지-디렉토리에-사이트맵-추가하기" aria-hidden="true">#</a> 페이지 디렉토리에 사이트맵 추가하기</h1>
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
<p>먼저, &quot;pages&quot; 디렉토리를 기반으로 한 사이트에 사이트맵을 추가하는 방법에 대해 논의해 보겠습니다. 먼저, 페이지 폴더 안에 sitemap.xml.js 파일을 만들고 기본 SiteMap 컴포넌트를 추가합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// pages/sitemap.xml.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">SiteMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 컴포넌트의 유일한 목적은 sitemap.xml 엔드포인트에 요청이 들어왔을 때 사이트맵 페이지를 렌더링하는 것입니다. 실제 내용은 getServerSideProps 함수에서 오게 되며, 해당 함수는 모든 포스트의 URL을 가져와 sitemap 렌더링 함수를 호출하고 text/xml 콘텐츠 유형의 헤더와 함께 응답을 작성합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// pages/sitemap.xml.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> getSortedPostsData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../lib/posts"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getServerSideProps</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> res <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token function">getSortedPostsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 블로그 데이터로 XML 사이트맵 생성</span>
  <span class="token keyword">const</span> sitemap <span class="token operator">=</span> <span class="token function">generateSiteMap</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span><span class="token punctuation">;</span>

  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"text/xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 브라우저로 XML 보내기</span>
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>sitemap<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">SiteMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기서 getServerSideProps의 목적은 /sitemap.xml URL에 액세스할 때 사이트맵과 함께 사용자 정의 응답을 보내는 것이므로 SiteMap 컴포넌트에 빈 props 객체를 반환합니다. getSortedPostsData는 정렬된 블로그 글을 가져오는 우리의 API입니다.</p>
<p>현재 Next.js 웹사이트를 사용 중이고 연속적인 배포 파이프라인을 추가하려고 하시나요?</p>
<p>그렇다면, DigitalOcean에 GitHub Actions를 사용하여 Next.js 웹사이트를 지속적으로 배포하는 방법에 대해 도움이 될 수 있는 기사를 작성했습니다.</p>
<p>마지막 단계는 generateSiteMap 함수를 구현하는 것인데, 이 함수는 모든 글에서 URL을 추출하고, 모든 정적 페이지에 링크를 추가하고, 모든 것을 XML 형식으로 렌더링하는 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// pages/sitemap.xml.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> getSortedPostsData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../lib/posts"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">URL</span> <span class="token operator">=</span> <span class="token string">"https://claritydev.net"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">generateSiteMap</span><span class="token punctuation">(</span><span class="token parameter">posts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;?xml version="1.0" encoding="UTF-8"?>
   &lt;urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     &lt;!-- 정적 URL을 수동으로 추가 -->
     &lt;url>
       &lt;loc></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/loc>
     &lt;/url>
     &lt;url>
       &lt;loc></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/portfolio&lt;/loc>
     &lt;/url>
      &lt;url>
       &lt;loc></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/blog&lt;/loc>
     &lt;/url>
     </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>posts
       <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
           &lt;url>
               &lt;loc></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/blog/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/loc>
           &lt;/url>
         </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
       <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)
       .join("")}
   &lt;/urlset>
 </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getServerSideProps</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> res <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token function">getSortedPostsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 블로그 데이터를 사용하여 XML 사이트맵 생성</span>
  <span class="token keyword">const</span> sitemap <span class="token operator">=</span> <span class="token function">generateSiteMap</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span><span class="token punctuation">;</span>

  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"text/xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 브라우저로 XML 전송</span>
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>sitemap<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">SiteMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서는 URL만 추가하고 있지만 lastmod나 priority와 같은 다른 속성도 추가할 수 있습니다. sitemaps.org에는 모든 가능한 속성에 대한 자세한 내용이 있습니다.</p>
<p>또 하나 주목할 점은 XML을 문자열로 생성하고 JSX가 아니라는 것입니다. 따라서 여기서는 JavaScript 템플릿 리터럴을 사용해야 합니다.</p>
<p>URL을 자신의 것으로 교체하고 앱을 시작하고 yoursite.com/sitemap.xml로 이동한 후 동적으로 생성된 사이트맵을 볼 수 있습니다.</p>
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
<h1 id="앱-디렉토리에-사이트맵-추가하기" tabindex="-1"><a class="header-anchor" href="#앱-디렉토리에-사이트맵-추가하기" aria-hidden="true">#</a> 앱 디렉토리에 사이트맵 추가하기</h1>
<p>Next.js 버전 13에서는 &quot;페이지&quot; 디렉토리를 장기적으로 대체할 &quot;앱&quot; 디렉토리가 소개되었습니다. 이 변경으로 인해 getServerSideProps를 사용한 서버 사이드 렌더링은 서버 컴포넌트로 대체되었습니다. 이에 따라 저희의 경우에는 사이트맵 페이지를 렌더링하기 위해 getServerSideProps를 더 이상 사용할 수 없게 되었습니다.</p>
<p>다행히도 Route Handlers를 사용하여 동일한 동작을 달성할 수 있습니다. Route Handlers를 사용하면 웹 요청 및 응답 API를 사용하여 특정 경로에 대한 사용자 정의 요청 핸들러를 만들 수 있습니다. 이는 &quot;페이지&quot; 디렉토리의 API 라우트를 대체합니다.</p>
<p>문서를 자세히 살펴보면 Route Handlers를 사용해 UI가 아닌 콘텐츠를 반환하는 데에도 사용할 수 있음을 알 수 있습니다. 먼저 sitemap.xml.js 파일을 앱 디렉토리로 이동하고 Route Handlers가 정의된 파일의 표준 이름인 route.js로 이름을 변경해야 합니다. 추가로 sitemap.xml 폴더 내부에 중첩해야 합니다.</p>
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
<p>아래는 이전 &quot;pages&quot;와 새 &quot;app&quot; 디렉토리 구조의 비교입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Before</span>
blog<span class="token operator">/</span>
  pages<span class="token operator">/</span>
    sitemap<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>js

<span class="token comment">// After</span>
blog<span class="token operator">/</span>
  app<span class="token operator">/</span>
    sitemap<span class="token punctuation">.</span>xml<span class="token operator">/</span>
         route<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이후에는 route.js를 수정하여 이 경로에 대한 사용자 정의 GET 요청 처리기를 만들 것이며, 이는 생성된 사이트맵과 함께 사용자 정의 응답을 반환할 것입니다. 추가로, 더 이상 필요하지 않기 때문에 getServerSideProps 함수와 SiteMap 컴포넌트를 제거할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// app/sitemap.xml/route.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> getSortedPostsData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../lib/posts"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">URL</span> <span class="token operator">=</span> <span class="token string">"https://claritydev.net"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">generateSiteMap</span><span class="token punctuation">(</span><span class="token parameter">posts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;?xml version="1.0" encoding="UTF-8"?>
   &lt;urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     &lt;!--We manually set the two URLs we know already-->
     &lt;url>
       &lt;loc></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/loc>
     &lt;/url>
     &lt;url>
       &lt;loc></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/portfolio&lt;/loc>
     &lt;/url>
      &lt;url>
       &lt;loc></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/blog&lt;/loc>
     &lt;/url>
     </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>posts
       <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
           &lt;url>
               &lt;loc></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/blog/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/loc>
           &lt;/url>
         </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
       <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)
       .join("")}
   &lt;/urlset>
 </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token function">getSortedPostsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token function">generateSiteMap</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"Cache-control"</span><span class="token operator">:</span> <span class="token string">"public, s-maxage=86400, stale-while-revalidate"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"content-type"</span><span class="token operator">:</span> <span class="token string">"application/xml"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기에는 1일의 s-maxage 및 stale-while-revalidate 지시문을 추가했습니다. 이에 대한 더 많은 정보는 MDN에서 확인할 수 있습니다.</p>
<p>이제 동일한 yoursit.com/sitemap.xml URL로 이동하면 동일한 사이트맵이 표시되지만 이제 &quot;app&quot; 디렉토리에서 렌더링됩니다.</p>
<h1 id="요약" tabindex="-1"><a class="header-anchor" href="#요약" aria-hidden="true">#</a> 요약</h1>
<p>웹사이트에 사이트맵을 추가하는 것은 특히 대형 웹사이트의 경우 SEO에서 중요한 측면입니다. 이를 통해 검색 엔진이 사이트의 구조를 이해하고 모든 페이지를 발견하며 효율적으로 크롤링할 수 있습니다.</p>
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
<p>이 기사에서는 Next.js 웹 사이트에 동적 사이트맵을 추가하는 방법을 보여줬어요. 이 방법을 사용하면 새로운 페이지가 추가되거나 제거될 때 자동으로 업데이트되는 동적 사이트맵을 만들 수 있어요. &quot;pages&quot; 또는 &quot;app&quot; 디렉토리를 사용하여 Next.js 웹 사이트에 동적 사이트맵을 생성하는 방법도 설명되었어요.</p>
<p>동적 사이트맵은 특히 크거나 복잡한 웹 사이트의 경우 정적 사이트맵보다 더 효율적이에요. 이 기사에서 설명된 기술을 구현함으로써, 웹사이트를 검색 엔진에서 쉽게 발견할 수 있도록 하여 전반적인 SEO 성능을 향상시킬 수 있어요.</p>
<h1 id="참고-자료와-자원" tabindex="-1"><a class="header-anchor" href="#참고-자료와-자원" aria-hidden="true">#</a> 참고 자료와 자원</h1>
<ul>
<li>Google 사이트맵 개요</li>
<li>MDN Cache Control</li>
<li>MDN Web Request API</li>
<li>MDN Web Response API</li>
<li>Next-sitemap 패키지</li>
<li>Next.js API 라우트 문서</li>
<li>Next.js 라우트 핸들러 문서</li>
<li>Next.js getServerSideProps 문서</li>
<li>Next.js 새 app 디렉토리</li>
<li>사이트맵 프로토콜</li>
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
<p>원래 게시된 위치: https://claritydev.net.</p>
<h1 id="코딩-업-레벨" tabindex="-1"><a class="header-anchor" href="#코딩-업-레벨" aria-hidden="true">#</a> 코딩 업 레벨</h1>
<p>우리 커뮤니티에 참여해 주셔서 감사합니다! 떠나시기 전에:</p>
<ul>
<li>👏 활발한 찬성 및 작성자 팔로우 👉</li>
<li>📰 코딩 업 레벨 게시물에서 더 많은 내용 확인하기</li>
<li>💰 무료 코딩 면접 과정 ⇒ 강좌 보기</li>
<li>🔔 팔로우하기: Twitter | LinkedIn | 뉴스레터</li>
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
<p>🚀👉 레벨 업 인재 컬렉티브에 가입하여 멋진 일자리를 찾아보세요!</p>
</div></template>
