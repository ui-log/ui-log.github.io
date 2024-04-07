<template><div><p>Storybook의 명령줄 인터페이스(CLI)는 Storybook을 구축하고 개발하는 데 사용하는 주요 도구입니다.</p>
<h2 id="api-명령어" tabindex="-1"><a class="header-anchor" href="#api-명령어" aria-hidden="true">#</a> API 명령어</h2>
<p>CLI에서 storybook --help를 실행하여 다음 문서를 확인할 수 있습니다.</p>
<h3 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h3>
<p>귀하의 프로젝트 루트에서 실행되어야 합니다. 브라우저에서 소스 코드 변경 사항을 실시간으로 반영하는 Storybook 개발 빌드를 컴파일하고 제공합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storybook dev <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>옵션은 다음을 포함합니다:</p>
<h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h3>
<p>Storybook 인스턴스를 컴파일해서 배포할 수 있도록 준비하세요. 프로젝트의 루트에서 실행해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storybook build <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>옵션은 다음과 같습니다:</p>
<h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h3>
<p>프로젝트에 지정된 버전(@latest, @8, @next 등)의 Storybook을 설치하고 초기화합니다. 설치 가이드에서 자세히 읽어보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storybook<span class="token punctuation">[</span>@version<span class="token punctuation">]</span> init <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>예를 들어, storybook@latest init을 입력하면 최신 버전의 Storybook이 프로젝트에 설치됩니다.</p>
<p>옵션은 다음과 같습니다:</p>
<h3 id="추가" tabindex="-1"><a class="header-anchor" href="#추가" aria-hidden="true">#</a> 추가</h3>
<p>Storybook 애드온을 설치하고 프로젝트를 구성합니다. 애드온 설치 가이드에서 자세히 알아볼 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storybook@latest add <span class="token punctuation">[</span>addon<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>옵션은 아래와 같아요:</p>
<h3 id="삭제" tabindex="-1"><a class="header-anchor" href="#삭제" aria-hidden="true">#</a> 삭제</h3>
<p>프로젝트에서 Storybook 애드온을 삭제합니다. 애드온 설치 가이드에서 자세히 알아보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storybook@latest remove <span class="token punctuation">[</span>addon<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>옵션은 다음과 같습니다:</p>
<h3 id="업그레이드" tabindex="-1"><a class="header-anchor" href="#업그레이드" aria-hidden="true">#</a> 업그레이드</h3>
<p>지정된 버전(@latest, @8, @next 등)으로 당신의 Storybook 인스턴스를 업그레이드합니다. 업그레이드 가이드에서 더 읽어보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storybook<span class="token punctuation">[</span>@version<span class="token punctuation">]</span> upgrade <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>예를 들어, storybook@latest upgrade --dry-run을 실행하면 프로젝트를 가장 최신 버전의 Storybook으로 업그레이드하는 변경 사항을 실제로 적용하지 않고 시뮬레이션할 것입니다.</p>
<p>옵션은 다음과 같습니다:</p>
<h3 id="마이그레이션" tabindex="-1"><a class="header-anchor" href="#마이그레이션" aria-hidden="true">#</a> 마이그레이션</h3>
<p>지정된 버전과 호환되도록 Storybook 프로젝트를 확실하게 하는 codemod를 실행합니다. 마이그레이션 가이드에서 자세히 알아보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storybook<span class="token punctuation">[</span>@version<span class="token punctuation">]</span> migrate <span class="token punctuation">[</span>codemod<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>예를 들어, storybook@latest migrate csf-2-to-3 --dry-run은 프로젝트를 확인하여 변화를 주지 않고도 코드 모드를 적용할 수 있는지를 확인하고, 영향을 받을 파일들을 보고해줍니다.</p>
<p>옵션은 다음과 같습니다:</p>
<h3 id="automigrate" tabindex="-1"><a class="header-anchor" href="#automigrate" aria-hidden="true">#</a> automigrate</h3>
<p>지정된 버전으로 Storybook 프로젝트를 자동으로 마이그레이션할 수 있는지 확인하기 위해 표준 구성 검사를 수행합니다. 마이그레이션 가이드에서 자세히 알아보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storybook<span class="token punctuation">[</span>@version<span class="token punctuation">]</span> automigrate <span class="token punctuation">[</span>fixId<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>예를 들어, storybook@latest automigrate --dry-run은 프로젝트를 스캔하여 변경 사항을 가하지 않고 자동으로 적용할 수 있는 잠재적인 마이그레이션을 찾습니다.</p>
<p>옵션에는 다음이 포함됩니다:</p>
<h3 id="doctor" tabindex="-1"><a class="header-anchor" href="#doctor" aria-hidden="true">#</a> doctor</h3>
<p>당신의 스토리북 프로젝트에서 일반적인 문제를 확인하고 해결 방법에 대한 제안을 제공합니다 (예: 중복 의존성, 호환되지 않는 애드온 또는 버전 불일치 등). 스토리북 버전을 업그레이드할 때 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storybook doctor <span class="token punctuation">[</span>옵션<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>옵션은 다음과 같습니다:</p>
<h3 id="정보" tabindex="-1"><a class="header-anchor" href="#정보" aria-hidden="true">#</a> 정보</h3>
<p>Reports useful debugging 정보를 제공하는 스토리북 info 명령어에 대한 예시 출력입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Storybook Environment Info<span class="token operator">:</span>

  <span class="token literal-property property">System</span><span class="token operator">:</span>
    <span class="token constant">OS</span><span class="token operator">:</span> macOS <span class="token number">14.2</span>
    <span class="token constant">CPU</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> arm64 Apple <span class="token constant">M3</span>
    <span class="token literal-property property">Shell</span><span class="token operator">:</span> <span class="token number">5.9</span> <span class="token operator">-</span> <span class="token operator">/</span>bin<span class="token operator">/</span>zsh
  <span class="token literal-property property">Binaries</span><span class="token operator">:</span>
    <span class="token literal-property property">Node</span><span class="token operator">:</span> <span class="token number">18.19</span><span class="token number">.0</span> <span class="token operator">-</span> <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>nvm<span class="token operator">/</span>versions<span class="token operator">/</span>node<span class="token operator">/</span>v18<span class="token punctuation">.</span><span class="token number">19.0</span><span class="token operator">/</span>bin<span class="token operator">/</span>node
    <span class="token literal-property property">npm</span><span class="token operator">:</span> <span class="token number">10.2</span><span class="token number">.3</span> <span class="token operator">-</span> <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>nvm<span class="token operator">/</span>versions<span class="token operator">/</span>node<span class="token operator">/</span>v18<span class="token punctuation">.</span><span class="token number">19.0</span><span class="token operator">/</span>bin<span class="token operator">/</span>npm <span class="token operator">&lt;</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> active
  <span class="token literal-property property">Browsers</span><span class="token operator">:</span>
    <span class="token literal-property property">Chrome</span><span class="token operator">:</span> <span class="token number">120.0</span><span class="token number">.6099</span><span class="token number">.199</span>
  <span class="token literal-property property">npmPackages</span><span class="token operator">:</span>
    @storybook<span class="token operator">/</span>addon<span class="token operator">-</span>essentials<span class="token operator">:</span> <span class="token operator">^</span><span class="token number">7.6</span><span class="token number">.6</span> <span class="token operator">=></span> <span class="token number">7.6</span><span class="token number">.6</span>
    @storybook<span class="token operator">/</span>addon<span class="token operator">-</span>interactions<span class="token operator">:</span> <span class="token operator">^</span><span class="token number">7.6</span><span class="token number">.6</span> <span class="token operator">=></span> <span class="token number">7.6</span><span class="token number">.6</span>
    @storybook<span class="token operator">/</span>addon<span class="token operator">-</span>links<span class="token operator">:</span> <span class="token operator">^</span><span class="token number">7.6</span><span class="token number">.6</span> <span class="token operator">=></span> <span class="token number">7.6</span><span class="token number">.6</span>
    @storybook<span class="token operator">/</span>addon<span class="token operator">-</span>onboarding<span class="token operator">:</span> <span class="token operator">^</span><span class="token number">1.0</span><span class="token number">.10</span> <span class="token operator">=></span> <span class="token number">1.0</span><span class="token number">.10</span>
    @storybook<span class="token operator">/</span>blocks<span class="token operator">:</span> <span class="token operator">^</span><span class="token number">7.6</span><span class="token number">.6</span> <span class="token operator">=></span> <span class="token number">7.6</span><span class="token number">.6</span>
    @storybook<span class="token operator">/</span>preset<span class="token operator">-</span>create<span class="token operator">-</span>react<span class="token operator">-</span>app<span class="token operator">:</span> <span class="token operator">^</span><span class="token number">7.6</span><span class="token number">.6</span> <span class="token operator">=></span> <span class="token number">7.6</span><span class="token number">.6</span>
    @storybook<span class="token operator">/</span>react<span class="token operator">:</span> <span class="token operator">^</span><span class="token number">7.6</span><span class="token number">.6</span> <span class="token operator">=></span> <span class="token number">7.6</span><span class="token number">.6</span>
    @storybook<span class="token operator">/</span>react<span class="token operator">-</span>webpack5<span class="token operator">:</span> <span class="token operator">^</span><span class="token number">7.6</span><span class="token number">.6</span> <span class="token operator">=></span> <span class="token number">7.6</span><span class="token number">.6</span>
    @storybook<span class="token operator">/</span>test<span class="token operator">:</span> <span class="token operator">^</span><span class="token number">7.6</span><span class="token number">.6</span> <span class="token operator">=></span> <span class="token number">7.6</span><span class="token number">.6</span>
    <span class="token literal-property property">storybook</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">7.6</span><span class="token number">.6</span> <span class="token operator">=></span> <span class="token number">7.6</span><span class="token number">.6</span>
  <span class="token literal-property property">npmGlobalPackages</span><span class="token operator">:</span>
    <span class="token literal-property property">chromatic</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">10.2</span><span class="token number">.0</span> <span class="token operator">=></span> <span class="token number">10.2</span><span class="token number">.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="샌드박스" tabindex="-1"><a class="header-anchor" href="#샌드박스" aria-hidden="true">#</a> 샌드박스</h3>
<p>지정된 버전(예: @latest, @8, @next)을 사용하여 테스트용 Storybook 기능을 기반으로 지원되는 프레임워크 목록에 따라 로컬 샌드박스 프로젝트를 생성합니다. 이 기능은 이슈를 오픈하거나 토론을 할 때 버그를 재현하는 데 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storybook<span class="token punctuation">[</span>@version<span class="token punctuation">]</span> sandbox <span class="token punctuation">[</span>framework<span class="token operator">-</span>filter<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>예를 들어, storybook@next sandbox는 Storybook의 최신 사전 릴리스 버전을 사용하여 샌드박스를 생성합니다.</p>
<p>프레임워크 필터 인자는 선택 사항이며 사용 가능한 프레임워크 목록을 필터링할 수 있습니다. 예를 들어, storybook@next sandbox react는 React 기반 샌드박스를 생성할 수 있는 옵션만 제공합니다.</p>
<p>옵션을 포함하여:</p>
</div></template>
