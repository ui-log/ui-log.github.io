<template><div><p><img src="@source/docs/Nextjs/2024-04-05-EpicNextjs14TutorialPart1LearnNextjsbybuildingareal-lifeproject/img/EpicNextjs14TutorialPart1LearnNextjsbybuildingareal-lifeproject_0.png" alt="EpicNextjs14TutorialPart1LearnNextjsbybuildingareal-lifeproject_0"></p>
<p>안녕하세요, 멋진 여러분들! 이 글에서 여러분께 우리가 무엇을 만들 것인지 소개해 드리려고 합니다.</p>
<p>Next.js 14와 Strapi의 인기로 인해 여러분도 멋진 것들을 구축할 수 있는 능력을 가질 수 있습니다. 우리는 Next.js 14의 멋진 측면, 앱 폴더, 서버 컴포넌트 및 서버 액션을 포함한 모든 새로운 기능을 다루기 위해 함께 프로젝트를 만들어 보려고 합니다.</p>
<p>만약 비디오 형식을 선호하신다면, <a href="https://www.youtube.com/watch?v=rvo-L0cP5NA" target="_blank" rel="noopener noreferrer">여기<ExternalLinkIcon/></a> 비디오를 시청해 보실 수 있습니다.</p>
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
<p>이 게시물에서는 무엇을 만들고 어떤 주제를 다룰지 빠르게 살펴보고, 프로젝트의 기본 구조를 설정하고, 첫 번째 커밋을 만들 것입니다.</p>
<p>그럼, 우리가 무엇을 만들고 있을까요?</p>
<h2 id="문제-발생" tabindex="-1"><a class="header-anchor" href="#문제-발생" aria-hidden="true">#</a> 문제 발생</h2>
<p>그래서, 나는 문제가 있었어요. 유튜브에서 많은 시간을 보내고 동영상을 보다가, 중간에 나 자신이 완전히 흥미를 느끼지 못하는 동영상을 피할 수 있었을 것 같다는 것을 깨달았어요.</p>
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
<p>비디오를 볼 가치가 있는지 먼저 요약을 받을 수 있다면 멋지지 않을까요?</p>
<p>저 또한 비디오를 학습 자료로 활용합니다. 비디오 요약뿐만 아니라 시청한 비디오 주변에 참고할 수 있는 메모를 작성하고 싶었어요.</p>
<p>그리고 바로 그것을 우리가 만들어볼 것이에요, AI의 힘으로 YouTube 비디오를 요약할 수 있는 앱을 만드는 거죠.</p>
<p>비디오에 시간을 허비할 필요 없어요. 우리는 그저 요약을 읽으면 됩니다.</p>
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
<h2 id="ai-프로젝트-개요" tabindex="-1"><a class="header-anchor" href="#ai-프로젝트-개요" aria-hidden="true">#</a> AI 프로젝트 개요</h2>
<p><img src="https://api-prod.strapi.io/uploads/summary_demo_e3c4b06472.gif" alt="summary-demo.gif"></p>
<h2 id="사용할-기술" tabindex="-1"><a class="header-anchor" href="#사용할-기술" aria-hidden="true">#</a> 사용할 기술</h2>
<h3 id="next-js" tabindex="-1"><a class="header-anchor" href="#next-js" aria-hidden="true">#</a> Next.js</h3>
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
<p>Next.js는 React JavaScript 라이브러리를 기반으로 구축된 프론트엔드 프레임워크로, 매력적인 사용자 인터페이스를 만드는 데 유용합니다.</p>
<p>웹 개발을 간편하게 해 주어 가장 중요한 부분에 집중할 수 있게 도와줍니다. 이는 클라이언트를 위해 프로젝트를 개발할 수 있는데 가장 중요한 부분입니다.</p>
<p>그리고 이제 React Server Components 및 Server Actions와 같은 React의 새로운 기능에 모두 접근할 수 있습니다.</p>
<p>Next.js의 주요 기능 중 하나는 서버 측 렌더링입니다. 이는 웹 애플리케이션이 빠르게 로드되고 검색 엔진 순위에서 잘 나오도록 개선합니다. 성능 및 SEO에 큰 도움이 됩니다.</p>
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
<p>Next.js에는 정적 생성 기능도 있어요. 이는 필요하기 전에 파일을 먼저 생성하여 데이터를 가져오기를 기다리지 않고 빠르게 로드할 수 있음을 의미합니다.</p>
<p>게다가, Next.js는 증분 정적 재생성을 제공합니다. 이 기능은 초기 생성 이후 업데이트되지 않거나 미리 생성되지 않은 페이지에 대한 동적 변경으로 정적 콘텐츠를 업데이트합니다.</p>
<p>우리 앱을 스타일링하기 위해 Tailwind와 ShadcnUI를 사용할 거에요.</p>
<h3 id="strapi" tabindex="-1"><a class="header-anchor" href="#strapi" aria-hidden="true">#</a> Strapi</h3>
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
<p>우리 애플리케이션 개발을 더 쉽게 만드려면 Strapi [헤드리스 CMS]의 강력함을 활용할 것입니다.</p>
<p>Strapi는 오픈 소스 헤드리스 콘텐츠 관리 시스템(CMS)입니다. 기존 CMS와 달리, 콘텐츠의 프론트엔드 표현과 강하게 결합되어있는 기존 CMS와 달리, Strapi와 같은 헤드리스 CMS는 콘텐츠를 백엔드로 관리하고 RESTful 또는 GraphQL API를 통해 제공합니다.</p>
<p>즉, Strapi를 사용하여 콘텐츠를 관리하고 선택한 웹사이트, 모바일 앱 또는 기타 서버 사이드 애플리케이션과 같은 프론트엔드 프레임워크나 플랫폼으로 전달할 수 있습니다.</p>
<p>Strapi를 사용하는 주요 이점은 개발자가 관리자 패널, API 및 데이터베이스 쿼리를 자신의 특정 요구에 맞게 사용자 정의할 수 있는 유연성입니다.</p>
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
<p>다양한 데이터베이스를 지원하며 React, Vue, Angular과 같은 인기 있는 프론트엔드 프레임워크와 쉽게 통합할 수 있습니다.</p>
<p>우리는 이 경우 Next.js 14를 사용할 것입니다.</p>
<p>Strapi는 개발자와 콘텐츠 제작자가 효율적으로 작업할 수 있도록 콘텐츠 관리 프로세스를 간소화하는 데 중점을 두었습니다.</p>
<p>더 많은 일을 적은 시간에 처리하세요.</p>
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
<p>이 튜토리얼에서는 다음 Next.js와 Strapi 기능을 다루는 것이 목표입니다.</p>
<h2 id="기능" tabindex="-1"><a class="header-anchor" href="#기능" aria-hidden="true">#</a> 기능</h2>
<p><strong>Next.js 14</strong></p>
<ul>
<li>새 <code v-pre>/app</code> 디렉토리,</li>
<li>라우팅, 레이아웃, 중첩 레이아웃 및 레이아웃 그룹</li>
<li>데이터 가져오기, 캐싱 및 변이</li>
<li>로딩 UI</li>
<li>라우트 핸들러</li>
<li>메타데이터 파일</li>
<li>서버와 클라이언트 컴포넌트</li>
<li>보안 라우트 미들웨어</li>
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
<ul>
<li><strong>Shadcn UI</strong>로 구축된 UI 구성 요소</li>
<li><strong>Tailwind CSS</strong>를 사용하여 스타일 지정</li>
<li><strong>Zod</strong>를 사용한 유효성 검사</li>
<li><strong>TypeScript</strong>로 작성됨</li>
</ul>
<p><strong>Strapi</strong></p>
<ul>
<li>콘텐츠 모델링</li>
<li><strong>Strapi</strong>를 사용한 API 라우트, 미들웨어 및 정책</li>
<li><strong>Strapi</strong>를 사용한 인증</li>
<li><strong>Strapi</strong>를 사용한 ORM</li>
<li><strong>Strapi</strong>에 있는 데이터베이스</li>
</ul>
<h2 id="프로젝트-개요" tabindex="-1"><a class="header-anchor" href="#프로젝트-개요" aria-hidden="true">#</a> 프로젝트 개요</h2>
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
<h3 id="홈-페이지" tabindex="-1"><a class="header-anchor" href="#홈-페이지" aria-hidden="true">#</a> 홈 페이지</h3>
<p>기본 랜딩 페이지를 만들 예정이에요! 상단 내비게이션, 히어로 섹션, 혜택 섹션, 그리고 푸터가 포함됩니다.</p>
<p>상단 내비게이션, 히어로 섹션, 그리고 푸터의 모든 내용은 Strapi 인스턴스 안에 저장됩니다.</p>
<p><img src="https://api-prod.strapi.io/uploads/home_page_9929dbf0fc.gif" alt="home-page.gif"></p>
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
<h3 id="로그인-및-등록-페이지" tabindex="-1"><a class="header-anchor" href="#로그인-및-등록-페이지" aria-hidden="true">#</a> 로그인 및 등록 페이지</h3>
<p>Strapi를 사용하여 인증을 처리하고, Next 미들웨어 파일을 사용하여 권한이 있는 사용자가 있는지 확인하고 그에 따라 리디렉션을 수행합니다.</p>
<p><img src="https://api-prod.strapi.io/uploads/login_demo_09518314f0.gif" alt="login-demo.gif"></p>
<h3 id="대시보드" tabindex="-1"><a class="header-anchor" href="#대시보드" aria-hidden="true">#</a> 대시보드</h3>
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
<p>간단한 대시보드가 있을 거에요. 이 중앙 뷰에는 사용 가능한 크레딧, 노트 및 요약이 표시될 거예요. 그리고 상단 내비게이션에 요약 생성 폼이 나타날 거에요.</p>
<p><strong>요약 생성</strong></p>
<p>여기서는 YouTube 비디오 URL을 입력하면, 해당 URL을 통해 Open AI에 요청을 보내 YouTube 비디오 대본을 기반으로 요약을 생성할 거에요.</p>
<p>이 튜토리얼에서는 앞으로 앱을 확장할 때 사용할 수 있는 추가 기능을 제공하는 LangChain 라이브러리를 사용해 Open AI에 요청을 보낼 거에요.</p>
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
<p><img src="https://api-prod.strapi.io/uploads/summary_demo_e3c4b06472.gif" alt="summary-demo.gif"></p>
<p><strong>요약 및 메모 페이지</strong></p>
<p>여기에서는 요약 목록과 요약 상세 페이지에 액세스할 수 있습니다. 여기에서 텍스트를 업데이트하거나 요약을 완전히 삭제할 수 있습니다.</p>
<p>우리의 메모에 대해서도 유사한 섹션이 있을 예정입니다.</p>
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
<p><img src="https://api-prod.strapi.io/uploads/summary_page_dd708e612b.gif" alt="summary-page.gif"></p>
<p><strong>계정 페이지</strong></p>
<p>마침내 우리의 계정 페이지를 만들게 됩니다. 여기에서는 사용자의 이름과 성, 그리고 소개를 업데이트하고 사진을 변경할 수 있습니다.</p>
<p>저희 앱에서 대부분의 양식 제출은 꽤 멋진 Next Server Actions를 사용할 것입니다.</p>
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
<p>표 태그를 마크다운 형식으로 변경해주세요.</p>
<p><img src="https://api-prod.strapi.io/uploads/account_page_9b8a1fb1f9.gif" alt="account-page.gif"></p>
<p>함께 이 여정을 시작하게 되어 기쁘네요.</p>
<h2 id="과정-및-그것이-멋진-이유" tabindex="-1"><a class="header-anchor" href="#과정-및-그것이-멋진-이유" aria-hidden="true">#</a> 과정 및 그것이 멋진 이유</h2>
<p>저의 목표는 이 튜토리얼을 공개로 만들어 매주 새로운 게시물/비디오를 배포하는 것입니다.</p>
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
<p>모든 진행 사항은 공개 저장소에 저장되며, 지켜볼 수 있습니다.</p>
<p>당신이 나중에 필요한 대로 추가하거나 확장할 수 있는 애플리케이션을 구축하는 것이 목표입니다.</p>
<p>Next.js의 모든 중요한 부분과 미들웨어, 정책, 라우트, 컨트롤러, 서비스와 관련된 Strapi의 몇 가지 기능을 다룰 것입니다.</p>
<p>저만큼 설레이시다는 것을 바라요!</p>
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
<p>그럼 시작해봅시다.</p>
<h2 id="초기-프로젝트-설정하기" tabindex="-1"><a class="header-anchor" href="#초기-프로젝트-설정하기" aria-hidden="true">#</a> 초기 프로젝트 설정하기</h2>
<p>우리는 먼저 프론트엔드를 설정하는 것부터 시작하겠습니다. 이를 위해 <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js 14<ExternalLinkIcon/></a>를 사용할 것입니다.</p>
<h3 id="프론트엔드-설정하기" tabindex="-1"><a class="header-anchor" href="#프론트엔드-설정하기" aria-hidden="true">#</a> 프론트엔드 설정하기</h3>
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
<p>우리는 <code v-pre>epic-next-course</code>라는 새 폴더를 만들어봅시다. 터미널에서 다음 명령을 실행하여 폴더를 생성할 거에요:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> epic-next-course
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>폴더를 생성한 후에는 <code v-pre>cd epic-next-course</code>를 입력하여 해당 폴더로 이동한 다음 아래 명령을 실행해봅시다:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx create-next-app@latest
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
<p>다음 옵션을 선택하세요:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>~/epic-next-course
▶ npx create-next-app@latest
✔ 프로젝트 이름은 무엇인가요? … frontend
✔ TypeScript를 사용하시겠습니까? … No / Yes
✔ ESLint를 사용하시겠습니까? … No / Yes
✔ Tailwind CSS를 사용하시겠습니까? … No / Yes
✔ <span class="token variable"><span class="token variable">`</span>src/<span class="token variable">`</span></span> 디렉토리를 사용하시겠습니까? … No / Yes
✔ App Router를 사용하시겠습니까? <span class="token punctuation">(</span>권장<span class="token punctuation">)</span> … No / Yes
✔ 기본 <span class="token function">import</span> 별칭 <span class="token punctuation">(</span>@/*<span class="token punctuation">)</span>를 사용자 정의하시겠습니까? … No / Yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트를 생성한 후에는 <code v-pre>cd frontend</code> 명령어로 frontend 폴더로 이동하고, 프론트엔드 프로젝트를 시작하려면 <code v-pre>yarn dev</code>를 실행하세요.</p>
<p>프로젝트는 <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000<ExternalLinkIcon/></a>에서 시작됩니다.</p>
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
<p><img src="https://api-prod.strapi.io/uploads/next_js_web_ac9d2144a3.png" alt="next-js-web.png"></p>
<h3 id="스타일링을-위한-shadcn-ui-설정" tabindex="-1"><a class="header-anchor" href="#스타일링을-위한-shadcn-ui-설정" aria-hidden="true">#</a> 스타일링을 위한 Shadcn UI 설정</h3>
<p>바로 앱을 멋지게 만들기 위해 Tailwind와 Shadcn UI 컴포넌트를 사용할 것입니다. Shadcn UI는 UI 컴포넌트를 직접 코드베이스에 설치하고 필요에 따라 수정/확장할 수 있어 훌륭합니다.</p>
<p>더 많은 정보는 <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">여기<ExternalLinkIcon/></a>에서 확인할 수 있습니다.</p>
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
<p><img src="https://api-prod.strapi.io/uploads/shadcn_ui_0f155fbb09.png" alt="shadcn-ui.png"></p>
<p>이제 설정 단계를 진행해 봅시다. <a href="https://ui.shadcn.com/docs/installation/next" target="_blank" rel="noopener noreferrer">여기<ExternalLinkIcon/></a> 가이드를 참고할 수도 있어요.</p>
<p><strong>CLI 실행</strong>
shadcn-ui init 명령어를 실행해주세요:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx shadcn-ui@latest init
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
<p><strong>다음 옵션을 선택하세요</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>✔ 사용할 스타일을 선택해주세요. › 기본<span class="token punctuation">(</span>Default<span class="token punctuation">)</span>
✔ 기본 색상으로 사용할 색상을 선택해주세요. › 슬레이트<span class="token punctuation">(</span>Slate<span class="token punctuation">)</span>
✔ 색상에 CSS 변수를 사용하시겠습니까? … 아니오 / 예

✔ components.json 작성 중…
✔ 프로젝트 초기화 중…
✔ 종속성 설치 중…

성공<span class="token operator">!</span> 프로젝트 초기화가 완료되었습니다. 이제 컴포넌트를 추가할 수 있습니다.
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
<p>그게 다에요. 이제 Shadcn UI가 설치되었고 준비가 되었어요.</p>
<p>지금은 비어 있는 components 폴더가 보일 거에요.</p>
<p><img src="https://api-prod.strapi.io/uploads/empty_component_folder_efb9156579.png" alt="empty-component-folder.png"></p>
<p>첫 번째 컴포넌트를 추가해 보죠. <code v-pre>frontend</code> 폴더에서 아래 명령어를 실행하면 버튼 컴포넌트가 설치됩니다.</p>
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
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx shadcn-ui@latest <span class="token function">add</span> button
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 컴포넌트 폴더 안에 버튼이 있습니다.</p>
<p><img src="https://api-prod.strapi.io/uploads/we_have_a_button_773bb330f5.png" alt="we-have-a-button.png"></p>
<p>다음 코드로 <code v-pre>page.tsx</code> 파일 내에서 사용해봅시다. 모든 코드를 아래와 같이 대체해주세요.</p>
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
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> from “@<span class="token operator">/</span>components<span class="token operator">/</span>ui<span class="token operator">/</span>button”<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">메인 className=”컨테이너 mx-auto py-6"</span><span class="token template-punctuation string">`</span></span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">버튼</span><span class="token template-punctuation string">`</span></span>우리 멋진 버튼<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/버튼</span><span class="token template-punctuation string">`</span></span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/메인</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그 멋진 버튼을 보세요.</p>
<p><img src="https://api-prod.strapi.io/uploads/our_new_button_d6e34ed415.png" alt="our-new-button.png"></p>
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
<p>저희 Shadcn UI 컴포넌트가 예상대로 작동한다는 것을 알았으니, 첫 번째 튜토리얼을 완료해 보겠습니다. 이제 Strapi 인스턴스를 설정해 봅시다.</p>
<h3 id="백엔드-설정하기" tabindex="-1"><a class="header-anchor" href="#백엔드-설정하기" aria-hidden="true">#</a> 백엔드 설정하기</h3>
<p>백엔드로는 Strapi를 사용할 예정입니다. Strapi를 사용하면 백엔드를 몇 분 안에 구축할 수 있습니다.</p>
<p>매우 사용자 정의가 가능하며 시작하기 쉽습니다.</p>
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
<p><a href="https://docs.strapi.io/dev-docs/quick-start" target="_blank" rel="noopener noreferrer">문서<ExternalLinkIcon/></a>에서 더 많은 정보를 찾을 수 있어요. 하지만 프로젝트 폴더 안에서 다음 명령을 실행하여 시작할 거에요.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx create-strapi-app@latest backend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>프로젝트를 <code v-pre>backend</code>라고 부르고<code v-pre>설치 유형</code>으로 <code v-pre>quickstart</code>를 선택할 거에요.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>▶ npx create-strapi-app@latest
? 프로젝트 이름을 지정하세요 backend
? 설치 유형을 선택하세요 Quickstart <span class="token punctuation">(</span>추천<span class="token punctuation">)</span>
퀵스타트 프로젝트를 생성 중.
새로운 Strapi 애플리케이션을 생성 중.
파일을 생성 중.
⠼ 의존성 설치 중:
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
<p>한 번 모든 것이 설치되고 나면 Strapi의 등록 페이지가 나타납니다.</p>
<p><img src="https://api-prod.strapi.io/uploads/register_user_d6d80f13ec.png" alt="register-user.png"></p>
<p>첫 번째 <strong>관리자 사용자</strong>를 생성해 보세요. 완료하면 대시보드가 표시됩니다.</p>
<p><img src="https://api-prod.strapi.io/uploads/strapi_dashboard_63644bbe24.png" alt="strapi-dashboard.png"></p>
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
<p>축하합니다. 이제 Strapi 앱이 설정되었습니다.</p>
<p>앞으로의 게시물에서는 Strapi 대시보드를 좀 더 자세히 살펴보겠습니다. 그렇지만 지금은 <strong>컬렉션 타입</strong>을 만들어봅시다.</p>
<h2 id="첫-번째-컬렉션-타입-만들기" tabindex="-1"><a class="header-anchor" href="#첫-번째-컬렉션-타입-만들기" aria-hidden="true">#</a> 첫 번째 컬렉션 타입 만들기</h2>
<p>우리 앱은 탑 네비게이션, 주요 섹션, 특징 및 푸터 섹션을 포함한 홈페이지를 갖게 될 것입니다.</p>
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
<p><img src="https://api-prod.strapi.io/uploads/home_page_layout_ce7c66f130.png" alt="home-page-layout.png"></p>
<p>우리 첫 번째 collection type을 만들어서 이 데이터를 저장해 봅시다.</p>
<p>이 게시물에서 시작하고 다음 게시물에서 계속할 예정입니다.</p>
<p>Strapi 애플리케이션에 손쉽게 콘텐츠를 추가하고 API에서 데이터를 가져올 수 있는 방법을 보여드리고 싶어요.</p>
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
<p><code v-pre>SINGLE TYPES</code> 아래의 <code v-pre>Content-Type Builder</code>로 이동하여 <code v-pre>create-new-single-type</code>를 클릭해 봐요.</p>
<p>이름을 <code v-pre>Home Page</code>로 지을 거에요.</p>
<p><img src="https://api-prod.strapi.io/uploads/single_type_321f181e08.gif" alt="single-type.gif"></p>
<p>텍스트 필드를 추가할 거에요.</p>
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
<p>표 태그를 마크다운 형식으로 변경하세요.</p>
<p>한번 완료하면 저장을 클릭하세요.</p>
<p>이제 기본 데이터를 추가해보겠습니다.</p>
<p><img src="https://api-prod.strapi.io/uploads/adding_data_f8b5a28318.gif" alt="adding-data.gif"></p>
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
<p>위에 제목 텍스트와 설명을 추가한 후, 반드시 '발행'을 클릭하세요.</p>
<p>이제 <strong>Insomnia</strong>을 사용하여 API에서 데이터를 가져오는 방법을 살펴보겠습니다. 물론 <strong>Postman</strong>도 사용할 수 있습니다.</p>
<p>미래의 포스트에서는 물론 Next.js 프론트엔드에서 데이터를 가져올 것입니다.</p>
<h2 id="strapi-api를-통해-데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#strapi-api를-통해-데이터-가져오기" aria-hidden="true">#</a> Strapi API를 통해 데이터 가져오기</h2>
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
<p>우리가 첫 번째 데이터 유형을 준비했으니 <strong>Insomnia</strong>를 사용하여 쿼리하는 방법을 살펴봅시다.</p>
<p>하지만 먼저, 클라이언트에게 이러한 엔드포인트를 제공할 수 있도록 Strapi에 권한을 부여해야 합니다.</p>
<p>이 데이터는 공개 데이터이므로 다음 권한으로 이를 달성할 수 있습니다.</p>
<p><img src="https://api-prod.strapi.io/uploads/giving_public_access_2aec11c74f.gif" alt="giving-public-access.gif"></p>
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
<p>설정으로 이동하여 - 사용자 및 권한 플러그인 - 역할 - 공개를 선택합니다.</p>
<p><strong>홈페이지</strong>를 선택하고 확인란을 체크합니다.</p>
<p>이제 <code v-pre>http://localhost:1337/api/home-page</code>로 <code v-pre>GET</code> 요청을 보내 데이터에 액세스할 수 있어야 합니다.</p>
<p>한 번 시도해 봅시다.</p>
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
<p><img src="https://api-prod.strapi.io/uploads/home_page_data_a219268fb8.gif" alt="home-page-data.gif"></p>
<p>와우. 이제 우리는 초기 <strong>홈 페이지</strong> 데이터를 엔드포인트에서 가져와야 합니다.</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token property">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"홈 페이지"</span><span class="token punctuation">,</span>
<span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"이것은 우리의 첫 번째 단일 컬렉션 유형입니다"</span><span class="token punctuation">,</span>
<span class="token property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2024-03-03T20:05:20.941Z"</span><span class="token punctuation">,</span>
<span class="token property">"updatedAt"</span><span class="token operator">:</span> <span class="token string">"2024-03-03T20:05:22.546Z"</span><span class="token punctuation">,</span>
<span class="token property">"publishedAt"</span><span class="token operator">:</span> <span class="token string">"2024-03-03T20:05:22.543Z"</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>가기 전에, 프론트엔드에서 호출해서 초기 데이터를 렌더링할 수 있는지 확인해볼까요?</p>
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
<h2 id="첫-번째-fetch-요청-만들기" tabindex="-1"><a class="header-anchor" href="#첫-번째-fetch-요청-만들기" aria-hidden="true">#</a> 첫 번째 Fetch 요청 만들기</h2>
<p>다음 애플리케이션 내에서 데이터를 가져오는 기본 함수를 만들어 봅시다.</p>
<p>Next.js 14를 사용하고 있으므로 RSC [React Server Components]를 사용할 수 있습니다.</p>
<p><strong>프론트엔드 프로젝트</strong>에서 <code v-pre>src/app/page.tsx</code> 파일로 이동해 봅시다.</p>
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
<p>저희가 중요한 버튼 구성 요소를 추가한 곳입니다. CSS를 테스트하기 위해요.</p>
<p><img src="https://api-prod.strapi.io/uploads/home_page_next_0fd7778971.png" alt="home-page-next.png"></p>
<p>다음과 같이 데이터를 가져오기 위해 다음과 같은 리팩터링을 진행해보겠습니다.</p>
<p><code v-pre>tsx</code></p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStrapiData</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> baseUrl <span class="token operator">=</span> “http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">1337</span>"<span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>baseUrl <span class="token operator">+</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> strapiData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getStrapiData</span><span class="token punctuation">(</span><span class="token string">"/api/home-page"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> description <span class="token punctuation">}</span> <span class="token operator">=</span> strapiData<span class="token punctuation">.</span>data<span class="token punctuation">.</span>attributes<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main className<span class="token operator">=</span>”container mx<span class="token operator">-</span>auto py<span class="token operator">-</span><span class="token number">6</span>”<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span>”text<span class="token operator">-</span>5xl font<span class="token operator">-</span>bold”<span class="token operator">></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span>”text<span class="token operator">-</span>xl mt<span class="token operator">-</span><span class="token number">4</span>”<span class="token operator">></span><span class="token punctuation">{</span>description<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
다음 변경 사항을 적용한 후, 프로젝트가 실행 중인지 확인하고 `http://localhost:3000`으로 이동하면 다음을 확인할 수 있습니다.

![our-first-data.png](https://api-prod.strapi.io/uploads/our_first_data_63fd644587.png)

잘 했습니다. 이제 **백엔드**에서 **프론트엔드**로 데이터를 가져올 수 있다는 것을 알게 되었습니다.

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
<p>다음 포스트에서는 홈페이지, 내비게이션 및 푸터를 계속 만들 것입니다.</p>
<h2 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h2>
<p>대단한 일했어요, 여러분. 해냈어요. 우리는 Next.js 14와 Strapi 여정을 시작했어요.</p>
<p>프론트엔드와 백엔드를 모두 설정했어요. 이제 프로젝트의 나머지 부분을 계속해서 만들 준비가 되었어요.</p>
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
<p>프로젝트의 현재 진행 상황을 담은 repo가 있어요.</p>
<p>공개적으로 이를 구축하고 싶어서, GitHub 이슈에 의견과 질문을 자유롭게 추가해주세요.</p>
<p>저만큼 즐거웠던 것을 바랄 뿐이에요. 다음 포스트에서 만나요.</p>
<p>프로젝트 repo는 <a href="https://strp.cc/49HdLeD" target="_blank" rel="noopener noreferrer">여기<ExternalLinkIcon/></a>에서 찾을 수 있어요. 비디오는 <a href="https://strp.cc/3uXEkgy" target="_blank" rel="noopener noreferrer">여기<ExternalLinkIcon/></a>에서 확인할 수 있어요.</p>
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
<p>첫 번째 비디오를 보시려면 여기서 확인하실 수 있어요.</p>
</div></template>
