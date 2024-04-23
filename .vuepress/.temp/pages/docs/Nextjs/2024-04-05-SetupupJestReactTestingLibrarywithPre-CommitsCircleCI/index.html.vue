<template><div><p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_0.png" alt="이미지"></p>
<p>Jest 및 React Testing Library를 Pre-Commits (Husky) 및 CI (CircleCI)와 함께 설정해 보겠습니다. 이는 적절한 테스트 주도 개발 (TDD)을 위한 것입니다.</p>
<p>TDD는 테스트를 작성하고 응용 프로그램이 예상대로 실행되는지 확인하는 것뿐만 아니라, CI/CD 파이프라인을 통해 제품을 출시하고 Pre-commit 훅을 사용하여 높은 개발자 경험을 제공하는 것도 포함됩니다.</p>
<h1 id="우리가-하는-일" tabindex="-1"><a class="header-anchor" href="#우리가-하는-일" aria-hidden="true">#</a> 우리가 하는 일</h1>
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
<p>이 기사는 두 부분으로 나뉩니다:</p>
<ul>
<li>첫 번째 부분: Pre-Commits로 TDD 설정하기 (Husky)</li>
<li>두 번째 부분: CI/CD 플랫폼 (CircleCI)를 활용하여 TDD 설정하기</li>
</ul>
<h2 id="기술-스택" tabindex="-1"><a class="header-anchor" href="#기술-스택" aria-hidden="true">#</a> 기술 스택</h2>
<ul>
<li>설정 도구: Vite ⚡️ 및 React Typescript 템플릿으로 React를 사용합니다.</li>
<li>주요 패키지: Jest 🃏 및 React Testing Library 🐙</li>
<li>Pre-Commit 도구: Husky 🐶</li>
<li>CI (지속적 통합) 플랫폼: CircleCI 🚢</li>
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
<h1 id="폴더-구조" tabindex="-1"><a class="header-anchor" href="#폴더-구조" aria-hidden="true">#</a> 폴더 구조</h1>
<p>이것이 우리가 가고 있는 폴더 구조입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">-</span><span class="token punctuation">.</span>circleci <span class="token operator">&lt;=</span> CircleCI를 이용한 <span class="token constant">CI</span> 설정
<span class="token operator">-</span><span class="token punctuation">.</span>husky <span class="token operator">&lt;=</span> Husky를 이용한 Pre<span class="token operator">-</span>Commit 설정
<span class="token operator">-</span>src
  <span class="token operator">-</span>components
    <span class="token operator">-</span>Counter
      <span class="token operator">-</span>index<span class="token punctuation">.</span>tsx
      <span class="token operator">-</span>Counter<span class="token punctuation">.</span>test<span class="token punctuation">.</span>tsx <span class="token operator">&lt;=</span> Counter 컴포넌트에 대한 테스트
    <span class="token operator">-</span>Link
      <span class="token operator">-</span>index<span class="token punctuation">.</span>tsx
      <span class="token operator">-</span>Link<span class="token punctuation">.</span>test<span class="token punctuation">.</span>tsx <span class="token operator">&lt;=</span> Link 컴포넌트에 대한 테스트
      <span class="token operator">-</span>__snapshots__ <span class="token operator">&lt;=</span> 스냅샷 테스트에 의해 생성된 스냅샷
  <span class="token operator">-</span>other stuff<span class="token operator">...</span>
