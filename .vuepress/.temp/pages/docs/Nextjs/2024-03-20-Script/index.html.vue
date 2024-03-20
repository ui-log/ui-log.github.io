<template><div><h1 id="nextjs-14에서-스크립트-파일-로드하는-방법-next-script" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-스크립트-파일-로드하는-방법-next-script" aria-hidden="true">#</a> Nextjs 14에서 스크립트 파일 로드하는 방법(next/script)</h1>
<p>이 API 참조는 스크립트 구성 요소에 사용 가능한 프롭을 이해하는 데 도움이 될 것입니다. 기능과 사용법은 &quot;스크립트 최적화 페이지&quot;를 참조해주세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">"next/script"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Dashboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">"https://example.com/script.js"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="프롭" tabindex="-1"><a class="header-anchor" href="#프롭" aria-hidden="true">#</a> 프롭</h2>
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
<p>Script 구성 요소를 위한 사용 가능한 속성 요약입니다:</p>
<table>
<thead>
<tr>
<th>Prop</th>
<th>Example</th>
<th>Type</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#src"><code v-pre>src</code></a></td>
<td><code v-pre>src=&quot;http://example.com/script&quot;</code></td>
<td>String</td>
<td>인라인 스크립트를 사용하지 않는 경우 필수</td>
</tr>
<tr>
<td><a href="#strategy"><code v-pre>strategy</code></a></td>
<td><code v-pre>strategy=&quot;lazyOnload&quot;</code></td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td><a href="#onload"><code v-pre>onLoad</code></a></td>
<td><code v-pre>onLoad={onLoadFunc}</code></td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td><a href="#onready"><code v-pre>onReady</code></a></td>
<td><code v-pre>onReady={onReadyFunc}</code></td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td><a href="#onerror"><code v-pre>onError</code></a></td>
<td><code v-pre>onError={onErrorFunc}</code></td>
<td>Function</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="필수-속성" tabindex="-1"><a class="header-anchor" href="#필수-속성" aria-hidden="true">#</a> 필수 속성</h2>
<p><code v-pre>Script</code> 구성 요소는 다음 속성이 필요합니다.</p>
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
<h3 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h3>
<p>외부 스크립트의 URL을 지정하는 경로 문자열입니다. 이는 절대 외부 URL이거나 내부 경로가 될 수 있습니다. 인라인 스크립트를 사용하는 경우를 제외하고는 src 속성이 필수입니다.</p>
<h2 id="선택적-속성" tabindex="-1"><a class="header-anchor" href="#선택적-속성" aria-hidden="true">#</a> 선택적 속성</h2>
<p><code v-pre>Script /</code> 컴포넌트는 필수 속성 이외에도 여러 추가 속성을 받습니다.</p>
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
<h3 id="전략" tabindex="-1"><a class="header-anchor" href="#전략" aria-hidden="true">#</a> 전략</h3>
<p>스크립트의 로딩 전략입니다. 사용할 수 있는 네 가지 다른 전략이 있습니다:</p>
<ul>
<li>beforeInteractive: Next.js 코드 및 페이지 수분화가 발생하기 전에 로드됩니다.</li>
<li>afterInteractive: (기본값) 일부 수분화가 페이지에 발생한 후 조기에 로드됩니다.</li>
<li>lazyOnload: 브라우저가 유휴 상태일 때 로드됩니다.</li>
<li>worker: (실험적) 웹 워커에서 로드됩니다.</li>
</ul>
<h3 id="beforeinteractive" tabindex="-1"><a class="header-anchor" href="#beforeinteractive" aria-hidden="true">#</a> beforeInteractive</h3>
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
<p>beforeInteractive 전략으로 로드되는 스크립트는 서버에서 초기 HTML에 삽입되며, 모든 Next.js 모듈보다 먼저 다운로드되어 페이지가 하이드레이션되기 전에 순서대로 실행됩니다.</p>
<p>이 전략으로 표시된 스크립트는 1차 코드 이전에 사전로드되어 검색되지만, 실행은 페이지 하이드레이션이 발생하는 것을 차단하지 않습니다.</p>
<p>beforeInteractive 스크립트는 루트 레이아웃(app/layout.tsx) 안에 위치해야 하며, 사이트 전체에서 필요한 스크립트를 로드하는 데 사용됩니다 (즉, 애플리케이션의 모든 페이지가 서버 측에서 로드된 후에 해당 스크립트가 로드될 것입니다).</p>
<p>이 전략은 페이지의 어떤 부분이 상호 작용 가능해지기 전에 검색되어야 하는 중요한 스크립트에만 사용해야 합니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">"next/script"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">"https://example.com/script.js"</span> strategy<span class="token operator">=</span><span class="token string">"beforeInteractive"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 점: beforeInteractive로 설정된 스크립트는 컴포넌트에 어디에 위치했든지 상관없이 항상 HTML 문서의 head 내에 삽입됩니다.</p>
</blockquote>
<p>가능한 빨리 로드되어야 하는 몇 가지 스크립트 예시:</p>
<ul>
<li>봇 감지기</li>
<li>쿠키 동의 관리자</li>
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
<h3 id="afterinteractive" tabindex="-1"><a class="header-anchor" href="#afterinteractive" aria-hidden="true">#</a> afterInteractive</h3>
<p>afterInteractive 전략을 사용하는 스크립트는 HTML 클라이언트 측에 삽입되며 페이지에서 일부(또는 모두) 가수화가 발생한 후에 로드됩니다. 이는 Script 컴포넌트의 기본 전략이며 가능한 빨리 로드되어야 하지만 어떠한 첫 번째 파티 Next.js 코드도 실행되기 전에 데이터 목적에 사용해야 합니다.</p>
<p>afterInteractive 스크립트는 페이지나 레이아웃 어디에나 배치할 수 있으며 해당 페이지(또는 페이지 그룹)가 브라우저에서 열릴 때에만 로드 및 실행됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">"next/script"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">"https://example.com/script.js"</span> strategy<span class="token operator">=</span><span class="token string">"afterInteractive"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
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
<p>afterInteractive에 적합한 스크립트 예시 몇 가지:</p>
<ul>
<li>태그 관리자</li>
<li>분석 도구</li>
</ul>
<h3 id="lazyonload" tabindex="-1"><a class="header-anchor" href="#lazyonload" aria-hidden="true">#</a> lazyOnload</h3>
<p>lazyOnload 전략을 사용하는 스크립트는 브라우저가 유휴 상태일 때 HTML에 주입되며 페이지의 모든 리소스가 가져온 후에 로드됩니다. 이 전략은 일찍 로드할 필요가 없는 배경 또는 우선순위가 낮은 스크립트에 사용되어야 합니다.</p>
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
<p>lazyOnload 스크립트는 페이지나 레이아웃 내에 배치할 수 있으며 해당 페이지(또는 그룹 페이지)가 브라우저에서 열릴 때에만 로드되고 실행됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">"next/script"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">"https://example.com/script.js"</span> strategy<span class="token operator">=</span><span class="token string">"lazyOnload"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>즉시로드할 필요가 없는 스크립트 예시 및 lazyOnload로 가져올 수 있는 것들은 다음과 같습니다:</p>
<ul>
<li>채팅 지원 플러그인</li>
<li>소셜 미디어 위젯</li>
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
<h3 id="worker" tabindex="-1"><a class="header-anchor" href="#worker" aria-hidden="true">#</a> worker</h3>
<blockquote>
<p>주의: worker 전략은 아직 안정화되지 않았으며 앱 디렉토리와 작동하지 않습니다. 주의하여 사용하세요.</p>
</blockquote>
<p>worker 전략을 사용하는 스크립트들은 메인 스레드를 해제하고 중요한 일등 자원만을 처리하도록 웹 워커로 이동됩니다. 이 전략은 모든 스크립트에 사용할 수 있지만, 모든 서드파티 스크립트를 지원하는 것을 보장하지는 않는 고급 사용 사례입니다.</p>
<p>worker를 전략으로 사용하려면 next.config.js에서 nextScriptWorkers 플래그를 활성화해야 합니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nextScriptWorkers</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>현재 worker 스크립트는 페이지/ 디렉토리에서만 사용할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">"next/script"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">"https://example.com/script.js"</span> strategy<span class="token operator">=</span><span class="token string">"worker"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onload" tabindex="-1"><a class="header-anchor" href="#onload" aria-hidden="true">#</a> onLoad</h3>
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
<p>주의: onLoad는 아직 서버 구성 요소와 함께 작동하지 않으며 클라이언트 구성 요소에서만 사용할 수 있습니다. 더 나아가, beforeInteractive와 함께 onLoad를 사용할 수 없습니다. 대신 onReady를 사용하는 것을 고려해보세요.</p>
</blockquote>
<p>일부 타사 스크립트는 사용자가 스크립트가 로드된 후 한 번 JavaScript 코드를 실행해야 할 수도 있습니다. 이 코드는 콘텐츠를 활성화하거나 함수를 호출하기 위해 필요할 수 있습니다. 스크립트를 afterInteractive 또는 lazyOnload로 로딩 전략으로 로드하고 있다면, onLoad 속성을 사용하여 로드 후에 코드를 실행할 수 있습니다.</p>
<p>다음은 라이브러리가 로드된 후에만 lodash 메소드를 실행하는 예제입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">'use client'</span>

