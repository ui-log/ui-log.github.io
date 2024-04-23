<template><div><p><img src="@source/docs/Nextjs/2024-04-05-HowtouseflyioandTigristodeployaNextjsapp/img/HowtouseflyioandTigristodeployaNextjsapp_0.png" alt="How to use fly.io and Tigris to deploy a Next.js app"></p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>오늘은 앱 배포 플랫폼인 fly.io와 글로벌으로 분산된 S3 호환 객체 저장 서비스 Tigris에 대해 배워볼 것입니다. 두 플랫폼은 밀접하게 연결되어 있어 프로젝트에 적합한 선택지입니다. fly.io로부터 앱 배포 경험과 Tigris로부터 객체 저장 기능을 얻을 수 있습니다. 앱 배포는 매우 직관적이기 때문에 대신에 Tigris가 사용하는 버킷 저장소에 대해 간단히 소개해보겠습니다.</p>
<p>Amazon S3 버킷은 AWS(Amazon Web Services)의 Simple Storage Service (S3) 플랫폼을 통해 접근할 수 있는 퍼블릭 클라우드 저장소 자원입니다. 전 세계에 분산되어 있는 S3 호환 객체 저장 서비스 Tigris가 사용하는 저지연 저장소는 그 중요한 기능입니다. 이는 Tigris에서 Amazon의 S3 버킷에 접근하여 저장소 요구 사항을 충족할 수 있다는 것을 의미합니다. Tigris는 Fly.io와 완전히 통합되어 있으며, Fly.io의 하드웨어에서 작동하는 flyctl과 완전히 통합되어 있습니다. Fly.io의 명령줄 인터페이스인 flyctl을 통해 계정 생성부터 애플리케이션 배포까지 플랫폼을 다룰 수 있습니다.</p>
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
<p>이 플랫폼의 기초를 배우기 위해 사용자 데이터베이스 애플리케이션을 만들 것입니다. 이해하기 쉽습니다. 사실, 우리는 읽기, 추가, 수정 및 삭제와 같은 전체 CRUD 요청을 수행할 수 있어야 합니다. Next.js가 주요 프레임워크가 될 것이며, 별도의 서버를 생성하지 않고도 풀 스택 앱을 구축할 수 있도록 해줍니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtouseflyioandTigristodeployaNextjsapp/img/HowtouseflyioandTigristodeployaNextjsapp_1.png" alt="이미지 참조"></p>
<p>fly.io와 tigris에 대해 더 알아보고, 두 플랫폼에 계정을 생성해야 합니다. 어쨌든, 설명은 여기까지하고 다음 섹션에서 계정을 작성하고 앱을 만들기 시작합시다.</p>
<p>이 프로젝트에서 온라인으로 코드베이스를 찾을 수 있습니다: <a href="https://github.com/andrewbaisden/fly-tigris-user-database" target="_blank" rel="noopener noreferrer">https://github.com/andrewbaisden/fly-tigris-user-database<ExternalLinkIcon/></a>.</p>
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
<h1 id="fly-io와-tigris에서-계정-만들기" tabindex="-1"><a class="header-anchor" href="#fly-io와-tigris에서-계정-만들기" aria-hidden="true">#</a> fly.io와 Tigris에서 계정 만들기</h1>
<p>두 플랫폼 모두 시작하려면 다음 단계를 따라주세요.</p>
<ul>
<li>먼저, Tigris를 활용하려면 Fly.io 계정이 필요하므로 fly.io에 계정을 만들어야 합니다.</li>
<li>그 다음으로, 컴퓨터에 flyctl 명령줄 도구를 설치해야 합니다. 이 도구는 애플리케이션을 배포할 때 계정을 설정하는 데 필수적입니다.</li>
</ul>
<p>자, 다음 단계로 넘어가서 프로젝트를 설정하고 Tigris 버킷 스토리지를 만들어봅시다.</p>
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
<h1 id="사용자-데이터베이스-프로젝트-설정하기" tabindex="-1"><a class="header-anchor" href="#사용자-데이터베이스-프로젝트-설정하기" aria-hidden="true">#</a> 사용자 데이터베이스 프로젝트 설정하기</h1>
<p>프로젝트를 생성할 컴퓨터 디렉토리로 이동한 후 fly-tigris-user-database라는 폴더를 만들고 해당 폴더로 이동하세요. 그런 다음 해당 폴더 내에서 Next.js 프로젝트를 설정하기 위한 명령을 실행하세요:</p>
<p>이 프로젝트에서는 Tailwind CSS와 App 라우터에 대해 'yes'로 선택해야 합니다. 이것들이 프로젝트에 필요하기 때문입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app <span class="token punctuation">.</span>
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
<p>우리가 설치해야 할 패키지는 @aws-sdk/client-s3 하나 뿐이에요. 이 패키지는 우리의 버킷에 연결하기 위해 필요합니다. 다음 명령어로 설치하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @aws<span class="token operator">-</span>sdk<span class="token operator">/</span>client<span class="token operator">-</span>s3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>좋아요, 이제 방금 만든 프로젝트를 위한 버킷을 생성할 시간이에요. 여기 https://www.tigrisdata.com/docs/get-started/에서 공식 문서를 참고해주세요.</p>
<p>다음 명령어를 실행해 버킷을 생성하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>플라이 스토리지 생성
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 설정 화면에서 버킷의 이름을 선택하세요. 이름은 고유해야 하므로 다른 사람이 선택한 이름을 사용할 수 없을 거에요. 이제 가장 중요한 단계인데요, 여기 예시처럼 AWS 및 버킷 비밀을 가지고 있어야 해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">AWS_ACCESS_KEY_ID</span><span class="token operator">:</span> 당신의 키
<span class="token constant">AWS_ENDPOINT_URL_S3</span><span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>fly<span class="token punctuation">.</span>storage<span class="token punctuation">.</span>tigris<span class="token punctuation">.</span>dev
<span class="token constant">AWS_REGION</span><span class="token operator">:</span> auto
<span class="token constant">AWS_SECRET_ACCESS_KEY</span><span class="token operator">:</span> 당신의 비밀 액세스
<span class="token constant">BUCKET_NAME</span><span class="token operator">:</span> 당신의 버킷 이름
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>당신의 Next.js 프로젝트 루트에 .env.local 파일을 생성하고, 이 비밀 환경 변수를 모두 복사해서 붙여넣으세요. 아직 끝나지 않았어요. 이 환경 변수들이 우리의 Next.js 애플리케이션 안에서 제대로 작동하려면, 그들의 이름을 공개적으로 만들어야 해요. 아래 예시를 참고하고 .env.local 파일을 수정해주세요. 또한 맨 위에 로컬호스트를 위한 별도의 환경 변수를 생성해주세요. 코드베이스를 fly.io에 업로드할 때 NEXT_PUBLIC_SECRET_HOST 환경 변수를 온라인 경로로 변경할 거에요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">NEXT_PUBLIC_SECRET_HOST</span><span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span>

