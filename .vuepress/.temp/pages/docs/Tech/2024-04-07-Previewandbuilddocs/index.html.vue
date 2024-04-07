<template><div><p>Storybook은 개발 과정에 관여하는 모든 이해관계자들이 도움을 받을 수 있는 풍부하고 포괄적인 문서를 생성할 수 있게 해줍니다. 기본적으로 필요한 도구를 갖추어 문서를 작성할 뿐만 아니라 미리 보기하고 구축할 수도 있습니다.</p>
<h2 id="storybook-문서-미리-보기" tabindex="-1"><a class="header-anchor" href="#storybook-문서-미리-보기" aria-hidden="true">#</a> Storybook 문서 미리 보기</h2>
<p>개발 중에 작성한 문서를 언제든지 미리 볼 수 있습니다. --docs 플래그를 사용하여 최종 문서의 미리 보기를 생성할 수 있습니다. 이를 새로운 스크립트로 package.json에 포함하는 것을 권장합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"storybook-docs"</span><span class="token operator">:</span> <span class="token string">"storybook dev --docs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>당신의 설정에 따라, storybook-docs 스크립트를 실행하는 경우에는 Storybook이 문서 모드로 전환되어 다른 빌드가 생성됩니다.</p>
<p>MDX 또는 CSF 형식의 이야기를 찾아 문서에 추가한 내용에 따라 그 내용이 표시됩니다...</p>
<p><img src="@source/docs/Tech/2024-04-07-Previewandbuilddocs/img/Previewandbuilddocs_0.png" alt="이미지"></p>
<p>평범한 Storybook 빌드와는 다르게 이 빌드 모드에는 몇 가지 주의해야 할 사항이 있습니다:</p>
<ul>
<li>최상위 항목은 컴포넌트에 대한 주요 이야기를 가리킵니다.</li>
<li>각 개별 이야기는 이제 펼쳐진 표시 모드로 제공되며, 다른 세트의 아이콘이 있습니다. 이를 통해 문서 자체에 집중할 수 있습니다.</li>
<li>Storybook의 레이아웃이 다르게 렌더링됩니다. 툴바는 표시되지 않습니다.</li>
</ul>
<h2 id="storybook의-문서-공개하기" tabindex="-1"><a class="header-anchor" href="#storybook의-문서-공개하기" aria-hidden="true">#</a> Storybook의 문서 공개하기</h2>
<p>Storybook을 공개하는 방식과 마찬가지로 문서를 공개할 수도 있습니다. build-storybook 명령어에 --docs 플래그를 사용할 수 있습니다. 또한 package.json 파일에 스크립트로 포함하는 것을 권장합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"build-storybook-docs"</span><span class="token operator">:</span> <span class="token string">"storybook build --docs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>당신이 가진 설정에 따르면, build-storybook-docs 스크립트가 실행되면 Storybook은 다시 한 번 문서 모드로 전환되어 다른 빌드를 생성하고 문서를 storybook-static 폴더에 출력할 것입니다.</p>
<p>위에서 언급한 주의 사항이 여전히 적용됩니다.</p>
<p>문서를 배포하기 위해 다음과 같은 호스팅 제공자를 사용할 수 있습니다:</p>
<ul>
<li>Vercel</li>
<li>Netlify</li>
<li>S3</li>
</ul>
<p>스토리북 문서에 대해 더 자세히 알아보세요</p>
<ul>
<li>스토리를 위한 문서 작성을 위한 Autodocs</li>
<li>문서를 사용자 정의하기 위한 MDX</li>
<li>문서 작성을 위한 Doc Blocks</li>
<li>문서 게시를 자동화하는 문서 게시</li>
</ul>
</div></template>
