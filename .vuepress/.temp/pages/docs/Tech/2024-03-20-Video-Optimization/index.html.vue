<template><div><h1 id="비디오-최적화" tabindex="-1"><a class="header-anchor" href="#비디오-최적화" aria-hidden="true">#</a> 비디오 최적화</h1>
<p>이 페이지에서는 Next.js 애플리케이션에서 비디오를 사용하는 방법을 안내하며, 성능에 영향을주지 않고 비디오 파일을 저장하고 표시하는 방법을 보여줍니다.</p>
<h2 id="video-및-iframe-사용하기" tabindex="-1"><a class="header-anchor" href="#video-및-iframe-사용하기" aria-hidden="true">#</a> <code v-pre>&lt;video&gt;</code> 및 <code v-pre>&lt;iframe&gt;</code> 사용하기</h2>
<p>비디오를 페이지에 임베드하려면 직접 비디오 파일에는 HTML <code v-pre>&lt;video&gt;</code> 태그를, 외부 플랫폼 호스팅 비디오에는 <code v-pre>&lt;iframe&gt;</code>을 사용할 수 있습니다.</p>
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
<h3 id="video" tabindex="-1"><a class="header-anchor" href="#video" aria-hidden="true">#</a> <code v-pre>&lt;video&gt;</code></h3>
<p>HTML <code v-pre>&lt;video&gt;</code> tag는 자체 호스팅되거나 직접 제공되는 비디오 콘텐츠를 재생하고 외관을 완전히 제어할 수 있도록 해줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Video</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>video width<span class="token operator">=</span><span class="token string">"320"</span> height<span class="token operator">=</span><span class="token string">"240"</span> controls preload<span class="token operator">=</span><span class="token string">"none"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>source src<span class="token operator">=</span><span class="token string">"/path/to/video.mp4"</span> type<span class="token operator">=</span><span class="token string">"video/mp4"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>track src<span class="token operator">=</span><span class="token string">"/path/to/captions.vtt"</span> kind<span class="token operator">=</span><span class="token string">"subtitles"</span> srcLang<span class="token operator">=</span><span class="token string">"en"</span> label<span class="token operator">=</span><span class="token string">"English"</span> <span class="token operator">/</span><span class="token operator">></span>
      브라우저가 비디오 태그를 지원하지 않습니다<span class="token punctuation">.</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>video<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h3 id="일반적인-video-태그-속성" tabindex="-1"><a class="header-anchor" href="#일반적인-video-태그-속성" aria-hidden="true">#</a> 일반적인 <code v-pre>&lt;video&gt;</code> 태그 속성</h3>
