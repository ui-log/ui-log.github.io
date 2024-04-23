<template><div><img src="@source/docs/Nextjs/2024-04-05-BuildingaModernReactComponentLibraryAGuidewithViteTypeScriptandTailwindCSS/img/BuildingaModernReactComponentLibraryAGuidewithViteTypeScriptandTailwindCSS_0.png" />
<p>안녕하세요! 이 기사에서는 Vite, TypeScript 및 Tailwind CSS를 사용하여 React 컴포넌트 라이브러리를 만드는 방법을 알려 드리겠습니다. 예제에서는 pnpm을 사용했지만, 선호하는 대로 npm 또는 yarn을 선택하실 수 있습니다.</p>
<p>먼저 Vite를 사용하여 React 프로젝트를 생성해 보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm create vite react<span class="token operator">-</span>component<span class="token operator">-</span>library <span class="token operator">--</span>template react<span class="token operator">-</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>프로젝트를 생성한 후에 아래와 같이 불필요한 파일을 삭제할 거에요. 프로젝트를 실행할 필요가 없어서 그런 거에요.</p>
<ul>
<li>App.tsx</li>
<li>App.css</li>
<li>main.tsx</li>
<li>index.html</li>
<li>vite-env-d.ts (만약 .env 파일이 있으면 남겨두셔야 해요.)</li>
</ul>
<p>제 'src' 디렉터리를 'lib'로 이름을 바꾸고 'lib' 디렉터리에 'index.ts' 파일이 있는지 확인해보고 특정 컴포넌트를 내보내는 용도로 사용할 거에요. 'lib' 디렉터리에 생성해볼까요?```</p>
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
<p>파일을 만들고 정리했으면, 스타일링을 위해 Tailwind CSS를 설치해봅시다. 아래 지시사항을 따라주세요;</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm install <span class="token operator">-</span><span class="token constant">D</span> tailwindcss postcss autoprefixer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx tailwindcss init <span class="token operator">-</span>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그런 다음, tailwind.config.js 파일을 아래 코드와 같이 변경해주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'tailwindcss'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"./lib/**/*.{js,ts,jsx,tsx}"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 'index.css' 파일에 Tailwind 지시문을 추가하는 것을 잊지 마세요. 그런 다음 'index.css' 파일을 'index.ts' 파일에 import하는 것을 확인해주세요.</p>
<p>예를 들어, 'lib/components/Button.tsx'에 'Button' 컴포넌트를 생성합시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"bg-red-300 text-red-900"</span><span class="token operator">></span>버튼<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Button<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그럼 'index.ts' 파일에서 Button.tsx 파일을 가져와 내보내기하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"./index.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyButtonComponent <span class="token keyword">from</span> <span class="token string">"./components/Button"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> MyButtonComponent <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 다음 코드를 사용하여 'package.json' 파일을 구성해봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"react-component-library"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"private"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"0.0.0"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"main"</span><span class="token operator">:</span> <span class="token string">"./dist/index.umd.js"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"./dist/index.es.js"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"types"</span><span class="token operator">:</span> <span class="token string">"./dist/index.d.ts"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"dist"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"exports"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"."</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"import"</span><span class="token operator">:</span> <span class="token string">"./dist/index.es.js"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"require"</span><span class="token operator">:</span> <span class="token string">"./dist/index.umd.js"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"types"</span><span class="token operator">:</span> <span class="token string">"./dist/index.d.ts"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"./dist/style.css"</span><span class="token operator">:</span> <span class="token string">"./dist/style.css"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"tsc &amp;&amp; vite build"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"react"</span><span class="token operator">:</span> <span class="token string">"^18.2.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"react-dom"</span><span class="token operator">:</span> <span class="token string">"^18.2.0"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"@types/react"</span><span class="token operator">:</span> <span class="token string">"^18.2.43"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@types/react-dom"</span><span class="token operator">:</span> <span class="token string">"^18.2.17"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@typescript-eslint/eslint-plugin"</span><span class="token operator">:</span> <span class="token string">"^6.14.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@typescript-eslint/parser"</span><span class="token operator">:</span> <span class="token string">"^6.14.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@vitejs/plugin-react-swc"</span><span class="token operator">:</span> <span class="token string">"^3.5.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"autoprefixer"</span><span class="token operator">:</span> <span class="token string">"^10.4.16"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"eslint"</span><span class="token operator">:</span> <span class="token string">"^8.55.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"eslint-plugin-react-hooks"</span><span class="token operator">:</span> <span class="token string">"^4.6.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"eslint-plugin-react-refresh"</span><span class="token operator">:</span> <span class="token string">"^0.4.5"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"postcss"</span><span class="token operator">:</span> <span class="token string">"^8.4.33"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"tailwindcss"</span><span class="token operator">:</span> <span class="token string">"^3.4.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"typescript"</span><span class="token operator">:</span> <span class="token string">"^5.2.2"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"vite"</span><span class="token operator">:</span> <span class="token string">"^5.0.8"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그럼 다음 코드를 사용하여 'package.json' 파일을 구성해 보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"ES2020"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"useDefineForClassFields"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"ES2020"</span><span class="token punctuation">,</span> <span class="token string">"DOM"</span><span class="token punctuation">,</span> <span class="token string">"DOM.Iterable"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"ESNext"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skipLibCheck"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">/* 번들러 모드 */</span>
    <span class="token string-property property">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"bundler"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"allowImportingTsExtensions"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"resolveJsonModule"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"isolatedModules"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"noEmit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"declaration"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"jsx"</span><span class="token operator">:</span> <span class="token string">"react-jsx"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"typeRoots"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./dist/index.d.ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* 린팅 */</span>
    <span class="token string-property property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"noUnusedLocals"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"noUnusedParameters"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"noFallthroughCasesInSwitch"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"lib"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"references"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">"./tsconfig.node.json"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로 'vite.config.js' 파일을 설정해 봅시다. TypeScript를 사용 중이라면 'vite-plugin-dts'와 '@types/node'를 설치해야 합니다.</p>
<p>터미널에서 다음 코드를 실행하면 됩니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm install <span class="token operator">-</span><span class="token constant">D</span> @types<span class="token operator">/</span>node vite<span class="token operator">-</span>plugin<span class="token operator">-</span>dts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 아래와 같이 ‘vite.config.js’를 설정하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">"@vitejs/plugin-react-swc"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dts <span class="token keyword">from</span> <span class="token string">"vite-plugin-dts"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> tailwindcss <span class="token keyword">from</span> <span class="token string">"tailwindcss"</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lib</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./lib/index.ts"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"react-beautiful-timeline"</span><span class="token punctuation">,</span>
      <span class="token function-variable function">fileName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">format</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">index.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>format<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"react"</span><span class="token punctuation">,</span> <span class="token string">"react-dom"</span><span class="token punctuation">,</span> <span class="token string">"tailwindcss"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token string">"React"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"react-dom"</span><span class="token operator">:</span> <span class="token string">"ReactDOM"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token string">"tailwindcss"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emptyOutDir</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">dts</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">rollupTypes</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>tailwindcss<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>컴포넌트 라이브러리를 테스트하려면 먼저 npm run build를 실행하고, 라이브러리의 터미널에서 npm link를 실행하세요.</p>
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
<p>그럼, 다른 리액트 프로젝트를 생성하여 컴포넌트를 테스트하고 터미널에서 <code v-pre>npm link your-package-name</code>을 실행하세요. 이제 아래와 같이 컴포넌트와 스타일을 불러와 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'react-component-library/dist/style.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MyButtonComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-component-library"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>npm에 발행하려면 다음 명령어를 사용하세요:</p>
<p>로그인되어 있지 않다면, 먼저 npm에 로그인해야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이것으로 끝났어요! npm에서 React 구성 요소 패키지를 설치하세요. 자세한 내용은 아래 링크된 저장소를 참조해주세요.</p>
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
<p>GitHub 저장소: https://github.com/mevlutcantuna/react-beautiful-timeline</p>
<p>연락처:</p>
<p>Linkedin Github Twitter</p>
</div></template>
