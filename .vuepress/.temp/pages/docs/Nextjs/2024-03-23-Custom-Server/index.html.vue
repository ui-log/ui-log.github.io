<template><div><h1 id="사용자-지정-서버" tabindex="-1"><a class="header-anchor" href="#사용자-지정-서버" aria-hidden="true">#</a> 사용자 지정 서버</h1>
<p>기본적으로 Next.js에는 next start와 함께 자체 서버가 포함되어 있습니다. 기존 백엔드가있는 경우에도 Next.js와 함께 사용할 수 있습니다(이것은 사용자 지정 서버가 아닙니다). 사용자 정의 Next.js 서버를 사용하면 자체 서버 패턴을 사용하기 위해 100% 프로그래밍 방식으로 서버를 시작할 수 있습니다. 대부분의 경우에는 이것이 필요하지 않지만, 완전한 사용자 정의를 위해 사용할 수 있습니다.</p>
<blockquote>
<p>알아두면 좋은 점:
사용자 정의 서버를 사용하기 전에 Next.js의 통합 라우터가 앱 요구 사항을 충족할 수 없는 경우에만 사용해야 합니다. 사용자 정의 서버를 사용하면 서버리스 함수 및 자동 정적 최적화와 같은 중요한 성능 최적화가 제거됩니다.
사용자 정의 서버는 Vercel에 배포할 수 없습니다.
독립형 출력 모드는 사용자 지정 서버 파일을 추적하지 않으며이 모드는 별도의 최소한의 server.js 파일을 출력합니다.</p>
</blockquote>
<p>다음은 사용자 정의 서버의 예시입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createServer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> parse <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> next <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"next"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dev <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">"production"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> hostname <span class="token operator">=</span> <span class="token string">"localhost"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span>
<span class="token comment">// 미들웨어를 사용할 때에는 `hostname`과 `port`를 아래에서 제공해야합니다</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> dev<span class="token punctuation">,</span> hostname<span class="token punctuation">,</span> port <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> handle <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">getRequestHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// `url.parse`의 두 번째 인수로 `true`를 전달해야 합니다.</span>
      <span class="token comment">// 이렇게 하면 URL의 쿼리 부분을 구문 분석하도록 합니다.</span>
      <span class="token keyword">const</span> parsedUrl <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname<span class="token punctuation">,</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> parsedUrl<span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token operator">===</span> <span class="token string">"/a"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> <span class="token string">"/a"</span><span class="token punctuation">,</span> query<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token operator">===</span> <span class="token string">"/b"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> <span class="token string">"/b"</span><span class="token punctuation">,</span> query<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token function">handle</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> parsedUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"핸들링 중 오류 발생"</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"내부 서버 오류"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">> http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hostname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">에서 준비됨</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>server.js는 베이블이나 웹팩을 거치지 않습니다. 이 파일이 요구하는 구문 및 소스가 실행 중인 현재 노드 버전과 호환되는지 확인하세요.</p>
</blockquote>
<p>사용자 지정 서버를 실행하려면 다음과 같이 package.json의 스크립트를 업데이트해야합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"node server.js"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"next build"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"NODE_ENV=production node server.js"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>커스텀 서버는 다음과 같은 import를 사용하여 서버를 Next.js 애플리케이션과 연결합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> next <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"next"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 next import는 다음 옵션을 포함하는 객체를 받는 함수입니다:</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>conf</code></td>
<td><code v-pre>Object</code></td>
<td><a href="/docs/pages/api-reference/next-config-js">next.config.js</a>에서 사용하는 개체입니다. 기본값은 <code v-pre>{}</code>입니다.</td>
</tr>
<tr>
<td><code v-pre>customServer</code></td>
<td><code v-pre>Boolean</code></td>
<td>(<em>Optional</em>) 서버가 Next.js에 의해 만들어졌을 때 false로 설정하세요.</td>
</tr>
<tr>
<td><code v-pre>dev</code></td>
<td><code v-pre>Boolean</code></td>
<td>(<em>Optional</em>) Next.js를 개발 모드로 실행할 지 여부입니다. 기본값은 <code v-pre>false</code>입니다.</td>
</tr>
<tr>
<td><code v-pre>dir</code></td>
<td><code v-pre>String</code></td>
<td>(<em>Optional</em>) Next.js 프로젝트의 위치입니다. 기본값은 <code v-pre>'.'</code>입니다.</td>
</tr>
<tr>
<td><code v-pre>quiet</code></td>
<td><code v-pre>Boolean</code></td>
<td>(<em>Optional</em>) 서버 정보가 포함된 오류 메시지를 숨길 지 여부입니다. 기본값은 <code v-pre>false</code>입니다.</td>
</tr>
<tr>
<td><code v-pre>hostname</code></td>
<td><code v-pre>String</code></td>
<td>(<em>Optional</em>) 서버가 실행 중인 호스트 이름입니다.</td>
</tr>
<tr>
<td><code v-pre>port</code></td>
<td><code v-pre>Number</code></td>
<td>(<em>Optional</em>) 서버가 실행 중인 포트입니다.</td>
</tr>
<tr>
<td><code v-pre>httpServer</code></td>
<td><code v-pre>node:http#Server</code></td>
<td>(<em>Optional</em>) Next.js가 실행 중인 HTTP 서버입니다.</td>
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
<p>반환된 앱을 사용하여 Next.js가 필요에 따라 요청을 처리하도록 할 수 있습니다.</p>
<h2 id="파일-시스템-라우팅-비활성화" tabindex="-1"><a class="header-anchor" href="#파일-시스템-라우팅-비활성화" aria-hidden="true">#</a> 파일 시스템 라우팅 비활성화</h2>
<p>기본적으로 Next는 페이지 폴더의 각 파일을 파일 이름과 일치하는 경로 이름 아래에 제공합니다. 프로젝트가 사용자 정의 서버를 사용하는 경우이 동작은 동일한 콘텐츠가 여러 경로에서 제공되어 SEO 및 사용자 경험에 문제가 발생할 수 있습니다.</p>
<p>페이지의 파일에 기반한 라우팅을 비활성화하고 파일 시스템을 사용한 라우팅을 방지하려면 next.config.js를 열고 useFileSystemPublicRoutes 구성을 비활성화하세요:</p>
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
  <span class="token literal-property property">useFileSystemPublicRoutes</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>useFileSystemPublicRoutes를 사용하면 SSR에서 파일 이름 경로가 비활성화됩니다. 그러나 클라이언트 측 라우팅은 해당 경로에 여전히 액세스할 수 있습니다. 이 옵션을 사용할 때는 프로그래밍 방식으로 원하지 않는 경로로의 탐색에 대비해야합니다.</p>
</blockquote>
<blockquote>
<p>또한 클라이언트 측 라우터를 구성하여 파일 이름 경로로의 클라이언트 측 리디렉션을 금지할 수도 있습니다. 이에 대해서는 router.beforePopState를 참조하십시오.</p>
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
