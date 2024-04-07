<template><div><p>재현 가능한 테스트 케이스는 문제의 원인을 격리하는 데 도움이 되며, 이는 문제를 해결하기 위한 첫 번째 단계입니다! 이 페이지에서는 재현을 생성하는 데 필요한 설정 방법을 안내합니다.</p>
<h2 id="왜-재현을-만들어야-할까요" tabindex="-1"><a class="header-anchor" href="#왜-재현을-만들어야-할까요" aria-hidden="true">#</a> 왜 재현을 만들어야 할까요?</h2>
<p>재현 가능한 테스트 케이스는 버그를 일으키는 특정 조건 세트를 공유하는 훌륭한 방법입니다. 유지보수자와 커뮤니티 모두가 문제의 원인을 확인하고 도와주어 문제를 해결할 수 있도록 좁혀낼 수 있습니다.</p>
<h2 id="사전-준비조건" tabindex="-1"><a class="header-anchor" href="#사전-준비조건" aria-hidden="true">#</a> 사전 준비조건</h2>
<p>표를 Markdown 형식으로 변경하세요.</p>
<p>| 먼저 내 컴퓨터에 <code v-pre>Yarn</code>을 설치해주세요.   |
| <code v-pre>GitHub</code> 계정이 있어야 코드를 호스팅할 수 있습니다. |
| <code v-pre>Chromatic</code> 계정이 있어야 Storybook을 게시할 수 있습니다. |</p>
<h2 id="초기-설정" tabindex="-1"><a class="header-anchor" href="#초기-설정" aria-hidden="true">#</a> 초기 설정</h2>
<p>첫 번째로 터미널을 열고 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx storybook@next sandbox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음으로, 사용하고자 하는 템플릿을 선택하세요:</p>
<p><img src="@source/docs/Tech/2024-04-07-Createareproduction/img/Createareproduction_0.png" alt="이미지"></p>
<p>마지막으로, 재현할 위치를 입력하세요:</p>
<img src="@source/docs/Tech/2024-04-07-Createareproduction/img/Createareproduction_1.png" />
<p>모든 것이 제대로 작동했다면, 로컬 환경에서 완전히 기능하는 Storybook이 설정되어 있어야 합니다.</p>
<h2 id="타사-종속성-및-애드온" tabindex="-1"><a class="header-anchor" href="#타사-종속성-및-애드온" aria-hidden="true">#</a> 타사 종속성 및 애드온</h2>
<p>코드를 추가하기 전에 필요한 패키지를 설치하고 구성해주세요. 예를 들어 CSS 프레임워크(예: Tailwind)에 문제가 발생하면 해당 프레임워크를 설치하고 구성해주세요.</p>
<p>문제와 관련된 Storybook 애드온(@storybook/addon-a11y 등)을 설치하고 구성하세요.</p>
<h2 id="스토리-추가" tabindex="-1"><a class="header-anchor" href="#스토리-추가" aria-hidden="true">#</a> 스토리 추가</h2>
<p>문제를 빠르게 해결하기 위해 꼭 필요한 최소한의 스토리를 포함하는 것이 좋습니다.</p>
<h2 id="호스트" tabindex="-1"><a class="header-anchor" href="#호스트" aria-hidden="true">#</a> 호스트</h2>
<p>작업을 완료하면 재현물을 호스팅해야 합니다. GitHub.com에 로그인한 다음 새 저장소를 만드세요.</p>
<p><img src="@source/docs/Tech/2024-04-07-Createareproduction/img/Createareproduction_2.png" alt="Create a reproduction_2"></p>
<p>그런 다음 GitHub의 지침에 따라 저장소를 설정하세요.</p>
<p><img src="@source/docs/Tech/2024-04-07-Createareproduction/img/Createareproduction_3.png" alt="Create a reproduction_3"></p>
<h2 id="게시" tabindex="-1"><a class="header-anchor" href="#게시" aria-hidden="true">#</a> 게시</h2>
<p>당신의 재현물을 온라인으로 배포한 후 확인하는 것은 최고의 방법입니다. 우린 Storybook 유지자들이 만든 무료 배포 서비스인 Chromatic을 추천합니다. 이 서비스를 통해 안전하고 안정적으로 클라우드에 재현물을 배포하고 호스팅할 수 있습니다.</p>
<h3 id="chromatic-작업-시-유용한-자료" tabindex="-1"><a class="header-anchor" href="#chromatic-작업-시-유용한-자료" aria-hidden="true">#</a> Chromatic 작업 시 유용한 자료</h3>
<ul>
<li>Storybook 게시</li>
<li>Chromatic 설정</li>
<li>지속적 통합을 통해 Chromatic 자동화</li>
</ul>
<h2 id="이슈-제출하기" tabindex="-1"><a class="header-anchor" href="#이슈-제출하기" aria-hidden="true">#</a> 이슈 제출하기</h2>
<p>마지막으로, Storybook 이슈 트래커에 문제를 작성하고 필수 단계를 따라 문제에 대한 자세한 설명을 제공하세요. 문제 해결을 돕기 위해 GitHub 저장소와 배포된 재현을 추가해주세요.</p>
</div></template>