<table>
<thead>
<tr>
<th>속성</th>
<th>설명</th>
<th>예시 값</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>src</code></td>
<td>비디오 파일의 소스를 지정합니다.</td>
<td><code v-pre>&lt;video src=&quot;/path/to/video.mp4&quot; /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td>비디오 플레이어의 너비를 설정합니다.</td>
<td><code v-pre>&lt;video width=&quot;320&quot; /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>height</code></td>
<td>비디오 플레이어의 높이를 설정합니다.</td>
<td><code v-pre>&lt;video height=&quot;240&quot; /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>controls</code></td>
<td>존재하면 기본 재생 컨트롤 세트를 표시합니다.</td>
<td><code v-pre>&lt;video controls /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>autoPlay</code></td>
<td>페이지 로드시 비디오를 자동으로 재생합니다. 참고: 자동재생 정책은 브라우저마다 다릅니다.</td>
<td><code v-pre>&lt;video autoPlay /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>loop</code></td>
<td>비디오 재생을 반복합니다.</td>
<td><code v-pre>&lt;video loop /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>muted</code></td>
<td>기본적으로 오디오를 음소거합니다. <code v-pre>autoPlay</code>와 함께 사용됩니다.</td>
<td><code v-pre>&lt;video muted /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>preload</code></td>
<td>비디오를 어떻게 미리로드할지를 지정합니다. 값: <code v-pre>none</code>, <code v-pre>metadata</code>, <code v-pre>auto</code>.</td>
<td><code v-pre>&lt;video preload=&quot;none&quot; /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>playsInline</code></td>
<td>iOS 장치에서 인라인 재생을 가능하게 하며 iOS Safari에서 자동 재생이 동작하도록합니다.</td>
<td><code v-pre>&lt;video playsInline /&gt;</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p>참고: autoPlay 속성을 사용할 때 대부분의 브라우저에서 비디오가 자동으로 재생되도록하려면 음소거 속성을 포함하고 iOS 장치와 호환되도록하려면 playsInline 속성도 포함하는 것이 중요합니다.
MDN 문서를 참조하면 비디오 속성의 포괄적인 목록을 확인할 수 있어요.</p>
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
<h3 id="비디오-최적의-방법" tabindex="-1"><a class="header-anchor" href="#비디오-최적의-방법" aria-hidden="true">#</a> 비디오 최적의 방법</h3>
<ul>
<li>대체 콘텐츠: <code v-pre>&lt;video&gt;</code> 태그를 사용할 때, 비디오 재생을 지원하지 않는 브라우저를 위해 태그 내에 대체 콘텐츠를 포함시켜주세요.</li>
<li>자막 또는 캡션: 청각이나 힘들게 듣는 사용자를 위해 자막 또는 캡션을 포함시켜주세요. <code v-pre>&lt;video&gt;</code> 요소와 함께 <code v-pre>&lt;track&gt;</code> 태그를 활용하여 캡션 파일 소스를 지정해주세요.</li>
<li>접근성 있는 컨트롤: 표준 HTML5 비디오 컨트롤은 키보드 탐색 및 스크린 리더 호환성을 위해 권장됩니다. 고급 기능이 필요할 경우, react-player나 video.js와 같은 타사 플레이어를 고려해주세요. 이들은 접근성 있는 컨트롤과 일관된 브라우저 경험을 제공합니다.</li>
</ul>
<h3 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> <code v-pre>&lt;iframe&gt;</code></h3>
<p>HTML <code v-pre>&lt;iframe&gt;</code> 태그를 사용하면 YouTube나 Vimeo와 같은 외부 플랫폼에서 비디오를 임베드할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>iframe src<span class="token operator">=</span><span class="token string">"https://www.youtube.com/watch?v=gfU1iZnjRZM"</span> frameborder<span class="token operator">=</span><span class="token string">"0"</span> allowfullscreen <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="일반-iframe-태그-속성" tabindex="-1"><a class="header-anchor" href="#일반-iframe-태그-속성" aria-hidden="true">#</a> 일반 <code v-pre>&lt;iframe&gt;</code> 태그 속성</h3>
<table>
<thead>
<tr>
<th>속성</th>
<th>설명</th>
<th>예시 값</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>src</code></td>
<td>삽입할 페이지의 URL입니다.</td>
<td><code v-pre>&lt;iframe src=&quot;https://example.com&quot; /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td>iframe의 너비를 설정합니다.</td>
<td><code v-pre>&lt;iframe width=&quot;500&quot; /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>height</code></td>
<td>iframe의 높이를 설정합니다.</td>
<td><code v-pre>&lt;iframe height=&quot;300&quot; /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>frameborder</code></td>
<td>iframe 주변에 테두리를 표시할지 여부를 지정합니다.</td>
<td><code v-pre>&lt;iframe frameborder=&quot;0&quot; /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>allowfullscreen</code></td>
<td>iframe 콘텐츠를 전체 화면 모드로 표시할 수 있도록 합니다.</td>
<td><code v-pre>&lt;iframe allowfullscreen /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>sandbox</code></td>
<td>iframe 내부 콘텐츠에 추가 제한을 활성화합니다.</td>
<td><code v-pre>&lt;iframe sandbox /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>loading</code></td>
<td>로딩 동작을 최적화합니다(예: 지연 로딩).</td>
<td><code v-pre>&lt;iframe loading=&quot;lazy&quot; /&gt;</code></td>
</tr>
<tr>
<td><code v-pre>title</code></td>
<td>접근성을 지원하기 위해 iframe에 제목을 제공합니다.</td>
<td><code v-pre>&lt;iframe title=&quot;설명&quot; /&gt;</code></td>
</tr>
</tbody>
</table>
<p>iframe 속성의 상세한 목록은 MDN 문서를 참조하세요.</p>
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
<h3 id="비디오-임베딩-방법-선택하기" tabindex="-1"><a class="header-anchor" href="#비디오-임베딩-방법-선택하기" aria-hidden="true">#</a> 비디오 임베딩 방법 선택하기</h3>
<p>Next.js 앱에 비디오를 임베드하는 두 가지 방법이 있습니다:</p>
<ul>
<li>Self-hosted 또는 직접 비디오 파일: <code v-pre>&lt;video&gt;</code> 태그를 사용하여 self-hosted 비디오를 임베드하면 플레이어의 기능과 외관에 대한 자세한 제어가 필요한 상황에 적합합니다. Next.js의 이 통합 방법을 사용하면 비디오 콘텐츠를 사용자 정의하고 제어할 수 있습니다.</li>
<li>비디오 호스팅 서비스 사용(YouTube, Vimeo 등): YouTube 또는 Vimeo와 같은 비디오 호스팅 서비스의 경우, <code v-pre>&lt;iframe&gt;</code> 태그를 사용하여 그들의 iframe 기반 플레이어를 임베드합니다. 이 방법은 플레이어에 대한 일부 제어를 제한하지만, 이러한 플랫폼이 제공하는 사용 편의성과 기능을 제공합니다.
귀하의 응용 프로그램 요구 사항 및 전달하려는 사용자 경험과 일치하는 임베딩 방법을 선택하세요.</li>
</ul>
<h3 id="외부-호스트된-비디오-임베딩" tabindex="-1"><a class="header-anchor" href="#외부-호스트된-비디오-임베딩" aria-hidden="true">#</a> 외부 호스트된 비디오 임베딩</h3>
<p>외부 플랫폼에서 비디오를 임베드하려면 Next.js를 사용하여 비디오 정보를 가져와 로드 중에 대체 상태를 처리하기 위해 React Suspense를 사용할 수 있습니다.</p>
<ol>
<li>비디오 임베딩을 위한 서버 구성 요소 생성
첫 번째 단계는 적절한 iframe을 생성하는 서버 구성 요소를 만드는 것입니다. 이 구성 요소는 비디오의 소스 URL을 가져와 iframe을 렌더링할 것입니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">VideoComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> src <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getVideoSrc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>iframe src<span class="token operator">=</span><span class="token punctuation">{</span>src<span class="token punctuation">}</span> frameborder<span class="token operator">=</span><span class="token string">"0"</span> allowfullscreen <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<ol start="2">
<li>React Suspense를 사용하여 비디오 구성 요소를 스트리밍
비디오를 임베딩하는 서버 구성 요소를 만든 후, 다음 단계는 React Suspense를 사용하여 해당 구성 요소를 스트리밍하는 것입니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VideoComponent <span class="token keyword">from</span> <span class="token string">"../ui/VideoComponent.jsx"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section<span class="token operator">></span>
      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>p<span class="token operator">></span>비디오를 불러오는 중입니다<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>VideoComponent <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* 페이지의 다른 콘텐츠 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋아요: 외부 플랫폼에서 비디오를 임베드할 때 다음과 같은 최선의 방법을 고려해보세요:
