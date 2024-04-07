<template><div><p>프레임워크는 주요 환경 설정과 함께 작동하도록 Storybook을 자동으로 구성하는 패키지입니다. 이러한 프레임워크는 설정 프로세스를 간소화하고, 보일러플레이트를 줄여줍니다. 또한 당신의 프레임워크 관례를 복사하여 애플리케이션을 생성합니다.</p>
<h2 id="storybook에서-프레임워크는-어떻게-작동하나요" tabindex="-1"><a class="header-anchor" href="#storybook에서-프레임워크는-어떻게-작동하나요" aria-hidden="true">#</a> Storybook에서 프레임워크는 어떻게 작동하나요?</h2>
<p>기존 프로젝트에 Storybook을 설치하여 시작합니다. 그런 다음 사용 중인 프레임워크를 감지하고 이에 맞게 Storybook을 자동으로 구성하려고 노력합니다. 이는 필요한 라이브러리를 종속성으로 추가하고 설정을 조정하는 것을 의미합니다. 마지막으로 Storybook을 시작하면 애플리케이션 환경과 일치하도록 프레임워크 구성을 자동으로 로드한 다음, 기존 애드온을로드합니다.</p>
<h2 id="지원되는-프레임워크는-무엇인가요" tabindex="-1"><a class="header-anchor" href="#지원되는-프레임워크는-무엇인가요" aria-hidden="true">#</a> 지원되는 프레임워크는 무엇인가요?</h2>
<p>Storybook은 주요 업계 빌더 및 프레임워크를 지원합니다. 그러나 이는 Storybook을 다른 프레임워크와 함께 사용할 수 없다는 것을 의미하지는 않습니다. 아래는 빌더별로 분류된 현재 지원되는 프레임워크 목록입니다.</p>
<h3 id="기능-지원은-어떤가요" tabindex="-1"><a class="header-anchor" href="#기능-지원은-어떤가요" aria-hidden="true">#</a> 기능 지원은 어떤가요?</h3>
<p>업계에서 가장 인기 있는 프레임워크를 지원하는 것 외에도, Storybook은 각 프레임워크에 대해 동일한 수준의 기능 지원을 유지하려고 노력하며, 애드온 생태계를 포함합니다. 더 자세한 정보는 커뮤니티의 도움을 받아 현재 유지되어지는 어떤 기능과 애드온이 있는지를 나열한 '프레임워크 지원'을 참조하세요.</p>
<h2 id="구성" tabindex="-1"><a class="header-anchor" href="#구성" aria-hidden="true">#</a> 구성</h2>
<p>모든 현대 웹 애플리케이션에는 고유한 요구 사항이 있으며 다양한 도구와 프레임워크를 활용합니다. 기본적으로 Storybook을 사용하면 대부분의 프레임워크와 함께 작동하도록 생성된 설정이 제공됩니다. 그러나 기존 구성 파일(즉, ./storybook/main.js|ts|cjs)을 확장하고 추가 옵션을 제공할 수 있습니다. 아래는 프레임워크에 Storybook을 구성하는 옵션과 예제가 포함된 간략화된 표입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 react-vite를 대체하세요 (예: react-webpack5)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react-vite'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'@storybook/react-vite'</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      legacyRootApi<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="문제-해결" tabindex="-1"><a class="header-anchor" href="#문제-해결" aria-hidden="true">#</a> 문제 해결</h2>
<h3 id="nextjs-13은-storybook과-호환되지-않습니다" tabindex="-1"><a class="header-anchor" href="#nextjs-13은-storybook과-호환되지-않습니다" aria-hidden="true">#</a> NextJS 13은 Storybook과 호환되지 않습니다.</h3>
<p>Next.js 버전 13이 출시되면서 TurboPack, Server Components 등의 파괴적인 변경 사항이 소개되었지만, 아직 Storybook에서 완전히 지원되지 않습니다. Storybook 팀은 이러한 기능을 지원하도록 노력 중입니다. 그동안 이러한 기능에 의존하지 않는 한 Next.js 13 프로젝트와 함께 여전히 Storybook을 사용할 수 있습니다.</p>
<h3 id="내-프레임워크가-storybook과-호환되지-않는-경우" tabindex="-1"><a class="header-anchor" href="#내-프레임워크가-storybook과-호환되지-않는-경우" aria-hidden="true">#</a> 내 프레임워크가 Storybook과 호환되지 않는 경우</h3>
<p>대부분의 프레임워크는 기본적으로 Storybook과 원활하게 작동합니다. 그러나 일부 프레임워크 (예: CRACO)는 추가 단계를 통해 처리되지 않은 Storybook이 다루기에 적합치 않은 자체 구성을 제공합니다. 자세한 내용은 애드온 가이드를 참조하십시오.</p>
<h3 id="어떻게-storybook-프레임워크를-구축할-수-있을까요" tabindex="-1"><a class="header-anchor" href="#어떻게-storybook-프레임워크를-구축할-수-있을까요" aria-hidden="true">#</a> 어떻게 Storybook 프레임워크를 구축할 수 있을까요?</h3>
<p>Storybook은 프레임워크에 구애받지 않는 도구입니다. 어떤 프레임워크와도 함께 사용할 수 있습니다. 그러나 더 쉽게 시작할 수 있도록 여러분이 사용할 수 있는 프레임워크를 빌드하는 방법을 안내해드립니다. 더 자세한 내용을 알고 싶다면, 우리의 프레임워크 가이드를 읽어보세요.</p>
<h3 id="레거시-프레임워크-지원" tabindex="-1"><a class="header-anchor" href="#레거시-프레임워크-지원" aria-hidden="true">#</a> 레거시 프레임워크 지원</h3>
<p>예전에는 Aurelia, Marionette, Mithril, Rax, Riot을 포함한 여러 프레임워크를 지원했지만 이제는 이러한 지원을 중단하고 있습니다. 그럼에도 불구하고, 이러한 프레임워크를 지원하는 데 도움이 필요합니다. 이 프레임워크 중 하나와 작업 중이고 계속 지원하고 싶다면, 전용 Storybook End-of-Life 저장소를 방문해주세요. 일몰 과정에 대해 더 알고 기여하는 방법을 보려면 우리의 문서를 읽어주세요.</p>
<h3 id="storybook-구성-방법에-대해-알아보기" tabindex="-1"><a class="header-anchor" href="#storybook-구성-방법에-대해-알아보기" aria-hidden="true">#</a> Storybook 구성 방법에 대해 알아보기</h3>
<ul>
<li>테이블 태그를 마크다운 형식으로 변경합니다.</li>
</ul>
</div></template>
