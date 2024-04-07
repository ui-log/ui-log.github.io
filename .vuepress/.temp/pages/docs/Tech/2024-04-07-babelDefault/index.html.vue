<template><div><p>부모: main.js|ts 구성</p>
<p>유형: (config: Babel.Config, options: 옵션) = Babel.Config | Promise&lt;Babel.Config&gt;</p>
<p>babelDefault를 통해 Storybook의 Babel 설정을 사용자 지정할 수 있습니다. 이는 사용자의 프리셋이 적용되기 전에 미리보기 구성에 적용되며, 애드온 작성자에게 유용하며 권장됩니다. 최종 사용자의 babel 설정이 덮어쓸 수 있도록 설정되어 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TransformOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@babel/core'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">babelDefault</span><span class="token punctuation">(</span>config<span class="token operator">:</span> TransformOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'@babel/plugin-transform-react-jsx'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'preset'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="babel-config" tabindex="-1"><a class="header-anchor" href="#babel-config" aria-hidden="true">#</a> Babel.Config</h2>
<p>바벨이 제공하는 옵션들은 @storybook/addon-webpack5-compiler-babel 애드온을 활성화한 경우에만 적용됩니다.</p>
<h2 id="옵션" tabindex="-1"><a class="header-anchor" href="#옵션" aria-hidden="true">#</a> 옵션</h2>
<p>유형: { configType?: <code v-pre>DEVELOPMENT</code> | <code v-pre>PRODUCTION</code> }</p>
<p>다른 옵션들이 있지만 이곳에서 설명하기 어려운 것들이 있습니다. 자세한 정보를 얻으려면 타입 정의를 자세히 살펴보세요.</p>
</div></template>