비디오 임베드가 반응형인지 확인하세요. CSS를 사용하여 iframe이나 비디오 플레이어가 다른 화면 크기에 맞게 적응하도록 만드세요.
네트워크 상황에 따라 비디오를 로드하는 전략을 구현하세요. 특히 데이터 요금제 제한이 있는 사용자들을 위해 이 점에 유의하세요.
이 접근 방식은 페이지가 차단되는 것을 방지하여 사용자가 비디오 컴포넌트가 스트리밍되는 동안 페이지와 상호 작용할 수 있게 합니다.
더 매력적이고 정보를 제공하는 로딩 경험을 위해 후행 UI로 로딩 스켈레톤을 사용하는 것을 고려해보세요. 간단한 로딩 메시지 대신 비디오 플레이어와 유사한 스켈레톤을 보여줄 수 있습니다.</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VideoComponent <span class="token keyword">from</span> <span class="token string">"../ui/VideoComponent.jsx"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VideoSkeleton <span class="token keyword">from</span> <span class="token string">"../ui/VideoSkeleton.jsx"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section<span class="token operator">></span>
      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>VideoSkeleton <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>VideoComponent <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* 페이지의 다른 콘텐츠 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="독립적으로-호스트된-비디오" tabindex="-1"><a class="header-anchor" href="#독립적으로-호스트된-비디오" aria-hidden="true">#</a> 독립적으로 호스트된 비디오</h2>
