<template><div><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_0.png" />
<p>스페인어 기사</p>
<p>안녕하세요, 이 안내서는 Visual Studio Code에서 React 앱을 Azure App Service로 수동으로 배포하는 방법에 대해 알려드립니다. 딱 8단계만으로 배워보세요.</p>
<h2 id="요구-사항" tabindex="-1"><a class="header-anchor" href="#요구-사항" aria-hidden="true">#</a> 요구 사항:</h2>
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
<li>Azure 구독을 통해 무료로 Azure를 시작할 수 있습니다.</li>
<li>Visual Studio Code</li>
<li>Node.js LTS 버전</li>
<li>Git</li>
</ul>
<h2 id="시작해-봅시다" tabindex="-1"><a class="header-anchor" href="#시작해-봅시다" aria-hidden="true">#</a> 시작해 봅시다:</h2>
<p>단계 0: 새로운 React 앱 생성하기</p>
<p>터미널을 열고 다음 명령을 실행하여 새 React 앱을 생성하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app testreactinaas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_1.png" />
<p>원하는 이름으로 testreactinaas를 대체하세요.</p>
<p>단계 1: 로컬에서 React 앱을 테스트하세요: 로컬 서버에서 실행하기</p>
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
<p>터미널이나 명령 프롬프트를 열고 다음 명령을 실행해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd testreactinaas
npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_2.png" alt="이미지"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_3.png" alt="이미지"></p>
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
<p>기본적으로 앱은 http://localhost:3000/ 에서 사용할 수 있습니다.</p>
<p>단계 2: 앱 빌드하기, 앱을 배포할 준비가 되면 빌드할 수 있습니다.</p>
<p>터미널이나 명령 프롬프트를 열고 다음을 실행하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run build
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
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_4.png" alt="이미지"></p>
<p>Step 3: React 프로젝트용 Azure App Service 프로비저닝</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_5.png" alt="이미지"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_6.png" alt="이미지"></p>
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
<h2 id="단계-4-웹-앱에-대한-기본-구성" tabindex="-1"><a class="header-anchor" href="#단계-4-웹-앱에-대한-기본-구성" aria-hidden="true">#</a> 단계 4: 웹 앱에 대한 기본 구성</h2>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_7.png" alt="이미지"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_8.png" alt="이미지"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_9.png" alt="이미지"></p>
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
<p>테스트를 위해 F1 요금제를 선택해보세요. 필요에 따라 다른 것을 선택해도 괜찮아요.</p>
<p>단계 5: 웹 앱에 대한 태그 구성하기</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_10.png" alt="이미지"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_11.png" alt="이미지"></p>
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
<img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_12.png" />
<p>단계 6: Visual Studio Code에서 프로젝트를 엽니다. 그런 다음 다음 확장 프로그램을 설치하세요.</p>
<img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_13.png" />
<p>Azure Account</p>
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
<p>Azure App Service</p>
<p>Azure 자원</p>
<p>단계 7: Azure 계정에 로그인하세요</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_14.png" alt="이미지"></p>
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
<p>자격 증명을 완료하시고 나면, Azure에서 리소스를 볼 수 있게 되며 특히 5단계에서 생성한 앱 서비스를 확인할 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_15.png" alt="이미지 1"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_16.png" alt="이미지 2"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_17.png" alt="이미지 3"></p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_18.png" alt="How to manually deploy a React app to Azure App Service 18"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_19.png" alt="How to manually deploy a React app to Azure App Service 19"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_20.png" alt="How to manually deploy a React app to Azure App Service 20"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_21.png" alt="How to manually deploy a React app to Azure App Service 21"></p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-HowtomanuallydeployaReactapptoAzureAppService/img/HowtomanuallydeployaReactapptoAzureAppService_22.png" alt="img"></p>
<p>모든 것이 잘 보입니다. React 앱이 성공적으로 Azure App Services에 배포되었습니다.</p>
<p>참고: Azure 계정 보안 우선순위: 친절한 알림</p>
<p>반드시 시행해야 하는 중요한 실천 방법 중 하나는 배포 및 관리 작업을 완료한 후 Azure 계정에서 로그아웃하는 것입니다.</p>
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
<p>부디 제게 피드백을 주시면 성장할 수 있습니다. 정말 감사합니다.</p>
<p>영어 실력에 관련된 실수가 있을 시 죄송합니다. 제 두 번째 언어를 배우고 있기 때문입니다.</p>
</div></template>