<span class="token constant">NEXT_PUBLIC_SECRET_AWS_ACCESS_KEY_ID</span><span class="token operator">:</span> 당신의 키
<span class="token constant">NEXT_PUBLIC_SECRET_AWS_ENDPOINT_URL_S3</span><span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>fly<span class="token punctuation">.</span>storage<span class="token punctuation">.</span>tigris<span class="token punctuation">.</span>dev
<span class="token constant">NEXT_PUBLIC_SECRET_AWS_REGION</span><span class="token operator">:</span> auto
<span class="token constant">NEXT_PUBLIC_SECRET_AWS_SECRET_ACCESS_KEY</span><span class="token operator">:</span> 당신의 시크릿 액세스
<span class="token constant">NEXT_PUBLIC_SECRET_BUCKET_NAME</span><span class="token operator">:</span> 당신의 버킷 이름
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>현재 티그리스 문서 페이지에 들어가서 대시보드 버튼을 클릭하고 계정에 로그인하면 다음의 예시처럼 새로 생성한 버킷을 볼 수 있어요:</p>
<img src="@source/docs/Nextjs/2024-04-05-HowtouseflyioandTigristodeployaNextjsapp/img/HowtouseflyioandTigristodeployaNextjsapp_2.png" />
<p>좋아요, 첫 번째 단계를 마쳤어요. 온라인으로 앱 데이터를 저장할 버킷이 있으니 다음 섹션에서 애플리케이션을 만드는 것을 시작할 수 있습니다.```</p>
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
<h1 id="사용자-데이터베이스-애플리케이션-구축하기" tabindex="-1"><a class="header-anchor" href="#사용자-데이터베이스-애플리케이션-구축하기" aria-hidden="true">#</a> 사용자 데이터베이스 애플리케이션 구축하기</h1>
<p>안녕하세요! 여기서는 두 가지 섹션으로 나눠서 진행할 거예요. 먼저 서버를 구축하고 실행하여 CRUD 엔드포인트를 테스트할 거에요. 그런 다음, 프론트 엔드를 마무리하겠습니다.</p>
<h2 id="사용자-데이터베이스-서버-만들기" tabindex="-1"><a class="header-anchor" href="#사용자-데이터베이스-서버-만들기" aria-hidden="true">#</a> 사용자 데이터베이스 서버 만들기</h2>
<p>먼저 백엔드 아키텍처를 만들어봅시다. CRUD 요청마다 1개씩 4개의 엔드포인트를 만들 것이에요. 또한 사용자를 객체 저장소에서 가져오는 몇 가지 함수가 있는 도우미 파일이 필요합니다. 프로젝트의 루트 디렉토리로 이동하지 않았다면 아래 명령을 실행하여 모든 파일과 폴더를 빠르게 설정해주세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd src<span class="token operator">/</span>app
mkdir api
mkdir api<span class="token operator">/</span>deleteuser api<span class="token operator">/</span>getusers api<span class="token operator">/</span>postuser api<span class="token operator">/</span>updateuser
touch api<span class="token operator">/</span>deleteuser<span class="token operator">/</span>route<span class="token punctuation">.</span>js
touch api<span class="token operator">/</span>getusers<span class="token operator">/</span>route<span class="token punctuation">.</span>js
touch api<span class="token operator">/</span>postuser<span class="token operator">/</span>route<span class="token punctuation">.</span>js
touch api<span class="token operator">/</span>updateuser<span class="token operator">/</span>route<span class="token punctuation">.</span>js
mkdir helpers
touch helpers<span class="token operator">/</span>getUsers<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>빠르게 진행되었네요! 이제 5개 파일에 코드를 추가하기만 하면 백엔드 API가 테스트 준비가 끝납니다.</p>
<p>먼저 helpers 파일을 수정해봅시다. helpers/getUsers.js 파일에 이 코드를 넣어주세요. 앞서 말했듯이 이 파일에는 사용자를 가져오고, 이메일 또는 ID에 따라 사용자를 가져오는 함수가 들어 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  S3Client<span class="token punctuation">,</span>
  ListObjectsV2Command<span class="token punctuation">,</span>
  GetObjectCommand<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@aws-sdk/client-s3'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">streamToString</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">stream</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> chunks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    stream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token operator">=></span> chunks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    stream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>chunks<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchAllUsersFromS3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">S3Client</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">region</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_REGION</span><span class="token punctuation">,</span>
      <span class="token literal-property property">endpoint</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_ENDPOINT_URL_S3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">accessKeyId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_ACCESS_KEY_ID</span><span class="token punctuation">,</span>
        <span class="token literal-property property">secretAccessKey</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_SECRET_ACCESS_KEY</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> commandDetails <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListObjectsV2Command</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">Bucket</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_BUCKET_NAME</span><span class="token punctuation">,</span>
      <span class="token literal-property property">MaxKeys</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> Contents <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> s3<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>commandDetails<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'List Result'</span><span class="token punctuation">,</span> Contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Contents<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'no users'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
        Contents<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> getObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetObjectCommand</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">Bucket</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_BUCKET_NAME</span><span class="token punctuation">,</span>
            <span class="token literal-property property">Key</span><span class="token operator">:</span> item<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> Body <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> s3<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>getObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">streamToString</span><span class="token punctuation">(</span>Body<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">const</span> userObject <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Data'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> userObject<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> users<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token parameter">users<span class="token punctuation">,</span> userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>users<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'no users'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getUserByIdEmail</span><span class="token punctuation">(</span><span class="token parameter">users<span class="token punctuation">,</span> email</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>users<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'no users'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>email<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> email<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>알겠어요, 이제는 경로만 남았네요. 사용자들을 Tigris 버킷에서 모두 가져올 GET 경로를 만들어 볼 거에요. 그러니 getusers/route.js 파일에 이 코드를 넣어보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  S3Client<span class="token punctuation">,</span>
  ListObjectsV2Command<span class="token punctuation">,</span>
  GetObjectCommand<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@aws-sdk/client-s3'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">streamToString</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">stream</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> chunks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      stream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token operator">=></span> chunks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      stream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
      stream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>chunks<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">S3Client</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">region</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_REGION</span><span class="token punctuation">,</span>
      <span class="token literal-property property">endpoint</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_ENDPOINT_URL_S3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">accessKeyId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_ACCESS_KEY_ID</span><span class="token punctuation">,</span>
        <span class="token literal-property property">secretAccessKey</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_SECRET_ACCESS_KEY</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> listParams <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">Bucket</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_BUCKET_NAME</span><span class="token punctuation">,</span>
      <span class="token literal-property property">MaxKeys</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListObjectsV2Command</span><span class="token punctuation">(</span>listParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> Contents <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> s3<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'List Result'</span><span class="token punctuation">,</span> Contents<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Contents <span class="token operator">||</span> Contents<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'No users found'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'No users found'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">404</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
      Contents<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> getObjectParams <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">Bucket</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_BUCKET_NAME</span><span class="token punctuation">,</span>
          <span class="token literal-property property">Key</span><span class="token operator">:</span> item<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> getObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetObjectCommand</span><span class="token punctuation">(</span>getObjectParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> Body <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> s3<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>getObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">streamToString</span><span class="token punctuation">(</span>Body<span class="token punctuation">)</span><span class="token punctuation">;</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Backend API GET Data:'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>
      <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> e<span class="token punctuation">.</span>message <span class="token operator">||</span> <span class="token string">'Unknown error'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음은 POST 경로에요. 여기서는 데이터를 Tigris 버킷에 보내는 작업을 할 거에요. 그 코드를 postuser/route.js 파일에 넣어보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> fetchAllUsersFromS3<span class="token punctuation">,</span> getUserByIdEmail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../helpers/getUsers'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> S3Client<span class="token punctuation">,</span> PutObjectCommand <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@aws-sdk/client-s3'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">POST</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> firstname<span class="token punctuation">,</span> lastname<span class="token punctuation">,</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> req<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> id <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> firstname<span class="token punctuation">,</span> lastname<span class="token punctuation">,</span> email<span class="token punctuation">,</span> password<span class="token punctuation">,</span> id <span class="token punctuation">}</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Request body data'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> allUsers <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchAllUsersFromS3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'all users'</span><span class="token punctuation">,</span> allUsers<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> existingUser <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserByIdEmail</span><span class="token punctuation">(</span>allUsers<span class="token punctuation">,</span> email<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>existingUser<span class="token punctuation">,</span> email<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>existingUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Email address already in use'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">S3Client</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">region</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_REGION</span><span class="token punctuation">,</span>
      <span class="token literal-property property">endpoint</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_ENDPOINT_URL_S3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">accessKeyId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_ACCESS_KEY_ID</span><span class="token punctuation">,</span>
        <span class="token literal-property property">secretAccessKey</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_SECRET_ACCESS_KEY</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> commandDetails <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PutObjectCommand</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">Body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">Bucket</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_BUCKET_NAME</span><span class="token punctuation">,</span>
      <span class="token literal-property property">Key</span><span class="token operator">:</span> email<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> s3<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>commandDetails<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'User added'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Failed to create user'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이어서 UPDATE 루트를 따라가면 이 코드를 통해 버킷 내의 데이터를 업데이트할 수 있습니다. 이 코드는 updateuser/route.js에 들어갑니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getUserById<span class="token punctuation">,</span> fetchAllUsersFromS3 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../helpers/getUsers'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  S3Client<span class="token punctuation">,</span>
  DeleteObjectCommand<span class="token punctuation">,</span>
  PutObjectCommand<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@aws-sdk/client-s3'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">PUT</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> firstname<span class="token punctuation">,</span> lastname<span class="token punctuation">,</span> email<span class="token punctuation">,</span> originalEmail<span class="token punctuation">,</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> req<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'request data'</span><span class="token punctuation">,</span> firstname<span class="token punctuation">,</span> lastname<span class="token punctuation">,</span> email<span class="token punctuation">,</span> originalEmail<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> allUsers <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchAllUsersFromS3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'all users'</span><span class="token punctuation">,</span> allUsers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> userToUpdate <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserById</span><span class="token punctuation">(</span>allUsers<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'user to update'</span><span class="token punctuation">,</span> userToUpdate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> allUsers<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> userEmail <span class="token operator">=</span> user <span class="token operator">?</span> user<span class="token punctuation">.</span>email <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'User Email'</span><span class="token punctuation">,</span> userEmail<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userToUpdate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'User not found'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>originalEmail <span class="token operator">||</span> <span class="token operator">!</span>email<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Both originalEmail and email are required for update'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> firstname<span class="token punctuation">,</span> lastname<span class="token punctuation">,</span> email<span class="token punctuation">,</span> id <span class="token punctuation">}</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Updated data'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">S3Client</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">region</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_REGION</span><span class="token punctuation">,</span>
      <span class="token literal-property property">endpoint</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_ENDPOINT_URL_S3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">accessKeyId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_ACCESS_KEY_ID</span><span class="token punctuation">,</span>
        <span class="token literal-property property">secretAccessKey</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_SECRET_ACCESS_KEY</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Original email'</span><span class="token punctuation">,</span> originalEmail<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'New email'</span><span class="token punctuation">,</span> email<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>userEmail <span class="token operator">===</span> originalEmail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The emails are the same so its a match'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> deleteCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeleteObjectCommand</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">Bucket</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_BUCKET_NAME</span><span class="token punctuation">,</span>
        <span class="token literal-property property">Key</span><span class="token operator">:</span> originalEmail<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">await</span> s3<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>deleteCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> putCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PutObjectCommand</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">Body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">Bucket</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_BUCKET_NAME</span><span class="token punctuation">,</span>
        <span class="token literal-property property">Key</span><span class="token operator">:</span> email<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">await</span> s3<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>putCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'User updated successfully'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Error: The emails do not match'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Failed to update user'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>남은 것은 DELETE 루트인데, 이것은 버킷에서 데이터를 제거하는 데 사용됩니다. deleteuser/route.js에 다음 코드를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> S3Client<span class="token punctuation">,</span> DeleteObjectCommand <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@aws-sdk/client-s3'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> fetchAllUsersFromS3<span class="token punctuation">,</span> getUserById <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../helpers/getUsers'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">DELETE</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token keyword">await</span> req<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Id'</span><span class="token punctuation">,</span> id<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> allUsers <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchAllUsersFromS3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'all users'</span><span class="token punctuation">,</span> allUsers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> userToDelete <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserById</span><span class="token punctuation">(</span>allUsers<span class="token punctuation">,</span> id<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'user to delete'</span><span class="token punctuation">,</span> userToDelete<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userToDelete<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'User not found'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> userEmail <span class="token operator">=</span> userToDelete<span class="token punctuation">.</span>email<span class="token punctuation">;</span>
    <span class="token keyword">const</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">S3Client</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">region</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_REGION</span><span class="token punctuation">,</span>
      <span class="token literal-property property">endpoint</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_ENDPOINT_URL_S3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">accessKeyId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_ACCESS_KEY_ID</span><span class="token punctuation">,</span>
        <span class="token literal-property property">secretAccessKey</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_AWS_SECRET_ACCESS_KEY</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> deleteCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeleteObjectCommand</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">Bucket</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SECRET_BUCKET_NAME</span><span class="token punctuation">,</span>
      <span class="token literal-property property">Key</span><span class="token operator">:</span> userEmail<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> s3<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>deleteCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'User deleted successfully'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Failed to delete user'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>테이블 태그를 마크다운 형식으로 변경해 주세요.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-HowtouseflyioandTigristodeployaNextjsapp/img/HowtouseflyioandTigristodeployaNextjsapp_3.png" alt="How to use fly.io and Tigris to deploy a Next.js app"></p>
<p>GET requests are pretty easy. Just go to http://localhost:3000/api/getusers.</p>
<p>Doing POST Requests</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtouseflyioandTigristodeployaNextjsapp/img/HowtouseflyioandTigristodeployaNextjsapp_4.png" alt="How to use fly.io and Tigris to deploy a Next.js app"></p>
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
<p>POST 요청은 여기서 할 수 있습니다 http://localhost:3000/api/postuser.</p>
<p>PUT 요청 수행하기</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtouseflyioandTigristodeployaNextjsapp/img/HowtouseflyioandTigristodeployaNextjsapp_5.png" alt="이미지"></p>
<p>PUT 요청은 이 경로로 이동하세요 http://localhost:3000/api/updateuser. 중요한 점은 ID에 해당하는 원래 이메일 주소를 꼭 입력해야 합니다. 그렇지 않으면 작동하지 않습니다. 그리고 프론트 엔드에서도 이것을 기억해 주세요, 왜냐하면 기본 오류 처리만 구현되어 있기 때문입니다.</p>
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
<p>DELETE 요청 보내기</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtouseflyioandTigristodeployaNextjsapp/img/HowtouseflyioandTigristodeployaNextjsapp_6.png" alt="이미지"></p>
<p>DELETE 요청은 http://localhost:3000/api/deleteuser에서 할 수 있습니다.</p>
<p>좋아요, 이제 백엔드는 완벽하게 작동해야 합니다. 이제 프론트엔드만 남았네요. 그러면 온라인에서 앱을 fly.io에 배포할 수 있습니다.</p>
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
<h2 id="사용자-데이터베이스-ui-만들기" tabindex="-1"><a class="header-anchor" href="#사용자-데이터베이스-ui-만들기" aria-hidden="true">#</a> 사용자 데이터베이스 UI 만들기</h2>
<p>이제 프론트엔드 작업에서는 4개의 사용자 정의 훅을 만들기만 하면 됩니다. 각각이 자명합니다. 이러한 훅은 CRUD 요청을 수행하며 그게 전부입니다. 그 외에도 몇 가지 파일을 수정하여 Tailwind CSS 스타일이 작동하도록 만든 다음 프론트엔드 구성 요소를 마무리하면 됩니다. 제작 단계의 애플리케이션에서는 UI와 로직을위한 모든 컴포넌트를 만드는 것이 현명하지만,이 튜토리얼에서는 모든 메인 코드를 하나의 파일에 넣어 따로 컴포넌트를 구축하는 데 오랜 시간을 소비하지 않아도 되게 합니다.</p>
<p>시작하기 전에 루트 프로젝트 폴더에서 이 스크립트를 실행하여 사용자 정의 훅을위한 프로젝트 폴더 구조를 설정할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd src<span class="token operator">/</span>app
mkdir hooks
touch hooks<span class="token operator">/</span>useDelete<span class="token punctuation">.</span>js
touch hooks<span class="token operator">/</span>useFetch<span class="token punctuation">.</span>js
touch hooks<span class="token operator">/</span>usePost<span class="token punctuation">.</span>js
touch hooks<span class="token operator">/</span>useUpdate<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>지금 폴더는 끝났으니, 코드베이스를 완성하기 전에 Tailwind CSS 및 스타일링을 위한 설정을 빨리 해봅시다.</p>
<p>글로벌.css 파일의 모든 코드를 다음으로 교체하십시오. 이 코드는 단순히 배경색을 설정합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@tailwind base<span class="token punctuation">;</span>
@tailwind components<span class="token punctuation">;</span>
@tailwind utilities<span class="token punctuation">;</span>

body <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #eeeff1<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #0e0e0e<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 layout.js에서도 동일한 작업을 수행하겠습니다. 단지 Arsenal 폰트를 사용할 예정입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Arsenal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/font/google'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./globals.css'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arsenal <span class="token operator">=</span> <span class="token function">Arsenal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token string">'400'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subsets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'latin'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Create Next App'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'Generated by create next app'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body className<span class="token operator">=</span><span class="token punctuation">{</span>arsenal<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그럼 다음으로, 이 훅을 마무리하겠습니다. 먼저 useFetch.js에 다음 코드를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=></span> r<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setData</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> pollInterval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span>pollInterval<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> isLoading <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 usePost에 이 코드를 추가하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">usePost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>response<span class="token punctuation">,</span> setResponse<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">postRequest</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> formData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setError</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setResponse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> responseData <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setResponse</span><span class="token punctuation">(</span>responseData<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">setError</span><span class="token punctuation">(</span>responseData<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> isLoading<span class="token punctuation">,</span> error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> postRequest <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음은 useUpdate.js이며, 아래 코드를 받습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>response<span class="token punctuation">,</span> setResponse<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">updateRequest</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> formData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setError</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setResponse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'PUT'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> responseData <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setResponse</span><span class="token punctuation">(</span>responseData<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">setError</span><span class="token punctuation">(</span>responseData<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> isLoading<span class="token punctuation">,</span> error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> updateRequest <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로 useDelete.js가 있습니다. 여기에 있는 코드입니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>response<span class="token punctuation">,</span> setResponse<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> <span class="token function-variable function">deleteRequest</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> formData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setError</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setResponse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'DELETE'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token keyword">const</span> responseData <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setResponse</span><span class="token punctuation">(</span>responseData<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">setError</span><span class="token punctuation">(</span>responseData<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">{</span> isLoading<span class="token punctuation">,</span> error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> deleteRequest <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마침내, 이 페이지.js 파일이 이 방대한 코드 스니펫을 받게 될 것입니다. 이 빠른 튜토리얼에서는 여러 개의 컴포넌트 파일을 사용하지 않기 때문입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use client'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFetch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./hooks/useFetch'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePost <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./hooks/usePost'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./hooks/useUpdate'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useDelete <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./hooks/useDelete'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// GET API HOST URL</span>
<span class="token comment">// 예시 fly.io 온라인: https://fly-your-app-online.fly.dev/</span>
<span class="token comment">// 로컬 버전: http://localhost:3000/</span>
<span class="token keyword">const</span> <span class="token constant">API</span> <span class="token operator">=</span> <span class="token string">'http://localhost:3000/'</span><span class="token punctuation">;</span>
<span class="token comment">// POST form input 상태</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>firstname<span class="token punctuation">,</span> setFirstname<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>lastname<span class="token punctuation">,</span> setlastname<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>email<span class="token punctuation">,</span> setEmail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>password<span class="token punctuation">,</span> setPassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// UPDATE/PUT form input 상태</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>updateId<span class="token punctuation">,</span> setUpdateId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>updateFirstname<span class="token punctuation">,</span> setUpdateFirstname<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>updateLastname<span class="token punctuation">,</span> setUpdateLastname<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>updateEmail<span class="token punctuation">,</span> setUpdateEmail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>originalemail<span class="token punctuation">,</span> setOriginalemail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>updatePassword<span class="token punctuation">,</span> setUpdatePassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// DELETE form input 상태</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>deleteId<span class="token punctuation">,</span> setDeleteId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// GET 라우트</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> isLoading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">API</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/api/getusers</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>오류가 발생했습니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'클라이언트 API GET 데이터:'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> postRequest <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> updateRequest <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> deleteRequest <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// CRUD 메시지 상자 상태</span>
<span class="token keyword">const</span> useToggleMessage <span class="token operator">=</span> <span class="token punctuation">(</span>initialState <span class="token operator">=</span> <span class="token string">'hidden'</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>message<span class="token punctuation">,</span> setMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">toggleMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">'hidden'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">[</span>message<span class="token punctuation">,</span> toggleMessage<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>addUserMessage<span class="token punctuation">,</span> setAddUserMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useToggleMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>updateUserMessage<span class="token punctuation">,</span> setUpdateUserMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useToggleMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>deleteUserMessage<span class="token punctuation">,</span> setDeleteUserMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useToggleMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handlePostForm</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>
firstname <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span>
lastname <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span>
email <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span>
password <span class="token operator">===</span> <span class="token string">''</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'양식에 모든 필드를 작성해야합니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">firstname</span><span class="token operator">:</span> firstname<span class="token punctuation">,</span>
<span class="token literal-property property">lastname</span><span class="token operator">:</span> lastname<span class="token punctuation">,</span>
<span class="token literal-property property">email</span><span class="token operator">:</span> email<span class="token punctuation">,</span>
<span class="token literal-property property">password</span><span class="token operator">:</span> password<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// POST 라우트</span>
<span class="token function">postRequest</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">API</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/api/postuser</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">사용자 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>user<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setFirstname</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setlastname</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setAddUserMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleUpdateForm</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>
updateId <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span>
updateFirstname <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span>
updateLastname <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span>
originalemail <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span>
updateEmail <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span>
updatePassword <span class="token operator">===</span> <span class="token string">''</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'양식에 모든 필드를 작성해야합니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">id</span><span class="token operator">:</span> updateId<span class="token punctuation">,</span>
<span class="token literal-property property">firstname</span><span class="token operator">:</span> updateFirstname<span class="token punctuation">,</span>
<span class="token literal-property property">lastname</span><span class="token operator">:</span> updateLastname<span class="token punctuation">,</span>
<span class="token literal-property property">originalEmail</span><span class="token operator">:</span> originalemail<span class="token punctuation">,</span>
<span class="token literal-property property">email</span><span class="token operator">:</span> updateEmail<span class="token punctuation">,</span>
<span class="token literal-property property">password</span><span class="token operator">:</span> updatePassword<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">사용자: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>user<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// UPDATE 라우트</span>
<span class="token function">updateRequest</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">API</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/api/updateuser</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setUpdateId</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setUpdateFirstname</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setUpdateLastname</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setOriginalemail</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setUpdateEmail</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setUpdatePassword</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setUpdateUserMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleDeleteForm</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>deleteId <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'양식에 id를 제출해야합니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">id</span><span class="token operator">:</span> deleteId<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'사용자 ID'</span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// DELETE 라우트</span>
<span class="token function">deleteRequest</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">API</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/api/deleteuser</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">사용자 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>deleteId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 삭제됨</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">사용자 ID </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setDeleteId</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setDeleteUserMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"container mx-auto mt-4"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"text-4xl mb-2 text-center uppercase"</span><span class="token operator">></span>사용자 데이터베이스<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"bg-gray-900 text-white p-4 rounded flex justify-center"</span><span class="token operator">></span>
### <span class="token constant">ID</span> <span class="token operator">|</span> Firstname <span class="token operator">|</span> Lastname <span class="token operator">|</span> Email  
<span class="token operator">|</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">|</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">|</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">|</span><span class="token operator">--</span><span class="token operator">-</span>   
            <span class="token punctuation">{</span>data <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>tbody<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>tbody<span class="token operator">></span>
              <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>tbody<span class="token operator">></span>
                 <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>tr key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
                     <span class="token operator">&lt;</span>td className<span class="token operator">=</span><span class="token string">"border border-slate-600 p-2 bg-gray-800 hover:bg-gray-600"</span><span class="token operator">></span>
                        <span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
                     <span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
                     <span class="token operator">&lt;</span>td className<span class="token operator">=</span><span class="token string">"border border-slate-600 p-2 bg-gray-800 hover:bg-gray-600"</span><span class="token operator">></span>
                        <span class="token punctuation">{</span>user<span class="token punctuation">.</span>firstname<span class="token punctuation">}</span>
                     <span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
                     <span class="token operator">&lt;</span>td className<span class="token operator">=</span><span class="token string">"border border-slate-600 p-2 bg-gray-800 hover:bg-gray-600"</span><span class="token operator">></span>
                       <span class="token punctuation">{</span>user<span class="token punctuation">.</span>lastname<span class="token punctuation">}</span>
                     <span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
                     <span class="token operator">&lt;</span>td className<span class="token operator">=</span><span class="token string">"border border-slate-600 p-2 bg-gray-800 hover:bg-gray-600"</span><span class="token operator">></span>
                       <span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span>
                     <span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>
                 <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>tbody<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">}</span>
###  
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"bg-slate-100 rounded p-10 drop-shadow-lg"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"bg-white p-4 rounded drop-shadow-md"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"text-2xl mb-4"</span><span class="token operator">></span>사용자 추가<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
  <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handlePostForm</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-wrap items-center mb-2"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"p-2 w-36 border-solid border-2"</span><span class="token operator">></span>
        Firstname
      <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">"text"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>firstname<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setFirstname</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        className<span class="token operator">=</span><span class="token string">"grow p-2 border border-2"</span>
        required
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-wrap items-center mb-2"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"p-2 w-36 border-solid border-2"</span><span class="token operator">></span>Lastname<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">"text"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>lastname<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setlastname</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        className<span class="token operator">=</span><span class="token string">"grow p-2 border border-2"</span>
        required
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-wrap items-center mb-2"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"p-2 w-36 border-solid border-2"</span><span class="token operator">></span>Email<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">"email"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>email<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setEmail</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        className<span class="token operator">=</span><span class="token string">"grow p-2 border border-2"</span>
        required
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-wrap items-center mb-2"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"p-2 w-36 border-solid border-2"</span><span class="token operator">></span>Password<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">"password"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setPassword</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        className<span class="token operator">=</span><span class="token string">"grow p-2 border border-2"</span>
        required
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button
        type<span class="token operator">=</span><span class="token string">"submit"</span>
        className<span class="token operator">=</span><span class="token string">"bg-slate-600 hover:bg-slate-400 p-2 text-white cursor-pointer font-bold rounded-lg"</span>
      <span class="token operator">></span>
        사용자 추가
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">bg-amber-100 p-2 mt-4 rounded </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>addUserMessage<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>
        사용자 추가됨
      <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>앱이 정상적으로 작동하도록 완료했으므로 이제 마지막 단게에서 온라인으로 배포해야 합니다.</p>
<h2 id="fly-io로-앱-배포하기" tabindex="-1"><a class="header-anchor" href="#fly-io로-앱-배포하기" aria-hidden="true">#</a> fly.io로 앱 배포하기</h2>
<p>배포는 마지막 단계이며 여기 https://fly.io/docs/apps/launch/ 에서 문서를 읽을 수 있습니다. 명령어는 fly launch 그리고 fly deploy 여러분의 앱을 온라인으로 가져오기 위한 것입니다.</p>
<p>앱을 fly.io에서 Secrets 페이지에 환경 변수를 추가하는 것을 잊지 마세요 .env.local 파일에. 앱을 온라인으로 배포할 때 메인 page.js 파일 내의 frontend routes를 위한 API HOST URL을 업데이트하세요. 사용 예시 코드는 여기서 확인할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// API 호스트 URL 가져오기</span>
<span class="token comment">// 예시 fly.io 온라인: https://fly-your-app-online.fly.dev/</span>
<span class="token comment">// 로컬 버전: http://localhost:3000/</span>
<span class="token keyword">const</span> <span class="token constant">API</span> <span class="token operator">=</span> <span class="token string">'http://localhost:3000/'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 배포도 완료되었고, 우리 애플리케이션을 온라인으로 액세스할 수 있습니다!</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>오늘은 Next.js를 사용하여 풀스택 애플리케이션을 구축하고 fly.io 앱 호스팅 플랫폼에 온라인으로 배포하는 방법을 배웠습니다. 또한 사용자 데이터를 AWS 버킷에 저장하기 위해 Tigris를 활용했습니다. 두 플랫폼의 조합은 앱을 온라인으로 만드는 데 매우 유용하고 강력한 플랫폼으로 만듭니다. 두 플랫폼은 각각 많은 다양한 기능을 제공하므로 이를 활용하여 프로젝트에 어떻게 유용할지 살펴보는 것이 좋습니다.```</p>
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
<h1 id="친절하게-말하자면-🚀" tabindex="-1"><a class="header-anchor" href="#친절하게-말하자면-🚀" aria-hidden="true">#</a> 친절하게 말하자면 🚀</h1>
<p>In Plain English 커뮤니티에 참여해 주셔서 감사합니다! 가기 전에:</p>
<ul>
<li>필자를 클랩하고 팔로우해주세요 👏</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | Newsletter</li>
<li>다른 플랫폼 방문하기: Stackademic | CoFeed | Venture | Cubed</li>
<li>더 많은 컨텐츠: PlainEnglish.io</li>
</ul>
</div></template>
