<template><div><h1 id="멀티-존" tabindex="-1"><a class="header-anchor" href="#멀티-존" aria-hidden="true">#</a> 멀티 존</h1>
<p>존은 Next.js 앱의 단일 배포입니다. 여러 개의 존을 갖고 하나의 앱으로 병합할 수 있습니다.</p>
<p>예를 들어, 다음과 같은 앱이 있다고 가정해 봅시다:</p>
<ul>
<li>/blog/**를 제공하는 앱</li>
<li>다른 모든 페이지를 제공하는 앱</li>
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
<p>멀티 존 지원으로 두 앱을 하나의 앱으로 병합하여 고객이 하나의 URL을 사용하여 탐색할 수 있지만 두 앱을 독립적으로 개발하고 배포할 수도 있습니다.</p>
<h2 id="존을-정의하는-방법" tabindex="-1"><a class="header-anchor" href="#존을-정의하는-방법" aria-hidden="true">#</a> 존을 정의하는 방법</h2>
<p>존 관련 API는 없습니다. 다음을 수행하면 됩니다:</p>
<ul>
<li>앱 내에 필요한 페이지만 유지하도록 합니다. 즉, 앱 A가 /blog를 가지고 있다면 앱 B는 동일한 페이지를 가지면 안 됩니다.</li>
<li>페이지와 정적 파일과 충돌을 피하려면 basePath를 구성하세요.</li>
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
<h2 id="존-병합하는-방법" tabindex="-1"><a class="header-anchor" href="#존-병합하는-방법" aria-hidden="true">#</a> 존 병합하는 방법</h2>
<p>한 앱이나 HTTP 프록시 중 하나에서 리라이트를 사용하여 존을 병합할 수 있어요.</p>
<p>Vercel에서의 Next.js 앱의 경우
모노레포를 사용하여
단일 git 푸시로 두 앱을 배포할 수 있어요.</p>
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
