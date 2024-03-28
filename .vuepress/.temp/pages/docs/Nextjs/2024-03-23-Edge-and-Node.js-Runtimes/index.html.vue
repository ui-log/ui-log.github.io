<template><div><h1 id="엣지-및-node-js-런타임" tabindex="-1"><a class="header-anchor" href="#엣지-및-node-js-런타임" aria-hidden="true">#</a> 엣지 및 Node.js 런타임</h1>
<p>Next.js의 맥락에서 런타임이란 실행 중에 코드에서 사용할 수 있는 라이브러리, API 및 일반 기능 세트를 의미합니다.</p>
<p>서버에서 사용되는 런타임에는 응용 프로그램 코드의 일부를 렌더링할 수 있는 두 가지 런타임이 있습니다:</p>
<ul>
<li>Node.js 런타임(기본값)은 모든 Node.js API 및 생태계에서 호환되는 패키지에 액세스할 수 있습니다.</li>
<li>Edge 런타임은 Web API를 기반으로 합니다.</li>
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
<h2 id="런타임-차이점" tabindex="-1"><a class="header-anchor" href="#런타임-차이점" aria-hidden="true">#</a> 런타임 차이점</h2>
<p>런타임을 선택할 때 고려해야 할 사항이 많습니다. 이 표는 주요 차이점을 한 눈에 쉽게 확인할 수 있습니다. 더 자세한 분석을 원하시면 아래 섹션을 확인해보세요.</p>
<table>
<thead>
<tr>
<th></th>
<th>Node</th>
<th>Serverless</th>
<th>Edge</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cold Boot</td>
<td>/</td>
<td>Normal</td>
<td>Low</td>
</tr>
<tr>
<td><a href="/docs/app/building-your-application/routing/loading-ui-and-streaming">HTTP Streaming</a></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>IO</td>
<td>All</td>
<td>All</td>
<td><code v-pre>fetch</code></td>
</tr>
<tr>
<td>Scalability</td>
<td>/</td>
<td>High</td>
<td>Highest</td>
</tr>
<tr>
<td>Security</td>
<td>Normal</td>
<td>High</td>
<td>High</td>
</tr>
<tr>
<td>Latency</td>
<td>Normal</td>
<td>Low</td>
<td>Lowest</td>
</tr>
<tr>
<td>npm Packages</td>
<td>All</td>
<td>All</td>
<td>A smaller subset</td>
</tr>
<tr>
<td><a href="/docs/app/building-your-application/rendering/server-components#static-rendering-default">Static Rendering</a></td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td><a href="/docs/app/building-your-application/rendering/server-components#dynamic-rendering">Dynamic Rendering</a></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td><a href="/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data">Data Revalidation w/ <code v-pre>fetch</code></a></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h3 id="edge-런타임" tabindex="-1"><a class="header-anchor" href="#edge-런타임" aria-hidden="true">#</a> Edge 런타임</h3>
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
<p>Next.js에서 경량 Edge Runtime은 사용 가능한 Node.js API의 하위 집합입니다.</p>
<p>Edge Runtime은 낮은 대기 시간으로 동적이고 개인화된 콘텐츠를 제공해야 하는 경우에 이상적입니다. Edge Runtime의 속도는 리소스를 최소한으로 사용하기 때문에 빠릅니다. 그러나 이는 여러 상황에서 제한적일 수 있습니다.</p>
<p>예를 들어, Vercel의 Edge Runtime에서 실행되는 코드는 1MB와 4MB 사이여야 합니다. 이 한계에는 가져온 패키지, 폰트 및 파일이 포함되며, 배포 인프라에 따라 달라집니다. 게다가 Edge Runtime은 모든 Node.js API를 지원하지 않으므로 일부 npm 패키지가 작동하지 않을 수 있습니다. 예를 들어, &quot;모듈을 찾을 수 없음: <code v-pre>fs</code> 해결할 수 없음&quot;과 같은 오류가 발생할 수 있습니다. 이런 API나 패키지를 사용해야 할 경우 Node.js Runtime을 사용하는 것을권장합니다.</p>
<h3 id="node-js-runtime" tabindex="-1"><a class="header-anchor" href="#node-js-runtime" aria-hidden="true">#</a> Node.js Runtime</h3>
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
<p>Node.js 런타임을 사용하면 모든 Node.js API에 액세스할 수 있고 그에 의존하는 모든 npm 패키지에도 액세스할 수 있어요. 그러나 Edge 런타임을 사용하는 라우트에 비해 시작 속도가 느릴 수도 있어요.</p>
<p>Next.js 애플리케이션을 Node.js 서버에 배포하려면 인프라를 관리하고 확장하고 구성해야 합니다. 또는 Vercel과 같은 서버리스 플랫폼에 Next.js 애플리케이션을 배포하는 것을 고려할 수도 있어요. Vercel은 이 모든 것을 대신 다루어 줄 거에요.</p>
<h3 id="서버리스-node-js" tabindex="-1"><a class="header-anchor" href="#서버리스-node-js" aria-hidden="true">#</a> 서버리스 Node.js</h3>
<p>서버리스는 Edge 런타임보다 복잡한 계산 부하를 처리할 수 있는 확장 가능한 솔루션이 필요한 경우에 이상적이에요. 예를 들어 Vercel의 서버리스 함수를 사용하면 가져온 패키지, 폰트, 파일을 포함해 전체 코드 크기가 50MB이에요.</p>
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
<p>Edge를 사용한 라우팅과 비교해서 Serverless Functions가 요청을 처리하기 전에 부팅하는 데 수백 밀리초가 걸릴 수 있다는 단점이 있습니다. 사이트가 받는 트래픽 양에 따라, 이는 함수가 자주 &quot;워밍 업&quot;되지 않기 때문에 빈번히 발생할 수 있습니다.</p>
<blockquote>
<p>Node.js 문서와 Edge 문서를 참조하여 사용 가능한 API의 전체 목록을 확인해주세요. 배포 인프라에 따라 런타임은 스트리밍도 지원할 수 있습니다.</p>
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
