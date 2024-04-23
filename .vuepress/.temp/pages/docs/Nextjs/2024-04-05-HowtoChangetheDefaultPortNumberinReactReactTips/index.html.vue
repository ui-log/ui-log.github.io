<template><div><img src="@source/docs/Nextjs/2024-04-05-HowtoChangetheDefaultPortNumberinReactReactTips/img/HowtoChangetheDefaultPortNumberinReactReactTips_0.png" />
<h2 id="소개-🌟" tabindex="-1"><a class="header-anchor" href="#소개-🌟" aria-hidden="true">#</a> 소개 🌟</h2>
<p>React 개발에 뛰어들 때, 처음으로 사용자 정의하고 싶은 것 중 하나는 기본 포트 번호를 변경하는 것이 될 수 있습니다. create-react-app을 사용하여 생성된 React 애플리케이션은 일반적으로 포트 3000에서 실행됩니다. 그러나 이미 해당 포트가 사용 중이거나 특정 배포 환경과 일치해야 하는 경우가 있을 수 있습니다.</p>
<p>이 글에서는 React에서 기본 포트 번호를 변경하는 과정을 안내해드릴 것입니다. 다양한 운영 체제에 대한 단계를 다룰 것이며, 초보자부터 숙련된 개발자까지 쉽게 따라 갈 수 있도록 할 것입니다.</p>
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
<p>이제 바로 시작하기 전에 개인 웹 사이트에서 웹 개발에 관한 더 심층적인 기사를 더 알아보세요:</p>
<h2 id="기본-설정-이해하기-🔍" tabindex="-1"><a class="header-anchor" href="#기본-설정-이해하기-🔍" aria-hidden="true">#</a> 기본 설정 이해하기 🔍</h2>
<p>기본적으로, create-react-app으로 생성된 React 애플리케이션은 3000번 포트에서 실행되도록 구성되어 있습니다. 이 설정은 개발 서버를 시작하는 기본 스크립트에 내장되어 있습니다. 이를 사용자 정의하려면 시작 구성을 수정해야 합니다.</p>
<h2 id="windows에서-포트-번호-변경하기-🪟" tabindex="-1"><a class="header-anchor" href="#windows에서-포트-번호-변경하기-🪟" aria-hidden="true">#</a> Windows에서 포트 번호 변경하기 🪟</h2>
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
<p>Windows에서는 환경 변수를 사용하여 포트 번호를 변경할 수 있습니다. 다음은 방법입니다:</p>
<ul>
<li>좋아하는 코드 편집기에서 프로젝트 폴더를 엽니다.</li>
<li>루트 디렉토리에서 package.json 파일을 찾습니다.</li>
<li>scripts 섹션에서 &quot;start&quot;: &quot;react-scripts start&quot;와 유사한 줄을 찾을 수 있습니다.</li>
<li>이 줄을 수정하여 PORT 환경 변수를 설정합니다. 예를 들어 포트를 5000으로 변경하려면 다음을 사용하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"set PORT=5000 &amp;&amp; react-scripts start"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>package.json 파일을 저장하세요.</li>
</ol>
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
<ol start="6">
<li>npm start을 사용하여 프로젝트를 실행해보세요. 이제 React 애플리케이션이 http://localhost:5000에서 실행 중이어야 합니다.</li>
</ol>
<h2 id="macos-linux에서-포트-번호-변경하기-🐧🍏" tabindex="-1"><a class="header-anchor" href="#macos-linux에서-포트-번호-변경하기-🐧🍏" aria-hidden="true">#</a> macOS/Linux에서 포트 번호 변경하기 🐧🍏</h2>
<p>macOS와 Linux에서의 프로세스는 비슷하지만 환경 변수를 설정하는 구문이 약간 다릅니다. 다음 단계를 따라주세요:</p>
<ul>
<li>코드 편집기에서 프로젝트를 엽니다.</li>
<li>package.json 파일에서 start 스크립트를 아래와 같이 수정하세요:</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"PORT=5000 react-scripts start"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>터미널에서 npm start를 실행하세요. 애플리케이션이 새로운 포트(http://localhost:5000 같은)에서 시작될 겁니다.</p>
<h2 id="환경-구성-파일-사용하기-📄" tabindex="-1"><a class="header-anchor" href="#환경-구성-파일-사용하기-📄" aria-hidden="true">#</a> 환경 구성 파일 사용하기 📄</h2>
<p>다른 방법은 환경별 구성 파일을 사용하는 것입니다. create-react-app은 환경 변수를 설정하기 위해 .env 파일을 지원합니다. 이렇게 사용할 수 있습니다:```</p>
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
<li>프로젝트 루트에서 .env라는 파일을 생성하세요.</li>
<li>다음 줄을 추가하여 포트를 설정하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">PORT</span><span class="token operator">=</span><span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>파일을 저장하고 npm start를 실행하세요. 앱은 지정된 포트에서 시작됩니다.</p>
<h2 id="결론-🎉" tabindex="-1"><a class="header-anchor" href="#결론-🎉" aria-hidden="true">#</a> 결론 🎉</h2>
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
<p>리액트 애플리케이션에서 포트 번호를 사용자 정의하는 것은 간단합니다. Windows, macOS 또는 Linux를 사용하든 package.json 파일이나 .env 파일을 사용하여이 설정을 쉽게 조정할 수 있습니다. 이 유연성을 통해 다양한 개발 및 배포 환경과 원할한 통합이 가능합니다. 즐거운 코딩하세요!</p>
<h1 id="stackademic" tabindex="-1"><a class="header-anchor" href="#stackademic" aria-hidden="true">#</a> Stackademic</h1>
<p>끝까지 읽어주셔서 감사합니다. 떠나기 전에:</p>
<ul>
<li>박수를 보내고 저희 작가를 팔로우해 주세요! 👏</li>
<li>Twitter(X), LinkedIn 및 YouTube에서 저희를 팔로우해주세요.</li>
<li>Stackademic.com에서 전 세계에서 무료 프로그래밍 교육을 더 democrazing하는 방법에 대해 알아보세요.</li>
</ul>
</div></template>
