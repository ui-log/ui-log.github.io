<template><div><h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1>
<p>Next.js는 React 애플리케이션을 구축하기 위한 TypeScript를 우선으로 한 개발 환경을 제공합니다.</p>
<p>필요한 패키지를 자동으로 설치하고 적절한 설정을 구성하기 위한 내장된 TypeScript 지원이 제공됩니다.</p>
<h2 id="새-프로젝트" tabindex="-1"><a class="header-anchor" href="#새-프로젝트" aria-hidden="true">#</a> 새 프로젝트</h2>
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
<p>프로젝트에 TypeScript를 추가하려면 파일을 .ts / .tsx로 이름을 변경하세요. 그런 다음 next dev 및 next build를 실행하여 필요한 종속성을 자동으로 설치하고 권장 구성 옵션으로 tsconfig.json 파일을 추가할 수 있습니다.</p>
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
<p>만약 이미 jsconfig.json 파일이 있는 경우에는, 이전 jsconfig.json 파일에서 paths 컴파일러 옵션을 새 tsconfig.json 파일로 복사하고 이전 jsconfig.json 파일을 삭제해주세요.</p>
<h2 id="typescript-최소-버전" tabindex="-1"><a class="header-anchor" href="#typescript-최소-버전" aria-hidden="true">#</a> TypeScript 최소 버전</h2>
<p>적어도 TypeScript v4.5.2 버전 이상을 사용하는 것이 매우 권장됩니다. 이를 통해 import 이름에 대한 유형 수정자 및 성능 향상과 같은 구문 기능을 얻을 수 있습니다.</p>
<h2 id="정적-생성과-서버-사이드-렌더링" tabindex="-1"><a class="header-anchor" href="#정적-생성과-서버-사이드-렌더링" aria-hidden="true">#</a> 정적 생성과 서버 사이드 렌더링</h2>
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
<p>getStaticProps, getStaticPaths, getServerSideProps에 대한 정보를 공유드릴게요. 각각 GetStaticProps, GetStaticPaths 및 GetServerSideProps 유형을 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GetStaticProps<span class="token punctuation">,</span> GetStaticPaths<span class="token punctuation">,</span> GetServerSideProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getStaticProps <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>가 GetStaticProps을 만족시킵니다

<span class="token keyword">export</span> <span class="token keyword">const</span> getStaticPaths <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>가 GetStaticPaths를 만족시킵니다

<span class="token keyword">export</span> <span class="token keyword">const</span> getServerSideProps <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>가 GetServerSideProps을 만족시킵니다
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋아요: TypeScript 4.9에 satisfies가 추가되었습니다. TypeScript의 최신 버전으로 업그레이드하는 것을 권장합니다.</p>
</blockquote>
<h2 id="api-routes" tabindex="-1"><a class="header-anchor" href="#api-routes" aria-hidden="true">#</a> API Routes</h2>
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
<p>다음은 API 라우트에 내장된 유형을 사용하는 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> NextApiResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John Doe"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 응답 데이터에 유형을 지정할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

type Data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> NextApiResponse<span class="token operator">&lt;</span>Data<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John Doe"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h2 id="사용자-정의-앱" tabindex="-1"><a class="header-anchor" href="#사용자-정의-앱" aria-hidden="true">#</a> 사용자 정의 앱</h2>
<p>사용자 정의 앱이 있으신 경우, 내장된 AppProps 유형을 사용하고 파일 이름을 ./pages/_app.tsx로 변경할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> AppProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/app"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span><span class="token operator">:</span> AppProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="경로-별칭-및-baseurl" tabindex="-1"><a class="header-anchor" href="#경로-별칭-및-baseurl" aria-hidden="true">#</a> 경로 별칭 및 baseUrl</h2>
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
<p>Next.js는 tsconfig.json의 &quot;paths&quot; 및 &quot;baseUrl&quot; 옵션을 자동으로 지원합니다.</p>
<p>이 기능에 대해 자세히 알아보려면 Module Path aliases documentation을 확인해보세요.</p>
<h2 id="type-checking-next-config-js" tabindex="-1"><a class="header-anchor" href="#type-checking-next-config-js" aria-hidden="true">#</a> Type checking next.config.js</h2>
<p>next.config.js 파일은 Babel이나 TypeScript에서 구문 분석되지 않으므로 JavaScript 파일이어야 합니다. 그러나 아래와 같이 JSDoc을 사용하여 IDE에서 일부 유형 검사를 추가할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// @ts-check</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span>
 **/</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* config options here */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> nextConfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="점진적-타입-확인" tabindex="-1"><a class="header-anchor" href="#점진적-타입-확인" aria-hidden="true">#</a> 점진적 타입 확인</h2>