<span class="token operator">-</span><span class="token keyword">package</span><span class="token punctuation">.</span>json
<span class="token operator">-</span>node_modules 및 기타<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_1-첫-번째-부분-pre-commit을-이용한-tdd-설정-husky" tabindex="-1"><a class="header-anchor" href="#_1-첫-번째-부분-pre-commit을-이용한-tdd-설정-husky" aria-hidden="true">#</a> 1. 첫 번째 부분: Pre-Commit을 이용한 TDD 설정 (Husky)</h1>
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
<p>프리 커밋 훅은 커밋을 하기 전에 실행되는 특별한 스크립트입니다. 우리는 이러한 훅을 사용하여 특정 조건이 충족될 때에만 커밋이 발생하도록 합니다. 이는 더 나은 코드 품질을 유지하고 불필요한 커밋을 줄여줍니다.</p>
<p>Husky 🐶은 프리 커밋 훅을 처리하고 설정하는 데 사용되는 필수 도구입니다. 작동 방식은 다음과 같습니다:</p>
<ul>
<li>커밋을 시도하면 Husky가 프리 커밋 스크립트를 트리거합니다.</li>
<li>프리 커밋 스크립트는 Jest를 실행하여 모든 테스트를 실행합니다.</li>
<li>모든 테스트가 통과하면 ✅ 커밋이 정상적으로 진행됩니다.</li>
<li>테스트 중 하나라도 실패하면 ❌, Husky가 커밋을 막고 실패 사항을 상세히 나타내는 오류 메시지를 볼 수 있습니다.</li>
</ul>
<p>이는 변경 사항을 푸시하기 전에 오류를 잡아 코드 품질을 보장하는 데 도움이 됩니다.</p>
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
<h2 id="a-husky-설치하기" tabindex="-1"><a class="header-anchor" href="#a-husky-설치하기" aria-hidden="true">#</a> a. Husky 설치하기</h2>
<p>원하는 패키지 관리자를 사용하여 Husky를 설치하세요. 저는 npm을 사용하고 있어요. Husky를 개발 의존성으로 설치하고 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev husky
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="b-husky-초기화하기" tabindex="-1"><a class="header-anchor" href="#b-husky-초기화하기" aria-hidden="true">#</a> b. Husky 초기화하기</h2>
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
<p>우리의 루트 디렉터리에서 'husky init' 명령을 실행해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx husky init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령어는 두 가지를 수행합니다:</p>
<ul>
<li>.husky/pre-commit와 같은 .husky 폴더 내의 pre-commit 스크립트를 생성합니다.</li>
<li>package.json 파일에서 prepare 스크립트를 업데이트하거나 추가합니다. package.json 파일의 scripts 섹션 안에 &quot;prepare&quot;: &quot;husky&quot; 라는 항목을 찾을 수 있습니다.</li>
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
<h2 id="c-패키지-json에서-테스트-스크립트-설정하기" tabindex="-1"><a class="header-anchor" href="#c-패키지-json에서-테스트-스크립트-설정하기" aria-hidden="true">#</a> c. 패키지.json에서 테스트 스크립트 설정하기</h2>
<p>우리의 package.json 파일에서 &quot;scripts&quot; 섹션에 테스트 스크립트를 추가해봅시다:</p>
<ul>
<li>&quot;test&quot;: &quot;react-scripts test&quot; : 이것은 테스트를 실행하는 기본 방법입니다. 이는 감시 모드에서 우리의 테스트를 실행할 것입니다 👀 즉, 코드를 변경하고 저장하면 모든 테스트가 다시 실행될 것입니다.</li>
<li>&quot;test:staged&quot;: &quot;CI=true react-scripts test --o&quot; : 이것은 CI 모드에서 테스트를 실행합니다. 이 모드는 pre-commit 훅과 통합하기에 더 적합합니다 ✅.
-- o 플래그는 마지막 커밋 이후 변경된 파일들과 관련된 테스트만 실행하는 데 사용됩니다 😎.</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"jest-react"</span><span class="token punctuation">,</span>
<span class="token comment">// ... 기존 stuff</span>
<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 기존 stuff</span>
  <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"react-scripts test"</span><span class="token punctuation">,</span>
  <span class="token property">"test:staged"</span><span class="token operator">:</span> <span class="token string">"CI=true react-scripts test --o"</span><span class="token punctuation">,</span>
  <span class="token property">"prepare"</span><span class="token operator">:</span> <span class="token string">"husky"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
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
<h2 id="d-커밋하기-전에-실행할-테스트-설정" tabindex="-1"><a class="header-anchor" href="#d-커밋하기-전에-실행할-테스트-설정" aria-hidden="true">#</a> d. 커밋하기 전에 실행할 테스트 설정</h2>
<p>우리의 ./husky/pre-commit 파일에서, npm run test:staged 명령어를 작성하세요. 이 명령어는 package.json에서 정의된 &quot;test:staged&quot; 스크립트를 실행합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run test<span class="token operator">:</span>staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>만약 테스트가 통과하면 ✅, 커밋이 진행됩니다. 그렇지 않으면, 테스트가 실패하면 ❌, 커밋이 중지되고 실패한 이유를 설명하는 오류 메시지가 출력됩니다.</p>
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
<h2 id="d-우리가-pre-commit에서-test-staged-를-사용한-이유는-무엇인가요-🤔" tabindex="-1"><a class="header-anchor" href="#d-우리가-pre-commit에서-test-staged-를-사용한-이유는-무엇인가요-🤔" aria-hidden="true">#</a> d. 우리가 pre-commit에서 &quot;test:staged&quot;를 사용한 이유는 무엇인가요? 🤔</h2>
<p>만약 우리가 ./husky/pre-commit 파일 내에 &quot;test&quot;: &quot;react-scripts test&quot;를 사용한다면, 우리가 새로운 커밋을 추가할 때마다 테스트가 성공했는지 실패했는지와는 무관하게 Jest가 watch 모드에 갇히게 됩니다 ⚠️.
그래서, 이 방법은 pre-commits에 적합하지 않습니다 ❌.</p>
<p>하지만, 우리가 &quot;test:staged&quot;: &quot;CI=true react-scripts test --o&quot;를 사용한다면, Jest는 CI=true 명령 때문에 테스트를 watch 모드로 실행하지 않는다는 점을 이해합니다. 또한 --o flag는 마지막 커밋 이후 변경된 파일들만을 테스트하도록 보장하여, 특히 대규모 프로젝트에서 개발 속도를 높일 수 있습니다.
그래서, 이 방법은 pre-commits에 적합합니다 ✅.</p>
<h2 id="e-데모" tabindex="-1"><a class="header-anchor" href="#e-데모" aria-hidden="true">#</a> e. 데모</h2>
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
<p>의도적으로 코드를 깨뜨려서 몇 가지 테스트가 실패하도록 해 봅시다 ❌.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_1.png" alt="Test Image 1"></p>
<p>그런 다음 새로운 git 커밋을 추가해 봅시다. git commit -m “testing husky”. 우리는 테스트가 실패했음을 확인할 수 있습니다 ❌. 따라서 우리의 커밋이 기록되지 않고 Husky에 의해 폐기되는 것을 확인할 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_2.png" alt="Test Image 2"></p>
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
<p>실패는 이제 그만! 이제 테스트를 통과해보세요 ✅. 여기서 코드를 수정하여 테스트가 통과하도록 변경했어요 ✅.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_3.png" alt="이미지"></p>
<p>자, 이제 새로운 커밋을 추가해봅시다. <code v-pre>git commit -m &quot;testing husky, tests should pass&quot;</code>. 모든 테스트가 통과하는 것을 확인할 수 있어요✅. 따라서 우리의 커밋이 성공적으로 등록되었습니다 ✅.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_4.png" alt="이미지"></p>
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
<h1 id="_2-두-번째-부분-ci-cd-플랫폼-circleci-에서-tdd-설정하기" tabindex="-1"><a class="header-anchor" href="#_2-두-번째-부분-ci-cd-플랫폼-circleci-에서-tdd-설정하기" aria-hidden="true">#</a> 2. 두 번째 부분: CI/CD 플랫폼(CircleCI)에서 TDD 설정하기</h1>
<p>우리는 Pre-Commit과 Jest를 성공적으로 설정했습니다. 이제 CI/CD 플랫폼에서 설정합니다. 이를 위해 CircleCI를 선택했습니다.</p>
<p>Pre-Commit으로 테스트를 실행할 때, 마지막 커밋 이후에 변경된 파일에 대해서만 테스트를 실행하는 것이 좋습니다.</p>
<p>CI/CD 환경에서 🚢, 언제나 모든 테스트를 실행하여 애플리케이션이 오류가 발생하기 어려운 상태를 유지하는 것이 최선의 실천 방법입니다. ✅</p>
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
<h2 id="a-ci-모드에서-모든-테스트를-실행하는-스크립트-작성하기" tabindex="-1"><a class="header-anchor" href="#a-ci-모드에서-모든-테스트를-실행하는-스크립트-작성하기" aria-hidden="true">#</a> a. CI 모드에서 모든 테스트를 실행하는 스크립트 작성하기</h2>
<p>우리의 package.json에 CircleCI에서 실행될 다른 스크립트를 작성해보겠습니다. 이 스크립트는 “test:staged_all”: “CI=true react-scripts test” 입니다.</p>
<p>이 &quot;test:staged_all&quot; 스크립트는 CI 모드에서 테스트를 실행할 것이며(우리가 Husky 설정에서 test:staged에서 했던 것과 같은 방식), 마지막 커밋 이후 변경된 파일들에 대해 테스트를 실행하는 것이 아니라 모든 테스트 ⏳를 실행할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// package.json</span>
<span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"jest-react"</span><span class="token punctuation">,</span>
<span class="token comment">// ... 일반적인 내용</span>
<span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 일반적인 내용</span>
  <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"react-scripts test"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"test:staged"</span><span class="token operator">:</span> <span class="token string">"CI=true react-scripts test --o"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"test:staged_all"</span><span class="token operator">:</span> <span class="token string">"CI=true react-scripts test"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"prepare"</span><span class="token operator">:</span> <span class="token string">"husky"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="b-로컬에서-circleci-설정하기" tabindex="-1"><a class="header-anchor" href="#b-로컬에서-circleci-설정하기" aria-hidden="true">#</a> b. 로컬에서 CircleCI 설정하기</h2>
