<template><div><p>Storybook은 핵심적으로 Webpack과 Vite와 같은 빌더에 의해 구동됩니다. 이러한 빌더들은 개발 환경을 생성하고, 코드(Javascript, CSS 및 MDX)를 실행 가능한 번들로 컴파일하며, 브라우저를 실시간으로 업데이트합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Builders/img/Builders_0.png" alt="Builders_0"></p>
<h2 id="cli-기본" tabindex="-1"><a class="header-anchor" href="#cli-기본" aria-hidden="true">#</a> CLI 기본</h2>
<p>Storybook의 빌더를 설정하기 전에, CLI가 어떻게 구성되는지 알아봅시다. Storybook을 초기화할 때 (npx storybook@latest init을 통해), CLI는 애플리케이션에 기반하여 사용할 빌더를 자동으로 감지합니다. 예를 들어, Vite와 함께 작업 중이라면 Vite 빌더를 설치합니다. Webpack과 함께 작업 중이라면 Webpack 5 빌더가 기본적으로 설치됩니다.</p>
<p>또한 Storybook의 CLI에 플래그를 제공하고 사용할 빌더를 지정할 수도 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx storybook@latest init <span class="token operator">--</span>builder <span class="token operator">&lt;</span>webpack5 <span class="token operator">|</span> vite<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="수동-설정" tabindex="-1"><a class="header-anchor" href="#수동-설정" aria-hidden="true">#</a> 수동 설정</h2>
<p>기본적으로 Storybook은 Webpack 5 빌더를 사용합니다. 다른 빌더를 사용하려면 지정하지 않으면 됩니다. 애플리케이션에서 지원되는 빌더를 설정하는 방법에 대한 자세한 내용은 이 문서를 참조하세요.</p>
<ul>
<li>Vite 빌더를 사용하여 거의 즉시 HMR을 제공하는 Vite와 함께 스토리를 번들로 묶습니다.</li>
<li>Webpack를 사용하여 성능을 향상시킨 Webpack과 함께 스토리를 번들로 묶습니다.</li>
</ul>
</div></template>