<p>v10.2.1부터 Next.js는 tsconfig.json에서 활성화된 경우
증분 유형 확인을 지원합니다. 이 기능을 사용하면 큰 애플리케이션에서 타입 확인 속도를 높일 수 있습니다.</p>
<h2 id="typescript-오류-무시하기" tabindex="-1"><a class="header-anchor" href="#typescript-오류-무시하기" aria-hidden="true">#</a> TypeScript 오류 무시하기</h2>
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
<p>Next.js는 프로젝트에 TypeScript 오류가 있을 때 <code v-pre>next build</code>를 통해 프로덕션 빌드에 실패합니다.</p>
<p>만약 Next.js가 애플리케이션에 오류가 있더라도 프로덕션 코드를 생성하도록 하려면 내장된 타입 체크 단계를 비활성화할 수 있습니다.</p>
<p>비활성화된 경우 빌드나 배포 프로세스의 일부로 타입 체크를 실행하는지 확인하십시오. 그렇지 않으면 매우 위험할 수 있습니다.</p>
<p><code v-pre>next.config.js</code> 파일을 열고 typescript 구성에서 <code v-pre>ignoreBuildErrors</code> 옵션을 활성화하세요:</p>
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
  <span class="token literal-property property">typescript</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// !! 경고 !!</span>
    <span class="token comment">// 프로젝트에 유형 오류가 있더라도 제작 빌드를 성공적으로 완료할 수 있도록합니다.</span>
    <span class="token comment">// !! 경고 !!</span>
    <span class="token literal-property property">ignoreBuildErrors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="사용자-정의-유형-선언" tabindex="-1"><a class="header-anchor" href="#사용자-정의-유형-선언" aria-hidden="true">#</a> 사용자 정의 유형 선언</h2>
<p>사용자 정의 유형을 선언해야하는 경우 next-env.d.ts를 수정하려는 유혹에 빠질 수 있습니다. 그러나이 파일은 자동으로 생성되므로 수행 한 모든 변경 내용이 덮어 씌워 집니다. 대신 새 파일을 만들어야합니다. 새 파일을 new-types.d.ts라고 부르고 tsconfig.json에서 참조하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"skipLibCheck"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token comment">//...생략...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"new-types.d.ts"</span><span class="token punctuation">,</span>
    <span class="token string">"next-env.d.ts"</span><span class="token punctuation">,</span>
    <span class="token string">".next/types/**/*.ts"</span><span class="token punctuation">,</span>
    <span class="token string">"**/*.ts"</span><span class="token punctuation">,</span>
    <span class="token string">"**/*.tsx"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"node_modules"</span><span class="token punctuation">]</span>
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
<h2 id="버전-변경사항" tabindex="-1"><a class="header-anchor" href="#버전-변경사항" aria-hidden="true">#</a> 버전 변경사항</h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.2.0</code></td>
<td>정적으로 타입이 지정된 링크가 베타 버전으로 사용 가능합니다.</td>
</tr>
<tr>
<td><code v-pre>v12.0.0</code></td>
<td>더 빠른 빌드를 위해 TypeScript 및 TSX를 컴파일하기 위해 기본적으로 <a href="/docs/architecture/nextjs-compiler">SWC</a>이(가) 사용됩니다.</td>
</tr>
<tr>
<td><code v-pre>v10.2.1</code></td>
<td><code>tsconfig.json</code>에서 활성 상태인 경우 <a href="https://www.typescriptlang.org/tsconfig#incremental" rel="noopener noreferrer nofollow" target="_blank">잘못된 타입 확인<span class="inline-flex"><svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style="color:currentColor;width:14px;height:14px"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></a> 대응이 추가되었습니다.</td>
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