<p>우리의 루트 디렉토리에서 .circleci 폴더를 만들고 그 안에 config.yml 파일을 생성하세요.</p>
<p>일반적으로 CircleCI는 새로운 git 브랜치로 프로젝트를 생성할 때 자동으로 .circleci/config.yml 파일을 생성하지만, 이 기사를 위해서는 수동으로 생성할 것입니다.</p>
<p>아래 내용을 .circleci/config.yml 파일에 넣어주세요:</p>
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
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 소스 코드로부터 설정 파일을 자동으로 생성할 수 없었습니다.</span>
<span class="token comment"># 사용자 지정 설정을 위한 기본 템플릿으로 사용할 일반 템플릿</span>

<span class="token comment"># CircleCI 파이프라인 프로세스 엔진의 최신 2.1 버전을 사용합니다.</span>
<span class="token comment"># 자세한 내용은 아래 링크를 확인하세요: https://circleci.com/docs/configuration-reference</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">2.1</span>

<span class="token comment"># Node.js Orb</span>
<span class="token key atrule">orbs</span><span class="token punctuation">:</span>
  <span class="token key atrule">node</span><span class="token punctuation">:</span> circleci/node@5.0.2

<span class="token comment"># 나중에 워크플로에서 호출될 작업을 정의합니다.</span>
<span class="token comment"># 자세한 내용은 아래 링크를 확인하세요: https://circleci.com/docs/jobs-steps/#jobs-overview &amp; https://circleci.com/docs/configuration-reference/#jobs</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test</span><span class="token punctuation">:</span>
    <span class="token key atrule">docker</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> cimg/base<span class="token punctuation">:</span>current
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> checkout
      <span class="token punctuation">-</span> <span class="token key atrule">node/install</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">"16.13"</span>
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> node <span class="token punctuation">-</span><span class="token punctuation">-</span>version
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> 의존성 설치
          <span class="token key atrule">command</span><span class="token punctuation">:</span> npm install
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> 테스트 실행
          <span class="token key atrule">command</span><span class="token punctuation">:</span> npm run test<span class="token punctuation">:</span>staged_all
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">docker</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> cimg/base<span class="token punctuation">:</span>current
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> checkout
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> 아티팩트 빌드
          <span class="token key atrule">command</span><span class="token punctuation">:</span> touch example.txt
      <span class="token punctuation">-</span> <span class="token key atrule">store_artifacts</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> example.txt
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">docker</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> cimg/base<span class="token punctuation">:</span>current
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> 배포
          <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token string">"#예: ./deploy.sh"</span>

