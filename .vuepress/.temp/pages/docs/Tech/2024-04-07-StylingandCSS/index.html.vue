<template><div><p>웹 애플리케이션에 CSS를 포함시키는 방법은 여러 가지가 있습니다. 따라서 Storybook에 CSS를 포함시키는 방법도 여러 가지가 있어요. 보통은 스타일링이 Storybook 구성에서 어떻게 작동하는지를 최대한 모사하는 것이 좋아요.</p>
<h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2>
<p>Storybook은 몇 가지 다른 방법으로 CSS 파일을 가져올 수 있어요. Storybook은 이러한 태그를 미리보기 iframe에 주입하는데, 여기서 컴포넌트가 렌더링되고, Storybook Manager UI가 아닌 곳이에요. CSS를 가져오는 가장 좋은 방법은 프로젝트의 구성 및 개인 취향에 따라 다를 거예요.</p>
<h3 id="번들된-css-가져오기-권장됨" tabindex="-1"><a class="header-anchor" href="#번들된-css-가져오기-권장됨" aria-hidden="true">#</a> 번들된 CSS 가져오기 (권장됨)</h3>
<p>모든 스토리북은 CSS 파일을 인식하기 위한 import가 미리 구성되어 있습니다. 모든 스토리에 전역 CSS를 추가하려면 .storybook/preview.ts에서 import하십시오. 이러한 파일은 HMR(Hot Module Replacement)의 영향을 받으므로 Storybook 서버를 다시 시작하지 않고 변경 사항을 볼 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 맞게(your-framework를 react, vue3 등으로 변경)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">'../src/styles/global.css'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약 컴포넌트 파일이 CSS 파일을 import하는 경우에도 작동합니다. 그러나 Sass 또는 Postcss와 같은 CSS 프로세서 도구를 사용하는 경우 추가 구성이 필요할 수 있습니다.</p>
<h3 id="정적-css-포함" tabindex="-1"><a class="header-anchor" href="#정적-css-포함" aria-hidden="true">#</a> 정적 CSS 포함</h3>
<p>만약 모든 이야기에 포함시키고 싶은 전역 CSS 파일이 있다면, .storybook/preview-head.html에서 가져올 수 있어요. 그러나 이러한 파일들은 HMR의 영향을 받지 않으므로, 변경 사항을 보려면 Storybook 서버를 다시 시작해야 해요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token constant">CDN</span>에서 폰트를 불러옵니다 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"preconnect"</span> href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"preconnect"</span> href<span class="token operator">=</span><span class="token string">"https://fonts.gstatic.com"</span> crossorigin <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link
  href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap"</span>
  rel<span class="token operator">=</span><span class="token string">"stylesheet"</span>
<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token constant">CSS</span> 파일을 불러옵니다 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"path/to/your/styles.css"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-모듈" tabindex="-1"><a class="header-anchor" href="#css-모듈" aria-hidden="true">#</a> CSS 모듈</h2>
<h3 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h3>
<p>Vite는 CSS 모듈을 기본으로 지원합니다. 만약 vite.config.js 파일에서 CSS 모듈 구성을 사용자 정의했다면, 이는 자동으로 Storybook에도 적용됩니다. Vite의 CSS 모듈 지원에 대해 더 알아보세요.</p>
<h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h3>
<p>Webpack을 사용하고 CSS 모듈을 사용하려면 추가 구성이 필요합니다. 이 도구를 구성하는 데 도움이 되도록 @storybook/addon-styling-webpack을 설치하는 것을 권장합니다.</p>
<h2 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> PostCSS</h2>
<h3 id="vite-1" tabindex="-1"><a class="header-anchor" href="#vite-1" aria-hidden="true">#</a> Vite</h3>
<p>Vite는 기본적으로 PostCSS 지원이 포함되어 있습니다. 만약 <code v-pre>vite.config.js</code>에서 PostCSS 구성을 사용자 정의했다면, 이 설정은 Storybook에도 자동으로 적용됩니다. Vite의 PostCSS 지원에 대해 더 알아보세요.</p>
<h3 id="webpack-1" tabindex="-1"><a class="header-anchor" href="#webpack-1" aria-hidden="true">#</a> Webpack</h3>
<p>Webpack을 사용하고 PostCSS를 사용하려면, 추가 구성이 필요합니다. 이러한 도구를 구성하는 데 도움을 줄 <code v-pre>@storybook/addon-styling-webpack</code>을 설치하는 것을 권장합니다.</p>
<h2 id="css-전처리기" tabindex="-1"><a class="header-anchor" href="#css-전처리기" aria-hidden="true">#</a> CSS 전처리기</h2>
<h3 id="vite-2" tabindex="-1"><a class="header-anchor" href="#vite-2" aria-hidden="true">#</a> Vite</h3>
<p>Vite은 기본적으로 Sass, Less 및 Stylus를 지원합니다. Vite의 CSS 전처리기 지원에 대해 더 알아보세요.</p>
<h3 id="webpack-2" tabindex="-1"><a class="header-anchor" href="#webpack-2" aria-hidden="true">#</a> Webpack</h3>
<p>만약에 웹팩을 사용하고 Sass나 Less를 사용하려면, 추가적인 설정이 필요합니다. 이러한 도구들을 구성하는 데 도움이 되는 @storybook/addon-styling-webpack을 설치하는 것을 권장드립니다. 또는 원한다면 Storybook의 웹팩 설정을 직접 사용하여 적절한 로더를 포함시킬 수도 있습니다.</p>
<h2 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS-in-JS</h2>
<p>CSS-in-JS 라이브러리는 기본적인 자바스크립트를 사용하여 디자인되었으며, 종종 추가적인 설정 없이 Storybook에서 작동합니다. 일부 라이브러리는 컴포넌트가 특정 렌더링 &quot;콘텍스트&quot;에서 렌더링되도록 (예를 들어, 테마를 제공하기 위해) 기대하며, 이는 @storybook/addon-themes의 withThemeFromJSXProvider 데코레이터를 사용하여 수행할 수 있습니다.</p>
<h2 id="웹폰트-추가하기" tabindex="-1"><a class="header-anchor" href="#웹폰트-추가하기" aria-hidden="true">#</a> 웹폰트 추가하기</h2>
<h3 id="storybook-preview-head-html" tabindex="-1"><a class="header-anchor" href="#storybook-preview-head-html" aria-hidden="true">#</a> .storybook/preview-head.html</h3>
<p>웹폰트를 사용해야하는 경우 <code v-pre>.storybook/preview-head.html</code> 파일에 코드를 추가해야 할 수 있습니다. 가능한 경우 Storybook과 함께 모든 에셋을 포함하는 것이 좋습니다. 이 경우 정적 파일 위치를 구성하려고 할 것입니다.</p>
<h3 id="storybook-preview-ts" tabindex="-1"><a class="header-anchor" href="#storybook-preview-ts" aria-hidden="true">#</a> .storybook/preview.ts</h3>
<p>폰트에 fontsource와 같은 것을 사용하고 있다면, <code v-pre>.storybook/preview.ts</code> 파일에서 필요한 CSS 파일을 가져올 수 있습니다.</p>
</div></template>
