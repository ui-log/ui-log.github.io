<template><div><h1 id="create-next-app" tabindex="-1"><a class="header-anchor" href="#create-next-app" aria-hidden="true">#</a> create-next-app</h1>
<p>Next.js를 시작하는 가장 쉬운 방법은 create-next-app을 사용하는 것입니다. 이 CLI 도구를 사용하면 새로운 Next.js 애플리케이션을 빠르게 만들 수 있습니다. 모든 것이 이미 설정되어 있습니다.</p>
<p>기본 Next.js 템플릿을 사용하거나 공식 Next.js 예제 중 하나를 사용하여 새 앱을 만들 수 있습니다.</p>
<h3 id="대화형" tabindex="-1"><a class="header-anchor" href="#대화형" aria-hidden="true">#</a> 대화형</h3>
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
<p>새 프로젝트를 대화식으로 만들려면 다음을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn create next<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm create next<span class="token operator">-</span>app
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bunx create<span class="token operator">-</span>next<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음과 같은 프롬프트가 표시됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>프로젝트 이름은 무엇인가요<span class="token operator">?</span>  my<span class="token operator">-</span>app
TypeScript를 사용하시겠습니까<span class="token operator">?</span>  No <span class="token operator">/</span> Yes
ESLint를 사용하시겠습니까<span class="token operator">?</span>  No <span class="token operator">/</span> Yes
Tailwind <span class="token constant">CSS</span>를 사용하시겠습니까<span class="token operator">?</span>  No <span class="token operator">/</span> Yes
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">src/</span><span class="token template-punctuation string">`</span></span> 디렉토리를 사용하시겠습니까<span class="token operator">?</span>  No <span class="token operator">/</span> Yes
App Router를 사용하시겠습니까<span class="token operator">?</span> <span class="token punctuation">(</span>권장<span class="token punctuation">)</span>  No <span class="token operator">/</span> Yes
기본 <span class="token keyword">import</span> 별칭을 사용자 정의하시겠습니까<span class="token operator">?</span> <span class="token punctuation">(</span>@<span class="token comment">/*)?  No / Yes
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프롬프트에 답변한 후, 답변에 따라 올바른 구성을 갖춘 새 프로젝트가 생성됩니다.</p>
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
<h3 id="비대화형" tabindex="-1"><a class="header-anchor" href="#비대화형" aria-hidden="true">#</a> 비대화형</h3>
<p>새 프로젝트를 비대화형으로 설정하려면 명령줄 인수를 전달할 수 있어요.</p>
<p>또한 기본 옵션을 부정할 수도 있어요. --no- 접두사와 함께 사용하세요(e.g. --no-eslint).</p>
<p>create-next-app --help을 확인하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">사용법</span><span class="token operator">:</span> create<span class="token operator">-</span>next<span class="token operator">-</span>app <span class="token operator">&lt;</span>프로젝트<span class="token operator">-</span>디렉토리<span class="token operator">></span> <span class="token punctuation">[</span>옵션<span class="token punctuation">]</span>

<span class="token literal-property property">옵션</span><span class="token operator">:</span>
  <span class="token operator">-</span><span class="token constant">V</span><span class="token punctuation">,</span> <span class="token operator">--</span>version                        버전 번호 출력
  <span class="token operator">--</span>ts<span class="token punctuation">,</span> <span class="token operator">--</span>typescript

    TypeScript 프로젝트로 초기화합니다<span class="token punctuation">.</span> <span class="token punctuation">(</span>기본값<span class="token punctuation">)</span>

  <span class="token operator">--</span>js<span class="token punctuation">,</span> <span class="token operator">--</span>javascript

    JavaScript 프로젝트로 초기화합니다<span class="token punctuation">.</span>

  <span class="token operator">--</span>tailwind

    Tailwind <span class="token constant">CSS</span> 설정으로 초기화합니다<span class="token punctuation">.</span> <span class="token punctuation">(</span>기본값<span class="token punctuation">)</span>

  <span class="token operator">--</span>eslint

    ESLint 설정으로 초기화합니다<span class="token punctuation">.</span>

  <span class="token operator">--</span>app

    App Router 프로젝트로 초기화합니다<span class="token punctuation">.</span>

  <span class="token operator">--</span>src<span class="token operator">-</span>dir

    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">src/</span><span class="token template-punctuation string">`</span></span> 디렉토리 내부에서 초기화합니다<span class="token punctuation">.</span>

  <span class="token operator">--</span><span class="token keyword">import</span><span class="token operator">-</span>alias <span class="token operator">&lt;</span>설정할<span class="token operator">-</span>별칭<span class="token operator">></span>

    사용할 <span class="token keyword">import</span> 별칭을 <span class="token function">지정합니다</span> <span class="token punctuation">(</span>기본값 <span class="token string">"@/*"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>

  <span class="token operator">--</span>use<span class="token operator">-</span>npm

    명시적으로 <span class="token constant">CLI</span>에게 npm을 사용하여 앱을 부트스트랩하도록 지시합니다

  <span class="token operator">--</span>use<span class="token operator">-</span>pnpm

    명시적으로 <span class="token constant">CLI</span>에게 pnpm을 사용하여 앱을 부트스트랩하도록 지시합니다

  <span class="token operator">--</span>use<span class="token operator">-</span>yarn

    명시적으로 <span class="token constant">CLI</span>에게 Yarn을 사용하여 앱을 부트스트랩하도록 지시합니다

  <span class="token operator">--</span>use<span class="token operator">-</span>bun

    명시적으로 <span class="token constant">CLI</span>에게 Bun을 사용하여 앱을 부트스트랩하도록 지시합니다

  <span class="token operator">-</span>e<span class="token punctuation">,</span> <span class="token operator">--</span>example <span class="token punctuation">[</span>이름<span class="token punctuation">]</span><span class="token operator">|</span><span class="token punctuation">[</span>깃허브<span class="token operator">-</span><span class="token constant">URL</span><span class="token punctuation">]</span>

    앱을 부트스트랩하는 데 사용할 예제입니다<span class="token punctuation">.</span> 공식 Next<span class="token punctuation">.</span>js 저장소에서 예제 이름을
    사용하거나 공개 깃허브 <span class="token constant">URL</span>을 사용할 수 있습니다<span class="token punctuation">.</span> <span class="token constant">URL</span>은 모든 브랜치 및<span class="token operator">/</span>또는
    서브디렉터리를 사용할 수 있습니다

  <span class="token operator">--</span>example<span class="token operator">-</span>path <span class="token operator">&lt;</span>예제<span class="token operator">-</span>경로<span class="token operator">></span>

    가끔씩 깃허브 <span class="token constant">URL</span>에 슬래시가 포함된 브랜치 <span class="token function">이름</span><span class="token punctuation">(</span>예<span class="token operator">:</span> bug<span class="token operator">/</span>fix<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>과
    예제 <span class="token function">경로</span><span class="token punctuation">(</span>예<span class="token operator">:</span> foo<span class="token operator">/</span>bar<span class="token punctuation">)</span>가 있는 경우에는 예제 경로를 별도로 지정해야 합니다<span class="token operator">:</span>
    <span class="token operator">--</span>example<span class="token operator">-</span>path foo<span class="token operator">/</span>bar

  <span class="token operator">--</span>reset<span class="token operator">-</span>preferences

    <span class="token constant">CLI</span>에게 저장된 선호 설정을 재설정하도록 명시합니다

  <span class="token operator">-</span>h<span class="token punctuation">,</span> <span class="token operator">--</span>help                           사용 방법 출력
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-next-app를-사용하는-이유" tabindex="-1"><a class="header-anchor" href="#create-next-app를-사용하는-이유" aria-hidden="true">#</a> Create Next App를 사용하는 이유</h3>
<p>create-next-app을 사용하면 몇 초만에 새로운 Next.js 앱을 생성할 수 있습니다. Next.js의 개발자가 직접 유지보수하며 여러 가지 이점이 포함되어 있습니다:</p>
<ul>
<li>대화형 경험: 인터랙티브한 경험을 제공하여 프로젝트 설정을 안내하는 npx create-next-app@latest (인수 없이 실행)을 실행할 수 있습니다.</li>
<li>종속성 없음: 프로젝트 초기화는 1초만에 끝납니다. Create Next App에는 종속성이 없습니다.</li>
<li>오프라인 지원: Create Next App은 자동으로 오프라인 상태인지 감지하고 로컬 패키지 캐시를 사용하여 프로젝트를 부트스트랩합니다.</li>
<li>예제 지원: Next.js 예제 컬렉션(예: npx create-next-app --example api-routes) 또는 공개 깃허브 저장소에서 예제를 사용하여 애플리케이션을 부트스트랩할 수 있습니다.</li>
<li>테스트 완료: 이 패키지는 Next.js 모노리포의 일부이며 Next.js 자체와 동일한 통합 테스트 스위트를 사용하여 테스트되므로 모든 릴리스에서 예상대로 작동됩니다.```</li>
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