<span class="token comment"># workflows를 사용하여 작업을 조율합니다.</span>
<span class="token comment"># 자세한 내용은 아래 링크를 확인하세요: https://circleci.com/docs/workflows/ &amp; https://circleci.com/docs/configuration-reference/#workflows</span>
<span class="token key atrule">workflows</span><span class="token punctuation">:</span>
  <span class="token key atrule">example</span><span class="token punctuation">:</span>
    <span class="token key atrule">jobs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> test
      <span class="token punctuation">-</span> <span class="token key atrule">build</span><span class="token punctuation">:</span>
          <span class="token key atrule">requires</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> test
      <span class="token punctuation">-</span> <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
          <span class="token key atrule">requires</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>config.yml 파일의 25번째 줄인 jobs:<code v-pre>test:</code>steps:에는 다음 단계들이 있습니다:</p>
<ul>
<li>node/install: : node-version 16.13으로 node.js를 설치합니다.</li>
<li>run: : node --version 명령을 실행하여 node.js가 설치되었는지 확인합니다.</li>
<li>run: : npm install 명령을 사용하여 프로젝트와 관련된 모든 종속성을 설치합니다.</li>
<li>run: : npm run test:staged_all 명령을 실행하여 테스트를 수행합니다.</li>
</ul>
<p>나머지 내용은 무시해도 상관없어요 🙇‍♂️.```</p>
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
<h2 id="c-github으로-변경-사항-푸시하기" tabindex="-1"><a class="header-anchor" href="#c-github으로-변경-사항-푸시하기" aria-hidden="true">#</a> c. Github으로 변경 사항 푸시하기</h2>
<p>로컬에 CircleCI가 설정되었습니다. 이제 코드를 커밋하고 Github에 푸시해 보세요 🌐.</p>
<h2 id="d-circleci에-가입하기" tabindex="-1"><a class="header-anchor" href="#d-circleci에-가입하기" aria-hidden="true">#</a> d. CircleCI에 가입하기</h2>
<p>CircleCI 웹사이트로 이동하여 계정을 만드세요. 이미 계정이 있다면 로그인하세요.</p>
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
<h2 id="e-새-프로젝트-만들기" tabindex="-1"><a class="header-anchor" href="#e-새-프로젝트-만들기" aria-hidden="true">#</a> e. 새 프로젝트 만들기</h2>
<p>CircleCI 대시보드에서 Projects로 이동하여 &quot;프로젝트 만들기&quot;를 클릭하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_5.png" alt="이미지"></p>
<p>이제 원격 저장소 서비스를 선택하세요. 제 프로젝트 저장소는 Github에 있으므로 Github를 선택했습니다. Github, Gitlab 및 Bitbucket 중 하나를 선택할 수 있습니다.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_6.png" alt="SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_6.png"></p>
<p>프로젝트에 대한 일부 세부 정보를 확인하세요. 프로젝트 이름을 지정하고, 제 프로젝트는 article-tdd-jest입니다. 개인 SSH 키를 생성하는 지침을 따르고, 공개 SSH 키를 Github 프로젝트 저장소의 배포 키로 사용하고, 아래에 제공된 필드에 개인 키를 복사하세요(이미지 1 🌁).</p>
<p>알림 ⚠️: 지금까지 CircleCI에 프로젝트 권한을 부여하지 않았다면, 아래의 저장소 드롭다운 목록에서 귀하의 저장소 이름을 볼 수 없습니다.</p>
<p>해결 방법 ✅: 이를 해결하려면, GitHub 앱 저장소 권한 업데이트 링크를 클릭하여 CircleCI 앱으로 리디렉션됩니다. Github의 Repository Access 섹션으로 이동하십시오. &quot;Only select repositories&quot; 선택한 다음, CircleCI가 액세스 권한을 부여해야 하는 리포지토리를 선택하세요. 제 프로젝트의 경우 article-tdd-jest입니다(이미지 2 🌁).</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_7.png" alt="이미지"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_8.png" alt="이미지"></p>
<p>그리고 &quot;프로젝트 생성&quot;을 클릭하세요. CircleCI가 프로젝트를 생성할 것입니다 ✅.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_9.png" alt="이미지"></p>
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
<h2 id="f-circleci를-실제로-보기" tabindex="-1"><a class="header-anchor" href="#f-circleci를-실제로-보기" aria-hidden="true">#</a> f. CircleCI를 실제로 보기</h2>
<p>이제 깃허브에 몇 가지 변경 사항을 푸시하여 CircleCI가 자동으로 연속 통합 (CI) 파이프라인을 실행하고 테스트를 실행하는 것을 확인해 봅시다.</p>
<p>Counter.test.tsx를 업데이트하여 테스트를 통해 통과되도록 해 보세요 ✅.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_10.png" alt="이미지"></p>
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
<p>그럼, 우리 Github의 main 브랜치에 커밋하고 푸시해주세요.</p>
<p>Markdown 형식으로 테이블 태그를 변경합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_11.png" alt="이미지1"></p>
<p>우리 Github에서 변경 사항을 확인해보세요. &quot;3 pending checks&quot;라고 표시되어 있어야 합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_12.png" alt="이미지2"></p>
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
<p>CI 파이프라인이 CircleCI에서 작동 중임을 확인할 수 있어요. 자세히 보려면 &quot;test&quot; 작업을 클릭하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_13.png" alt="CircleCI"></p>
<p>우리가 <code v-pre>.circleci/config.yml</code> 파일에서 정의한대로 &quot;Node.js 16.13 설치&quot;, &quot;node 버전 확인&quot;, &quot;의존성 설치&quot;, &quot;테스트 실행&quot;과 같은 모든 작업이 실행되는 것을 볼 수 있어요.</p>
<p>자세한 테스트 내용을 보려면 &quot;Run Tests&quot;를 클릭하세요.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_14.png" alt="이미지"></p>
<p>우리 모든 테스트(Link.test.tsx 및 Counter.test.tsx 총 2개의 테스트)가 실행되었고 통과했음을 볼 수 있어요 ✅.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupupJestReactTestingLibrarywithPre-CommitsCircleCI/img/SetupupJest-ReactTestingLibrarywithPre-Commits-CircleCI_15.png" alt="이미지"></p>
<p>여기까지 읽어주셔서 감사합니다 🙇‍♂️. 제 글에 귀중한 시간과 에너지를 투자해주셔서 영원히 감사할 거예요. 궁금한 점이 있으시면 👏 반응과 댓글을 남겨주세요.</p>
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
<p>행복한 코딩하세요!</p>
</div></template>
