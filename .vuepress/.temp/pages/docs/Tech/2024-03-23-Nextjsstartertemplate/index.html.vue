<template><div><img src="@source/docs/Tech/2024-03-23-Nextjsstartertemplate/img/Next.js-starter-template_0.png" />
<p>안녕하세요,
저는 Next.js를 위한 스타터 템플릿을 만들었어요. 이 템플릿은 TypeScript, Tailwind, 그리고 shadcn/ui의 기능을 모두 포함하고 있어요. 저는 이미 여기에 대해 글을 썼지만, Next-auth, Prisma, React-hook-form, T3-env와 같은 몇 가지 새로운 기능을 추가했어요.</p>
<p>가까운 미래에 이 프로젝트를 위한 CLI를 만들고 싶어해요. 프로젝트에 포함되지 않은 어떤 기술들을 추가할 수 있을까요?</p>
<p>이 프로젝트가 마음에 드셨다면, 별을 한 개라도 주시면 감사하겠어요. 🌟</p>
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
<p>https://github.com/Skolaczk/next-starter</p>
<h1 id="개요" tabindex="-1"><a class="header-anchor" href="#개요" aria-hidden="true">#</a> 개요</h1>
<p>Next.js 스타터 템플릿은 TypeScript, Tailwind CSS, Next-auth, Eslint, 테스팅 도구 등과 같은 다양한 기능으로 가득한 채 제공됩니다. 효율적이고 스타일리시한 프로젝트를 즉시 시작하세요.</p>
<h1 id="기능" tabindex="-1"><a class="header-anchor" href="#기능" aria-hidden="true">#</a> 기능</h1>
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
<ul>
<li>🚀 Next.js 14 (App router)</li>
<li>⚛️ React 18</li>
<li>📘 Typescript</li>
<li>🎨 TailwindCSS — 클래스 정렬, 병합 및 린팅</li>
<li>🛠️ Shadcn/ui — 사용자 정의 가능한 UI 구성요소</li>
<li>🔒 Next-auth — Next.js용 간단한 인증 라이브러리 (GitHub 제공자)</li>
<li>🛡️ Prisma — 노드.js를 위한 ORM</li>
<li>📋 React-hook-form — 쉽고 효율적인 폼 관리</li>
<li>🔍 Zod — 스키마 유효성 검사 라이브러리</li>
<li>🧪 Jest &amp; React Testing Library — 단위 테스트용으로 설정됨</li>
<li>🎭 Playwright — 엔드 투 엔드 테스트용으로 설정됨</li>
<li>📈 Absolute Import &amp; Path Alias — @/ 접두사를 사용하여 컴포넌트 가져오기</li>
<li>💅 Prettier — 코드 포매터</li>
<li>🧹 Eslint — 코드 린팅 도구</li>
<li>🐶 Husky &amp; Lint Staged — 변경된 파일에 대해 커밋하기 전 스크립트 실행</li>
<li>🔹 아이콘 — Lucide에서 제공</li>
<li>🌑 다크 모드 — next-themes로 가능</li>
<li>🗺️ 사이트맵 및 robots.txt — next-sitemap으로 가능</li>
<li>📝 Commitlint — 깃 커밋을 린트</li>
<li>🤖 Github actions — PR에서 코드 린트</li>
<li>⚙️ T3-env — 환경 변수 관리</li>
<li>💯 완벽한 Lighthouse 점수</li>
</ul>
<h1 id="🚀-배포" tabindex="-1"><a class="header-anchor" href="#🚀-배포" aria-hidden="true">#</a> 🚀 배포</h1>
<h1 id="시작하기" tabindex="-1"><a class="header-anchor" href="#시작하기" aria-hidden="true">#</a> 시작하기</h1>
<h2 id="_1-이-템플릿을-다음-세-가지-방법-중-하나로-클론합니다" tabindex="-1"><a class="header-anchor" href="#_1-이-템플릿을-다음-세-가지-방법-중-하나로-클론합니다" aria-hidden="true">#</a> 1. 이 템플릿을 다음 세 가지 방법 중 하나로 클론합니다</h2>
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
<ul>
<li>이 저장소를 템플릿으로 사용합니다</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-23-Nextjsstartertemplate/img/Next.js-starter-template_1.png" alt="Next.js starter template"></p>
<ul>
<li>create-next-app을 사용합니다</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app <span class="token operator">-</span>e https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>Skolaczk<span class="token operator">/</span>next<span class="token operator">-</span>starter my<span class="token operator">-</span>project<span class="token operator">-</span>name
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
<ul>
<li>git clone을 사용하여</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>Skolaczk<span class="token operator">/</span>next<span class="token operator">-</span>starter my<span class="token operator">-</span>project<span class="token operator">-</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-종속-항목-설치" tabindex="-1"><a class="header-anchor" href="#_2-종속-항목-설치" aria-hidden="true">#</a> 2. 종속 항목 설치</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install
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
<h2 id="_3-허스키-준비하기" tabindex="-1"><a class="header-anchor" href="#_3-허스키-준비하기" aria-hidden="true">#</a> 3. 허스키 준비하기</h2>
<p>만약 허스키를 사용하고 싶다면 필요합니다</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run prepare
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-개발-서버-실행하기" tabindex="-1"><a class="header-anchor" href="#_4-개발-서버-실행하기" aria-hidden="true">#</a> 4. 개발 서버 실행하기</h2>
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
<p>서버를 시작하려면 이 명령어를 사용해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그리고 이 앱을 확인하려면 http://localhost:3000/ 로 이동해보세요.</p>
<p>만약 이 프로젝트가 마음에 드신다면, 별을 한 개 남겨주시면 감사하겠습니다. 🌟😊</p>
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
