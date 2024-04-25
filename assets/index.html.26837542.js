import{_ as i}from"./app.3052dcfb.js";import{l as s,m as l,E as n,G as a,p as t,Y as p,K as e,C as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var r="/assets/BuildingaModernReactComponentLibraryAGuidewithViteTypeScriptandTailwindCSS_0.dd9b4ef2.png";const c={},u=e('<img src="'+r+`"><p>\uC548\uB155\uD558\uC138\uC694! \uC774 \uAE30\uC0AC\uC5D0\uC11C\uB294 Vite, TypeScript \uBC0F Tailwind CSS\uB97C \uC0AC\uC6A9\uD558\uC5EC React \uCEF4\uD3EC\uB10C\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uB9CC\uB4DC\uB294 \uBC29\uBC95\uC744 \uC54C\uB824 \uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \uC608\uC81C\uC5D0\uC11C\uB294 pnpm\uC744 \uC0AC\uC6A9\uD588\uC9C0\uB9CC, \uC120\uD638\uD558\uB294 \uB300\uB85C npm \uB610\uB294 yarn\uC744 \uC120\uD0DD\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uBA3C\uC800 Vite\uB97C \uC0AC\uC6A9\uD558\uC5EC React \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>pnpm create vite react<span class="token operator">-</span>component<span class="token operator">-</span>library <span class="token operator">--</span>template react<span class="token operator">-</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=e('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>pnpm install\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD55C \uD6C4\uC5D0 \uC544\uB798\uC640 \uAC19\uC774 \uBD88\uD544\uC694\uD55C \uD30C\uC77C\uC744 \uC0AD\uC81C\uD560 \uAC70\uC5D0\uC694. \uD504\uB85C\uC81D\uD2B8\uB97C \uC2E4\uD589\uD560 \uD544\uC694\uAC00 \uC5C6\uC5B4\uC11C \uADF8\uB7F0 \uAC70\uC5D0\uC694.</p><ul><li>App.tsx</li><li>App.css</li><li>main.tsx</li><li>index.html</li><li>vite-env-d.ts (\uB9CC\uC57D .env \uD30C\uC77C\uC774 \uC788\uC73C\uBA74 \uB0A8\uACA8\uB450\uC154\uC57C \uD574\uC694.)</li></ul><p>\uC81C &#39;src&#39; \uB514\uB809\uD130\uB9AC\uB97C &#39;lib&#39;\uB85C \uC774\uB984\uC744 \uBC14\uAFB8\uACE0 &#39;lib&#39; \uB514\uB809\uD130\uB9AC\uC5D0 &#39;index.ts&#39; \uD30C\uC77C\uC774 \uC788\uB294\uC9C0 \uD655\uC778\uD574\uBCF4\uACE0 \uD2B9\uC815 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB0B4\uBCF4\uB0B4\uB294 \uC6A9\uB3C4\uB85C \uC0AC\uC6A9\uD560 \uAC70\uC5D0\uC694. &#39;lib&#39; \uB514\uB809\uD130\uB9AC\uC5D0 \uC0DD\uC131\uD574\uBCFC\uAE4C\uC694?```</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),k=e(`<p>\uD30C\uC77C\uC744 \uB9CC\uB4E4\uACE0 \uC815\uB9AC\uD588\uC73C\uBA74, \uC2A4\uD0C0\uC77C\uB9C1\uC744 \uC704\uD574 Tailwind CSS\uB97C \uC124\uCE58\uD574\uBD05\uC2DC\uB2E4. \uC544\uB798 \uC9C0\uC2DC\uC0AC\uD56D\uC744 \uB530\uB77C\uC8FC\uC138\uC694;</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>pnpm install <span class="token operator">-</span><span class="token constant">D</span> tailwindcss postcss autoprefixer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx tailwindcss init <span class="token operator">-</span>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uADF8\uB7F0 \uB2E4\uC74C, tailwind.config.js \uD30C\uC77C\uC744 \uC544\uB798 \uCF54\uB4DC\uC640 \uAC19\uC774 \uBCC0\uACBD\uD574\uC8FC\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;tailwindcss&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./lib/**/*.{js,ts,jsx,tsx}&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uB9AC\uACE0 &#39;index.css&#39; \uD30C\uC77C\uC5D0 Tailwind \uC9C0\uC2DC\uBB38\uC744 \uCD94\uAC00\uD558\uB294 \uAC83\uC744 \uC78A\uC9C0 \uB9C8\uC138\uC694. \uADF8\uB7F0 \uB2E4\uC74C &#39;index.css&#39; \uD30C\uC77C\uC744 &#39;index.ts&#39; \uD30C\uC77C\uC5D0 import\uD558\uB294 \uAC83\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.</p><p>\uC608\uB97C \uB4E4\uC5B4, &#39;lib/components/Button.tsx&#39;\uC5D0 &#39;Button&#39; \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0DD\uC131\uD569\uC2DC\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">&quot;bg-red-300 text-red-900&quot;</span><span class="token operator">&gt;</span>\uBC84\uD2BC<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Button<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=e(`<p>\uADF8\uB7FC &#39;index.ts&#39; \uD30C\uC77C\uC5D0\uC11C Button.tsx \uD30C\uC77C\uC744 \uAC00\uC838\uC640 \uB0B4\uBCF4\uB0B4\uAE30\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;./index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyButtonComponent <span class="token keyword">from</span> <span class="token string">&quot;./components/Button&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> MyButtonComponent <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uC81C \uB2E4\uC74C \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC &#39;package.json&#39; \uD30C\uC77C\uC744 \uAD6C\uC131\uD574\uBD05\uC2DC\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-component-library&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.umd.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.es.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.d.ts&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;dist&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;exports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;.&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;import&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.es.js&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.umd.js&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.d.ts&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;./dist/style.css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/style.css&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc &amp;&amp; vite build&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^18.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;react-dom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^18.2.0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@types/react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^18.2.43&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@types/react-dom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^18.2.17&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@typescript-eslint/eslint-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.14.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@typescript-eslint/parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.14.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@vitejs/plugin-react-swc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.5.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;autoprefixer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^10.4.16&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.55.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;eslint-plugin-react-hooks&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.6.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;eslint-plugin-react-refresh&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.4.5&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;postcss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.4.33&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;tailwindcss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.4.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.2.2&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0.8&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=e(`<p>\uADF8\uB7FC \uB2E4\uC74C \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC &#39;package.json&#39; \uD30C\uC77C\uC744 \uAD6C\uC131\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2020&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;useDefineForClassFields&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ES2020&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DOM&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DOM.Iterable&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">/* \uBC88\uB4E4\uB7EC \uBAA8\uB4DC */</span>
    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bundler&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;allowImportingTsExtensions&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./dist/index.d.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* \uB9B0\uD305 */</span>
    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;lib&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;references&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./tsconfig.node.json&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB9C8\uC9C0\uB9C9\uC73C\uB85C &#39;vite.config.js&#39; \uD30C\uC77C\uC744 \uC124\uC815\uD574 \uBD05\uC2DC\uB2E4. TypeScript\uB97C \uC0AC\uC6A9 \uC911\uC774\uB77C\uBA74 &#39;vite-plugin-dts&#39;\uC640 &#39;@types/node&#39;\uB97C \uC124\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>\uD130\uBBF8\uB110\uC5D0\uC11C \uB2E4\uC74C \uCF54\uB4DC\uB97C \uC2E4\uD589\uD558\uBA74 \uB429\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>pnpm install <span class="token operator">-</span><span class="token constant">D</span> @types<span class="token operator">/</span>node vite<span class="token operator">-</span>plugin<span class="token operator">-</span>dts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774\uC81C \uC544\uB798\uC640 \uAC19\uC774 \u2018vite.config.js\u2019\uB97C \uC124\uC815\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-react-swc&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dts <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-dts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> tailwindcss <span class="token keyword">from</span> <span class="token string">&quot;tailwindcss&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lib</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./lib/index.ts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;react-beautiful-timeline&quot;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">fileName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">format</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">index.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>format<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tailwindcss&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token string">&quot;React&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;react-dom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ReactDOM&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token string">&quot;tailwindcss&quot;</span><span class="token punctuation">,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uCEF4\uD3EC\uB10C\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uD14C\uC2A4\uD2B8\uD558\uB824\uBA74 \uBA3C\uC800 npm run build\uB97C \uC2E4\uD589\uD558\uACE0, \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC758 \uD130\uBBF8\uB110\uC5D0\uC11C npm link\uB97C \uC2E4\uD589\uD558\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=e(`<p>\uADF8\uB7FC, \uB2E4\uB978 \uB9AC\uC561\uD2B8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uC5EC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD14C\uC2A4\uD2B8\uD558\uACE0 \uD130\uBBF8\uB110\uC5D0\uC11C <code>npm link your-package-name</code>\uC744 \uC2E4\uD589\uD558\uC138\uC694. \uC774\uC81C \uC544\uB798\uC640 \uAC19\uC774 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC2A4\uD0C0\uC77C\uC744 \uBD88\uB7EC\uC640 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;react-component-library/dist/style.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MyButtonComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-component-library&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>npm\uC5D0 \uBC1C\uD589\uD558\uB824\uBA74 \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC0AC\uC6A9\uD558\uC138\uC694:</p><p>\uB85C\uADF8\uC778\uB418\uC5B4 \uC788\uC9C0 \uC54A\uB2E4\uBA74, \uBA3C\uC800 npm\uC5D0 \uB85C\uADF8\uC778\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),q=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774\uAC83\uC73C\uB85C \uB05D\uB0AC\uC5B4\uC694! npm\uC5D0\uC11C React \uAD6C\uC131 \uC694\uC18C \uD328\uD0A4\uC9C0\uB97C \uC124\uCE58\uD558\uC138\uC694. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC544\uB798 \uB9C1\uD06C\uB41C \uC800\uC7A5\uC18C\uB97C \uCC38\uC870\uD574\uC8FC\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=o("p",null,"GitHub \uC800\uC7A5\uC18C: https://github.com/mevlutcantuna/react-beautiful-timeline",-1),f=o("p",null,"\uC5F0\uB77D\uCC98:",-1),h=o("p",null,"Linkedin Github Twitter",-1);function j(x,_){return s(),l("div",null,[u,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,(s(),n(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,f,h])}var R=i(c,[["render",j],["__file","index.html.vue"]]);export{R as default};