<p>비디오를 독립적으로 호스트하는 것은 여러 가지 이유로 선호될 수 있습니다:</p>
<ul>
<li>완전한 제어와 독립성: 독립 호스팅을 통해 비디오 콘텐츠에 대한 직접적인 관리를 할 수 있으며, 재생부터 외형까지 풀소유와 제어를 보장하여 외부 플랫폼 제약으로부터 자유롭습니다.</li>
<li>특정 요구에 대한 맞춤화: 동적 배경 비디오와 같은 고유한 요구 사항에 이상적이며, 디자인과 기능적 요구에 부합하는 특별한 맞춤화가 가능합니다.</li>
<li>성능 및 확장성 고려사항: 증가하는 트래픽과 콘텐츠 크기를 효과적으로 지원하기 위해 고성능 및 확장 가능한 저장 솔루션을 선택하세요.</li>
<li>비용 및 통합: 저장 및 대역폭 비용을 원활하게 통합할 필요와 함께 Next.js 프레임워크 및 전체 기술 생태계에 쉽게 통합할 수 있는 필요성을 균형있게 유지하세요.</li>
</ul>
<h3 id="vercel-blob을-사용한-비디오-호스팅" tabindex="-1"><a class="header-anchor" href="#vercel-blob을-사용한-비디오-호스팅" aria-hidden="true">#</a> Vercel Blob을 사용한 비디오 호스팅</h3>
<p>Vercel Blob은 비디오를 효율적으로 호스팅하는 방법을 제공하여 매우 적합한 클라우드 저장 솔루션을 제공하며, Next.js와 잘 작동합니다. 다음은 Vercel Blob을 사용하여 비디오를 호스팅하는 방법입니다:</p>
<ol>
<li>Vercel Blob에 비디오 업로드하기
Vercel 대시보드에서 &quot;Storage&quot; 탭으로 이동하여 Vercel Blob
저장소를 선택합니다. Blob 테이블의 오른쪽 상단에 있는 &quot;업로드&quot; 버튼을 찾아 클릭하십시오. 그런 다음 업로드하려는 비디오 파일을 선택하십시오. 업로드가 완료되면 비디오 파일이 Blob 테이블에 나타납니다.
대안으로, 서버 액션을 사용하여 비디오를 업로드할 수도 있습니다. 자세한 지침은 Vercel의 서버 측 업로드에 대한 문서를 참조하십시오. Vercel은 클라이언트 측 업로드도 지원합니다. 특정 사용 사례에는 이 방법이 선호될 수 있습니다.</li>
<li>Next.js에서 비디오 표시하기
비디오를 업로드하고 저장한 후, 해당 비디오를 Next.js 애플리케이션에 표시할 수 있습니다. 이를 수행하는 예시는 <code v-pre>&lt;video&gt;</code> 태그와 React Suspense를 사용하여 다음과 같습니다:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vercel/blob"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>p<span class="token operator">></span>Loading video<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>VideoComponent fileName<span class="token operator">=</span><span class="token string">"my-video.mp4"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">VideoComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> fileName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> blobs <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> fileName<span class="token punctuation">,</span>
    <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> url <span class="token punctuation">}</span> <span class="token operator">=</span> blobs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>video controls preload<span class="token operator">=</span><span class="token string">"none"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"비디오 플레이어"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>source src<span class="token operator">=</span><span class="token punctuation">{</span>url<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"video/mp4"</span> <span class="token operator">/</span><span class="token operator">></span>
      지원하지 않는 브라우저입니다<span class="token punctuation">.</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>video<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 방식에서는 페이지가 비디오의 @vercel/blob URL을 사용하여 VideoComponent를 통해 비디오를 표시합니다. 비디오 URL을 가져와 비디오가 표시 준비가 될 때까지 대기 메시지를 보여주기 위해 React Suspense를 사용했습니다.</p>
<h3 id="비디오에-자막-추가하기" tabindex="-1"><a class="header-anchor" href="#비디오에-자막-추가하기" aria-hidden="true">#</a> 비디오에 자막 추가하기</h3>
<p>비디오에 자막이 있는 경우, <code v-pre>&lt;video&gt;</code> 태그 내부에 <code v-pre>&lt;track&gt;</code> 요소를 사용하여 쉽게 추가할 수 있습니다. Vercel Blob에서 비디오 파일처럼 자막 파일을 가져올 수 있습니다. 이렇게 <code v-pre>&lt;VideoComponent&gt;</code>를 업데이트하여 자막을 포함시킬 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">VideoComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> fileName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> blobs <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> fileName<span class="token punctuation">,</span>
    <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> url <span class="token punctuation">}</span> <span class="token operator">=</span> blobs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> captionsUrl <span class="token punctuation">}</span> <span class="token operator">=</span> blobs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>video controls preload<span class="token operator">=</span><span class="token string">"none"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"비디오 플레이어"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>source src<span class="token operator">=</span><span class="token punctuation">{</span>url<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"video/mp4"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>track
        src<span class="token operator">=</span><span class="token punctuation">{</span>captionsUrl<span class="token punctuation">}</span>
        kind<span class="token operator">=</span><span class="token string">"subtitles"</span>
        srcLang<span class="token operator">=</span><span class="token string">"en"</span>
        label<span class="token operator">=</span><span class="token string">"영어"</span><span class="token operator">></span>
      지원하지 않는 브라우저입니다<span class="token punctuation">.</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>video<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 접근 방식을 따라가면 Next.js 애플리케이션에 비디오를 효과적으로 셀프 호스팅하고 통합할 수 있습니다.</p>
<h2 id="자료" tabindex="-1"><a class="header-anchor" href="#자료" aria-hidden="true">#</a> 자료</h2>
<p>비디오 최적화와 최상의 실천 방안을 계속 학습하려면 다음 자료를 참조해보세요:</p>
<ul>
<li>비디오 형식과 코덱 이해: 비디오 요구에 따라 호환성을 위해 MP4 또는 WebM과 같은 웹 최적화용 코덱 중 적절한 형식과 코덱을 선택하세요. 더 자세한 내용은 Mozilla의 비디오 코덱 안내서를 확인하세요.</li>
<li>비디오 압축: FFmpeg와 같은 도구를 사용하여 비디오를 효과적으로 압축하면서 품질과 파일 크기를 균형 있게 유지하세요. 압축 기술을 FFmpeg의 공식 웹사이트에서 배우세요.</li>
<li>해상도와 비트율 조정: 모바일 기기에는 낮은 설정을 적용하여 시청 플랫폼에 따라 해상도와 비트율을 조정하세요.</li>
<li>콘텐츠 배송 네트워크(CDN): CDN을 활용하여 비디오 전송 속도를 향상시키고 높은 트래픽을 관리하세요. Vercel Blob와 같은 일부 저장 솔루션을 사용할 때는 CDN 기능이 자동적으로 처리됩니다. CDN과 그 이점에 대해 자세히 알아보세요.
다음 비디오 스트리밍 플랫폼들을 살펴보며 Next.js 프로젝트에 비디오를 통합해보세요:</li>
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
<h3 id="오픈-소스-다음-비디오-컴포넌트" tabindex="-1"><a class="header-anchor" href="#오픈-소스-다음-비디오-컴포넌트" aria-hidden="true">#</a> 오픈 소스 다음 비디오 컴포넌트</h3>
<ul>
<li>다양한 호스팅 서비스(Vercel Blob, S3, Backblaze, Mux 등)와 호환되는 Next.js용 <code v-pre>&lt;Video&gt;</code> 컴포넌트 제공.</li>
<li>다양한 호스팅 서비스와의 사용에 대한 자세한 문서
는 next-video.dev를 확인하세요.</li>
</ul>
<h3 id="cloudinary-통합" tabindex="-1"><a class="header-anchor" href="#cloudinary-통합" aria-hidden="true">#</a> Cloudinary 통합</h3>
<ul>
<li>Cloudinary와 Next.js를 사용하는 공식 문서 및 통합 가이드 제공.</li>
<li>드롭인 비디오 지원을 위한 <code v-pre>&lt;CldVideoPlayer&gt;</code> 컴포넌트 포함.</li>
<li>적응형 비트레이트 스트리밍을 포함하여 Next.js와 Cloudinary를 통합하는 예제
찾기.</li>
<li>Node.js SDK를 비롯한 다른 Cloudinary 라이브러리 사용 가능합니다.</li>
</ul>
<h3 id="mux-video-api" tabindex="-1"><a class="header-anchor" href="#mux-video-api" aria-hidden="true">#</a> Mux Video API</h3>
<ul>
<li>Mux는 Mux와 Next.js를 사용하여 비디오 코스를 만들기 위한 스타터 템플릿을 제공합니다.</li>
<li>Mux의 권장 사항을 배우고 Next.js 애플리케이션에 고성능 비디오를 임베딩하는 방법을 알아보세요.</li>
<li>Mux를 Next.js와 함께 사용한 예제 프로젝트를 탐색해보세요.</li>
</ul>
<h3 id="fastly" tabindex="-1"><a class="header-anchor" href="#fastly" aria-hidden="true">#</a> Fastly</h3>
<ul>
<li>Fastly의 비디오 온 디맨드 및 스트리밍 미디어 솔루션을 Next.js에 통합하는 방법에 대해 더 알아보세요.</li>
</ul>
</div></template>