<span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">'next/script'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Script
        src<span class="token operator">=</span><span class="token string">"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"</span>
        onLoad<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">sample</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="onready" tabindex="-1"><a class="header-anchor" href="#onready" aria-hidden="true">#</a> onReady</h3>
<blockquote>
<p>경고: onReady은 아직 서버 구성 요소와 함께 작동하지 않으며 클라이언트 구성 요소에서만 사용할 수 있습니다.</p>
</blockquote>
<p>세 번째 자바스크립트 스크립트의 경우 스크립트가로드를 완료 한 후에 JavaScript 코드를 실행해야하고 (예 : 라우트 탐색 후) 각 구성 요소가 마운트 될 때마다 실행해야하는 경우가 있습니다. onReady 속성을 사용하여 스크립트가 처음로드 될 때와 이후 모든 구성 요소 재마운트 후에 코드를 실행할 수 있습니다.</p>
<p>다음은 구성 요소가 재마운트 될 때마다 Google Maps JS 임베드를 다시 인스턴스화하는 예입니다:</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">"next/script"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> mapRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>mapRef<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Script
        id<span class="token operator">=</span><span class="token string">"google-maps"</span>
        src<span class="token operator">=</span><span class="token string">"https://maps.googleapis.com/maps/api/js"</span>
        onReady<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">new</span> <span class="token class-name">google</span><span class="token punctuation">.</span>maps<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span>mapRef<span class="token punctuation">.</span>current<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            center<span class="token operator">:</span> <span class="token punctuation">{</span> lat<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">34.397</span><span class="token punctuation">,</span> lng<span class="token operator">:</span> <span class="token number">150.644</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            zoom<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onerror" tabindex="-1"><a class="header-anchor" href="#onerror" aria-hidden="true">#</a> onError</h3>
