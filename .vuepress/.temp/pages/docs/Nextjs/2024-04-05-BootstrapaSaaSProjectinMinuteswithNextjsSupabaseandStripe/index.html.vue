<template><div><p><img src="@source/docs/Nextjs/2024-04-05-BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe/img/BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe_0.png" alt="Bootstrap a SaaS with a modern tech stack built to move quickly"></p>
<h1 id="tl-dr" tabindex="-1"><a class="header-anchor" href="#tl-dr" aria-hidden="true">#</a> TL;DR</h1>
<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1>
<p>Bootstrap a SaaS with a modern tech stack built to move quickly. In just a few minutes you can deploy a SaaS project that includes:</p>
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
<li>Supabase — 포스트그레스 데이터베이스 및 사용자 인증</li>
<li>Stripe — 체크아웃, 구독 및 고객 포턜</li>
<li>Tailwindcss — CSS 프레임워크</li>
<li>shadcn/ui — 사전 구축 가능한 접근성 구성 요소</li>
<li>웹훅을 사용하여 Stripe와 Supabase를 자동으로 동기화</li>
<li>제품 데이터를 부트스트랩하는 Stripe 픽스처</li>
<li>데이터베이스 스키마를 부트스트랩하고 관리하기 위한 Supabase 마이그레이션</li>
<li>반응형, 성능 및 접근성이 우수한 사전 구축된 페이지</li>
<li>애니메이션 버튼 테두리! 이제 당신의 사이트는 멋져보일 수 있어요! 너드들이 너무 늦게 출시했다고 말하지 않습니다 😄</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe/img/BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe_1.png" alt=""></p>
<h1 id="시작하기" tabindex="-1"><a class="header-anchor" href="#시작하기" aria-hidden="true">#</a> 시작하기</h1>
<h2 id="단계-1-supabase-설정" tabindex="-1"><a class="header-anchor" href="#단계-1-supabase-설정" aria-hidden="true">#</a> 단계 1: Supabase 설정</h2>
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
<li>supabase.com으로 이동하여 프로젝트를 생성하세요.</li>
<li>Project Settings → Database → Database password로 이동하여 데이터베이스 비밀번호를 재설정하고 새 비밀번호를 생성하세요. (이미 생성한 비밀번호가 있지만, CLI에서 특수 문자를 사용한 비밀번호를 사용할 때 발생하는 버그를 해결할 수 있습니다)</li>
<li>이 비밀번호를 어딘가에 저장해 두세요. 상자를 닫으면 비밀번호를 확인할 수 없습니다.</li>
</ul>
<h2 id="단계-2-stripe-설정" tabindex="-1"><a class="header-anchor" href="#단계-2-stripe-설정" aria-hidden="true">#</a> 단계 2: Stripe 설정</h2>
<ul>
<li>stripe.com으로 이동하여 프로젝트를 생성하세요.</li>
<li>Customer Portal Settings로 이동하여 Active test link 버튼을 클릭하세요.</li>
</ul>
<h2 id="단계-3-배포" tabindex="-1"><a class="header-anchor" href="#단계-3-배포" aria-hidden="true">#</a> 단계 3: 배포</h2>
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
<li>이 링크를 클릭하세요: Vercel로 배포하기</li>
<li>양식에서 새로운 저장소를 생성하고 Supabase 통합을 추가하세요.</li>
<li>사용 가능한 환경 변수를 추가하세요. Stripe 웹훅 시크릿에 임의의 값만 넣어주세요. 웹훅을 구성한 후에 이 값을 업데이트할 것입니다.</li>
<li>배포를 클릭하세요.</li>
<li>기다리는 동안 새 저장소를 복제하고 코드 편집기에서 엽니다. 그 후 .env.local이라는 파일을 만들어주세요. .env.local.example의 내용을 이 파일에 복사하여 올바른 값들을 추가하세요. 위에서 추가한 값과 동일해야 합니다.</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe/img/BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe_2.png" alt="이미지"></p>
<h2 id="단계-4-stripe-웹훅" tabindex="-1"><a class="header-anchor" href="#단계-4-stripe-웹훅" aria-hidden="true">#</a> 단계 4: Stripe 웹훅</h2>
<ul>
<li>배포한 후 Vercel 대시보드로 이동하여 Vercel URL을 찾으세요.</li>
<li>다음으로 Stripe 대시보드로 이동해서 상단 네비게이션에서 개발자를 클릭하고 그 다음 웹훅 탭을 클릭하세요.</li>
<li>엔드포인트를 추가하세요. Vercel URL 뒤에 /api/webhooks을 입력하세요.</li>
<li>이벤트 선택을 클릭하세요.</li>
<li>모든 이벤트 선택을 체크하세요.</li>
<li>페이지 아래로 스크롤하여 엔드포인트 추가를 클릭하세요.</li>
<li>서명 비밀 키를 확인하여 복사하세요.</li>
<li>Vercel 프로젝트 설정으로 이동하여 환경 변수를 업데이트하세요.</li>
<li>새로 획득한 웹훅 시크릿으로 STRIPE_WEBHOOK_SECRET 환경 변수의 값을 업데이트하세요. 저장을 눌러주세요.</li>
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
<h2 id="단계-5-supabase-마이그레이션-실행하기" tabindex="-1"><a class="header-anchor" href="#단계-5-supabase-마이그레이션-실행하기" aria-hidden="true">#</a> 단계 5: Supabase 마이그레이션 실행하기</h2>
<p>이제 초기 Supabase 마이그레이션을 실행하여 데이터베이스 테이블을 만들어봅시다.</p>
<ul>
<li>npx supabase login 명령을 실행하세요.</li>
<li>npx supabase init 명령을 실행하세요.</li>
<li>package.json 파일을 열고 UPDATE_THIS_WITH_YOUR_SUPABASE_PROJECT_ID 문자열을 사용자의 Supabase 프로젝트 ID로 각각 업데이트하세요.</li>
<li>npm run supabase:link 명령을 실행하세요.</li>
<li>npm run migration:up 명령을 실행하세요.</li>
</ul>
<p>💥새로운 데이터베이스가 준비되었습니다! 이제 시작해봐요.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe/img/BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe_3.png" alt="이미지"></p>
<h2 id="단계-6-stripe-fixture-실행" tabindex="-1"><a class="header-anchor" href="#단계-6-stripe-fixture-실행" aria-hidden="true">#</a> 단계 6: Stripe Fixture 실행</h2>
<p>Stripe fixtures는 Stripe UI에서 꼬이지 않고 제품 오퍼링을 구성하는 간편한 방법입니다.</p>
<ul>
<li>Stripe CLI를 설치하세요. 맥에서는 간단히 실행하면 됩니다: brew install stripe/stripe-cli/stripe (Homebrew가 있다고 가정하며, 설치되어 있지 않다면 설치하세요)</li>
<li>stripe fixtures ./stripe-fixtures.json — api-key UPDATE_THIS_WITH_YOUR_STRIPE_SK 명령을 실행하세요
(Stripe SK로 명령어를 업데이트해야 합니다)</li>
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
<p>💥 새로운 Stripe 제품을 사용할 준비가 되었습니다! 그게 아니라, Stripe에서 변경 사항이 발생하면 웹훅이 배포된 API를 호출합니다. API 핸들러는 Stripe에서 변경된 데이터를 가져와 Supabase 데이터베이스와 동기화합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe/img/BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe_4.png" alt="이미지"></p>
<h2 id="step-7-마지막-단계" tabindex="-1"><a class="header-anchor" href="#step-7-마지막-단계" aria-hidden="true">#</a> Step 7: 마지막 단계</h2>
<ul>
<li>코드 에디터에서 UPDATE_THIS_로 검색하고 .env.local.example을 제외한 모든 인스턴스를 관련 값으로 업데이트합니다.</li>
<li>delete-me 디렉토리를 삭제하세요.</li>
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
<h2 id="단계-8-확인해보세요" tabindex="-1"><a class="header-anchor" href="#단계-8-확인해보세요" aria-hidden="true">#</a> 단계 8: 확인해보세요!</h2>
<p>🎉 잘 했어요! 이제 Stripe 대시 보드에서 제품을 확인할 수 있고, 동일한 데이터가 Supabase 데이터베이스에도 채워졌을 것입니다. 이제 모든 것을 테스트해 보겠습니다.</p>
<ul>
<li>npm i 실행</li>
<li>npm run dev 실행</li>
<li>로컬 앱으로 이동하고 무료로 시작을 클릭하세요 — 이것은 로그인 페이지로 이동합니다</li>
<li>아직 인증 제공 업체를 구성하지 않았으므로 지금은 이메일로 계속 클릭하고 이메일 주소를 제출합니다</li>
<li>이메일로 받은 링크를 클릭하면 앱으로 리디렉션됩니다 — 인증됨</li>
<li>요금제 중 하나를 선택하고 시작 클릭하세요. 이것은 Stripe 체크아웃 페이지로 이동합니다 (테스트 모드에서)</li>
<li>신용 카드 번호로 4242424242424242를 입력하세요. 나머지 양식은 유효한 데이터로 채우고 구독을 클릭하세요</li>
<li>그럼 계정 페이지로 리디렉션되어 활성 구독을 볼 수 있습니다</li>
<li>구독 관리 버튼을 클릭하여 구독을 관리할 수 있는 Stripe 고객 포털로 리디렉션됩니다</li>
</ul>
<h1 id="결과" tabindex="-1"><a class="header-anchor" href="#결과" aria-hidden="true">#</a> 결과</h1>
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
<p>짧은 설정 작업 후에는 작동하는 데이터베이스, 구성된 스트라이프 제품, 결제, 구독, 고객 포털, Stripe와 Supabase를 동기화하는 웹훅, 현대적인 기술 스택을 사용한 아름다운 코드베이스가 준비되었습니다. 이제 제품을 구축하는 데 집중할 수 있습니다.</p>
<p>새로운 코드베이스에서 코딩하는 가이드를 찾으려면 레포지토리로 이동하고 다음 링크를 통해 더 많은 정보를 알아보세요:</p>
<ul>
<li>인증 제공자 설정에 대해 더 알아보기</li>
<li>Supabase 마이그레이션에 대해 더 알아보기</li>
<li>shadcn/ui 컴포넌트에 대해 더 알아보기</li>
<li>shadcn/ui로 테마 설정에 대해 더 알아보기</li>
<li>Tailwindcss 테마 구성에 대해 더 알아보기</li>
</ul>
<p>설정이나 코드베이스에서 개발하는 데 도움이 필요하면 언제든지 트위터 @kolbysisk에서 저에게 연락해 주세요. 도와드릴 수 있는 것을 기쁘게 도와드리겠습니다. ❤️</p>
</div></template>
