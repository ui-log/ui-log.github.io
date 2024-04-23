<template><div><p><img src="@source/docs/Tech/2024-04-19-HowtoDeployaStaticWebsiteforFreeUsingGithubPages/img/HowtoDeployaStaticWebsiteforFreeUsingGithubPages_0.png" alt="How to Deploy a Static Website for Free Using Github Pages"></p>
<p>안녕하세요! GitHub는 코드 프로젝트를 저장하고 동료들과 함께 작업하는 데에 최적의 플랫폼입니다. 하지만 여러분은 그들이 무료 호스팅 솔루션인 Pages를 제공한다는 것을 아시나요?</p>
<p>이 기능은 포트폴리오, 프로젝트 문서 또는 원하는 모든 것과 같은 정적 웹사이트(HTML, CSS 및 JavaScript)를 배포하는 데에 유용합니다! 심지어 사용자 정의 도메인 이름을 구성하는 것도 가능해요 (하지만 이 튜토리얼에서는 호스팅 부분에만 집중할 거에요).</p>
<p>하지만, 한 가지 제한 사항이 있습니다. 정적 서비스이기 때문에 서버 측 스크립트 (PHP, Python 등)를 지원하지 않는다는 점이죠.</p>
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
<p>준비됐나요? 🤿</p>
<h1 id="_1-새-github-저장소-만들기" tabindex="-1"><a class="header-anchor" href="#_1-새-github-저장소-만들기" aria-hidden="true">#</a> 1. 새 GitHub 저장소 만들기</h1>
<p>위에서 언급한 대로, 정적 웹사이트를 호스팅하기 위해 GitHub Pages를 사용할 거에요. 첫 번째 단계에서는 귀하의 계정에 새 저장소를 만들어야 합니다.</p>
<p>이를 위해 GitHub에서 “새 저장소 만들기” 페이지를 열어주세요.</p>
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
<p>레포지토리에 멋진 이름을 자유롭게 선택해보세요! 🎸🤘 하지만 주의하세요, 이 이름은 당신의 웹사이트 URL의 일부가 될 것입니다.</p>
<p>이 튜토리얼에서는 제 레포지토리를 &quot;my-cool-website&quot;로 이름을 지었습니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-HowtoDeployaStaticWebsiteforFreeUsingGithubPages/img/HowtoDeployaStaticWebsiteforFreeUsingGithubPages_1.png" alt="이미지"></p>
<h1 id="_2-컴퓨터에-레포지토리-복제하기" tabindex="-1"><a class="header-anchor" href="#_2-컴퓨터에-레포지토리-복제하기" aria-hidden="true">#</a> 2. 컴퓨터에 레포지토리 복제하기</h1>
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
<p>저장소를 만들었으면 해당 페이지로 리디렉션됩니다. 거기서 HTTPS 또는 SSH 링크를 복사하여 컴퓨터에 저장소를 복제할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ git clone <span class="token punctuation">[</span><span class="token constant">HTTPS</span> 또는 <span class="token constant">SSH</span> <span class="token constant">URL</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_3-정적-웹사이트-만들기" tabindex="-1"><a class="header-anchor" href="#_3-정적-웹사이트-만들기" aria-hidden="true">#</a> 3. 정적 웹사이트 만들기</h1>
<p>창의력 발휘의 시간! 🎨</p>
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
<p>제가 즐겨 사용하는 IDE인 VSCode로 귀하의 저장소를 열어보시고 index.html 파일을 생성해보세요. 이 파일은 우리 웹사이트의 진입점이 될 것입니다.</p>
<p>아래는 제가 사용할 템플릿입니다.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>나의 멋진 웹사이트<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>우리 웹사이트에 오신 것을 환영합니다! ⭐️<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>오늘 하루는 어떠셨나요? 🎉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-코드를-github에-푸시하세요" tabindex="-1"><a class="header-anchor" href="#_4-코드를-github에-푸시하세요" aria-hidden="true">#</a> 4. 코드를 GitHub에 푸시하세요</h1>
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
<p>만족스러우신가요? 아직 만족스럽지 않다면 걱정하지 마세요. 다음 스텝에서는 어떻게 업데이트할 지 배울 거에요! ⏭</p>
<p>만약 코드가 준비되었다면, GitHub에 저장해야 할 거예요. 아래 명령어를 입력해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ git add index<span class="token punctuation">.</span>html
$ git commit <span class="token operator">-</span>m <span class="token string">"웹사이트 초기화"</span>
$ git push origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기까지는 다른 GitHub 프로젝트와 똑같이 하시면 돼요.</p>
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
<p>모든 것이 올바르게 작동되는지 확인하려면 GitHub에서 리포지토리를 열고 index.html 파일이 표시되는지 확인해보세요. 그렇다면, 다음 단계를 준비할 준비가 된 것입니다!</p>
<p><img src="@source/docs/Tech/2024-04-19-HowtoDeployaStaticWebsiteforFreeUsingGithubPages/img/HowtoDeployaStaticWebsiteforFreeUsingGithubPages_2.png" alt="GitHub Repository"></p>
<h1 id="_5-리포지토리-설정-열기" tabindex="-1"><a class="header-anchor" href="#_5-리포지토리-설정-열기" aria-hidden="true">#</a> 5. 리포지토리 설정 열기</h1>
<p>당신의 웹사이트를 배포하고 세상에 공개해봅시다! 🌐</p>
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
<p>저장소 페이지에는 맨 위에 메뉴가 있습니다. 사이드바에서 &quot;Settings&quot;의 마지막 옵션인 아래 이미지를 클릭한 후 &quot;Pages&quot;를 클릭하세요.</p>
<p><img src="@source/docs/Tech/2024-04-19-HowtoDeployaStaticWebsiteforFreeUsingGithubPages/img/HowtoDeployaStaticWebsiteforFreeUsingGithubPages_3.png" alt="Settings"></p>
<p>&quot;Pages&quot;를 클릭한 후에는 GitHub Pages 구성 페이지로 이동합니다. 이곳에서 GitHub에 웹사이트를 온라인으로 배포 요청하고 그에 대한 URL을 생성합니다.</p>
<p>두 가지 설정이 가능합니다:</p>
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
<li>배포 브랜치: 재고 저장소 중 어떤 브랜치를 배포에 사용할 것인지 선택하세요.</li>
<li>배포 폴더 (기본값은 &quot;/ root&quot;): 엔트리 포인트로 사용하고 싶은 저장소 폴더를 선택하세요. 기본 옵션을 유지하는 것이 좋습니다. 하지만 &quot;/docs&quot;를 선택하여 문서 페이지용 GitHub 웹사이트를 만들고 싶다면 선택할 수도 있습니다.</li>
</ul>
<p>가장 기본 설정을 유지하고 배포 브랜치로 &quot;main&quot;을 선택하고 배포 폴더로 &quot;/ (root)&quot;를 유지합시다.</p>
<p><img src="@source/docs/Tech/2024-04-19-HowtoDeployaStaticWebsiteforFreeUsingGithubPages/img/HowtoDeployaStaticWebsiteforFreeUsingGithubPages_4.png" alt="이미지"></p>
<p>“저장” 버튼을 클릭하면 페이지가 새로고침되며... 다 왔어요! 🥁</p>
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
<img src="@source/docs/Tech/2024-04-19-HowtoDeployaStaticWebsiteforFreeUsingGithubPages/img/HowtoDeployaStaticWebsiteforFreeUsingGithubPages_5.png" />
<p>당신의 웹사이트가 활성화되었습니다! 🎉</p>
<p>온라인 버전을 보기 위해 URL을 클릭해보세요.</p>
<p>여기가 제 웹사이트입니다!</p>
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
<p><img src="@source/docs/Tech/2024-04-19-HowtoDeployaStaticWebsiteforFreeUsingGithubPages/img/HowtoDeployaStaticWebsiteforFreeUsingGithubPages_6.png" alt="사진"></p>
<h2 id="_6-새-페이지-추가하기" tabindex="-1"><a class="header-anchor" href="#_6-새-페이지-추가하기" aria-hidden="true">#</a> 6. 새 페이지 추가하기</h2>
<p>계속해서 발전을 이야기할 때, 웹사이트에는 한 페이지만 있는 것은 부족하죠. 새 페이지를 생성해보는 것은 어떨까요? 📃</p>
<p>이제 모든 것이 설정되었으니 우리 IDE로 돌아가서 about.html 페이지를 만들어봅시다.</p>
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
<p>인덱스.html을 통해 한 것처럼 마음껏 선택한 코드를 만드세요!</p>
<p>다음은 이 새로운 페이지에 사용할 템플릿입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
   <span class="token operator">&lt;</span>head<span class="token operator">></span>
      <span class="token operator">&lt;</span>title<span class="token operator">></span>About <span class="token operator">-</span> 내 멋진 웹사이트<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
   <span class="token operator">&lt;</span>body<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>내 웹사이트 소개<span class="token operator">!</span> 🎙<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>이 튜토리얼을 따라와 주셔서 감사합니다<span class="token punctuation">.</span> 🙏<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, 홈페이지(index.html)에 클릭하여 about 페이지를 열 수 있는 버튼을 만들어봅시다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
   <span class="token operator">&lt;</span>head<span class="token operator">></span>
      <span class="token operator">&lt;</span>title<span class="token operator">></span>나의 멋진 웹사이트<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
   <span class="token operator">&lt;</span>body<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>내 웹사이트에 오신 것을 환영합니다<span class="token operator">!</span> ⭐️<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>오늘 하루 어떠셨나요<span class="token operator">?</span> 🎉<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"./about"</span><span class="token operator">></span>소개 페이지 읽기<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-웹사이트-업데이트" tabindex="-1"><a class="header-anchor" href="#_7-웹사이트-업데이트" aria-hidden="true">#</a> 7. 웹사이트 업데이트</h1>
<p>새로운 페이지가 생성되었습니다! 이제 실제로 만들어 봅시다! 🆕</p>
<p>이 튜토리얼의 마지막 단계에서는 첫 릴리스 이후 정적 웹사이트를 업데이트하는 방법을 가르쳐 드립니다.</p>
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
<p>이제 모든 것이 설정되었으니, 4단계 &quot;코드를 GitHub에 푸시&quot;를 참조하겠습니다. 이전 단계에서 우리는 코드를 저장소에 푸시했습니다. 이번에도 마찬가지로 새로운 업데이트로 진행될 것입니다.</p>
<p>about.html 페이지를 저장하고 index.html을 업데이트하고 싶습니다.</p>
<p>동일한 Git 명령어를 사용하여 이를 수행해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ git add index<span class="token punctuation">.</span>html about<span class="token punctuation">.</span>html
$ git commit <span class="token operator">-</span>m <span class="token string">"about 페이지 추가"</span>
$ git push origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>작업이 완료되면 몇 분 동안 기다린 후 웹사이트 URL로 돌아가서 새로고침하면 변경 사항이 표시됩니다!</p>
<p><img src="@source/docs/Tech/2024-04-19-HowtoDeployaStaticWebsiteforFreeUsingGithubPages/img/HowtoDeployaStaticWebsiteforFreeUsingGithubPages_7.png" alt="Step 7"></p>
<p><img src="@source/docs/Tech/2024-04-19-HowtoDeployaStaticWebsiteforFreeUsingGithubPages/img/HowtoDeployaStaticWebsiteforFreeUsingGithubPages_8.png" alt="Step 8"></p>
<h1 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h1>
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
<p>이 튜토리얼을 따라 주셔서 감사합니다! 읽으시면서 GitHub Pages에 대해 좀 더 배우셨으면 좋겠어요.</p>
<p>FlyCode에서는 Git과 GitHub에 관한 콘텐츠를 정기적으로 제공하고 있어요. 놓치고 싶지 않으시면, 트위터에서 팔로우해주시기를 초대합니다.</p>
</div></template>