<blockquote>
<p>경고: onError은 아직 Server Components와 함께 작동하지 않으며 Client Components에서만 사용할 수 있습니다. onError은 beforeInteractive 로딩 전략과 함께 사용할 수 없습니다.</p>
</blockquote>
<p>때때로 스크립트 로드에 실패할 때를 감지하는 것이 도움이 될 수 있습니다. 이러한 오류는 onError 속성을 사용하여 처리할 수 있습니다:```</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">'use client'</span>

<span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">'next/script'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Script
        src<span class="token operator">=</span><span class="token string">"https://example.com/script.js"</span>
        onError<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token operator">:</span> Error<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'스크립트 로드 실패'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="버전-이력" tabindex="-1"><a class="header-anchor" href="#버전-이력" aria-hidden="true">#</a> 버전 이력</h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>변경 내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>beforeInteractive</code> 및 <code v-pre>afterInteractive</code>가 <code v-pre>app</code>을 지원하도록 수정됨.</td>
</tr>
<tr>
<td><code v-pre>v12.2.4</code></td>
<td><code v-pre>onReady</code> prop 추가됨.</td>
</tr>
<tr>
<td><code v-pre>v12.2.2</code></td>
<td><code v-pre>beforeInteractive</code>을 사용하는 <code v-pre>next/script</code>이 <code v-pre>_document</code>에 배치될 수 있도록 허용됨.</td>
</tr>
<tr>
<td><code v-pre>v11.0.0</code></td>
<td><code v-pre>next/script</code>이 소개됨.</td>
</tr>
</tbody>
</table>
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
