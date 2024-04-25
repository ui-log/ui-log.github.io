import{_ as s}from"./app.3052dcfb.js";import{l as a,m as e,C as n,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var t="/assets/Backgrounds_0.35736fdb.mp4";const o={},c=n("p",null,"\uBC31\uADF8\uB77C\uC6B4\uB4DC \uD234\uBC14 \uC560\uB4DC\uC628\uC744 \uD1B5\uD574 \uC2A4\uD1A0\uB9AC\uAC00 UI\uC5D0\uC11C \uB79C\uB354\uB418\uB294 \uBC30\uACBD\uC0C9\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:",-1),l=n("video",{autoplay:"",playsinline:"",loop:""},[n("source",{src:t,type:"video/mp4"})],-1),i=p(`<h2 id="\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uC124\uC815</h2><p>\uAE30\uBCF8\uC801\uC73C\uB85C \uBC31\uADF8\uB77C\uC6B4\uB4DC \uD234\uBC14\uC5D0\uB294 \uBC1D\uC740 \uBC30\uACBD\uACFC \uC5B4\uB450\uC6B4 \uBC30\uACBD\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uD558\uC9C0\uB9CC \uC5EC\uAE30\uC11C \uC81C\uACF5\uD558\uB294 \uBC30\uACBD\uC0C9\uC5D0 \uAD6D\uD55C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. .storybook/preview.js \uD30C\uC77C\uC758 parameters.backgrounds \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC790\uCCB4 \uC0C9\uC0C1 \uC138\uD2B8\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB9DE\uAC8C your-framework\uC744(\uB97C) \uD574\uB2F9 \uD504\uB808\uC784\uC6CC\uD06C (\uC608: react, vue3)\uB85C \uB300\uCCB4\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;twitter&#39;</span><span class="token punctuation">,</span>
      values<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&#39;twitter&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token string">&#39;#00aced&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&#39;facebook&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token string">&#39;#3b5998&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>default \uC18D\uC131\uC744 \uC815\uC758\uD558\uBA74 \uC560\uB4DC\uC628\uC774 \uBAA8\uB4E0 \uC2A4\uD1A0\uB9AC\uC5D0 \uC801\uC6A9\uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uD574\uB2F9 \uC0C9\uC0C1\uC774 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC0C9\uC0C1\uC73C\uB85C\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p><h3 id="\u1100\u116E\u1109\u1165\u11BC-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1100\u116E\u1109\u1165\u11BC-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uAD6C\uC131 \uD655\uC7A5\uD558\uAE30</h3><p>\uD30C\uB77C\uBBF8\uD130 \uC0C1\uC18D\uC744 \uD1B5\uD574 \uAC01 \uCEF4\uD3EC\uB10C\uD2B8 \uB610\uB294 \uC2A4\uD1A0\uB9AC\uB9C8\uB2E4 \uBC30\uACBD\uC744 \uC815\uC758\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// your-framework\uB97C \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C \uC774\uB984\uC73C\uB85C \uBC14\uAFD4\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Button \uBAA8\uB4E0 \uC2A4\uD1A0\uB9AC\uC5D0 \uC77C\uAD04\uC801\uC73C\uB85C \uBC30\uACBD\uC744 \uC801\uC6A9\uD558\uB824\uBA74:</span>
<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;twitter&#39;</span><span class="token punctuation">,</span>
      values<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;twitter&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&#39;#00aced&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;facebook&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&#39;#3b5998&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD2B9\uC815 \uC2A4\uD1A0\uB9AC\uC5D0 \uB300\uD574 \uB2E4\uB978 \uAE30\uBCF8\uAC12\uC744 \uC124\uC815\uD558\uB824\uBA74 \uBC30\uACBD \uD30C\uB77C\uBBF8\uD130 \uC911 \uD558\uB098\uB97C \uB36E\uC5B4\uC4F8 \uC218\uB3C4 \uC788\uC5B4\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Replace your-framework with the name of your framework</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Large<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;facebook&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1107\u1162\u1100\u1167\u11BC-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#\u1107\u1162\u1100\u1167\u11BC-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A" aria-hidden="true">#</a> \uBC30\uACBD \uBE44\uD65C\uC131\uD654</h3><p>\uC774\uC57C\uAE30\uC5D0\uC11C \uBC30\uACBD\uC744 \uBE44\uD65C\uC131\uD654\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uBC30\uACBD \uB9E4\uAC1C\uBCC0\uC218\uB97C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC124\uC815\uD558\uC5EC \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC5EC\uB7EC\uBD84\uC758 \uD504\uB808\uC784\uC6CC\uD06C \uC774\uB984\uC73C\uB85C \uB300\uCCB4\uD558\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Large<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span> disable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1100\u1173\u1105\u1175\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1100\u1173\u1105\u1175\u1103\u1173" aria-hidden="true">#</a> \uADF8\uB9AC\uB4DC</h2><p>\uBC30\uACBD \uD234\uBC14\uC5D0\uB294 \uADF8\uB9AC\uB4DC \uC120\uD0DD\uAE30\uB3C4 \uD3EC\uD568\uB418\uC5B4 \uC788\uC5B4\uC694. \uC774\uB807\uAC8C \uD558\uBA74 \uAD6C\uC131 \uC694\uC18C\uAC00 \uC815\uB82C\uB418\uC5C8\uB294\uC9C0 \uBE60\uB974\uAC8C \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694.</p><p>\uC2DC\uC791\uD558\uAE30 \uC704\uD574 \uCD94\uAC00 \uAD6C\uC131\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC544\uC694. \uD558\uC9C0\uB9CC \uC774 \uC18D\uC131\uB4E4\uC740 \uC644\uC804\uD788 \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uC5B4\uC694. \uC18D\uC131 \uC911 \uC5B4\uB5A4 \uAC83\uC5D0\uB3C4 \uAC12\uC744 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAE30\uBCF8\uAC12\uC744 \uC0AC\uC6A9\uD574\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// &#39;your-framework&#39;\uC744 \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uC774\uB984\uC73C\uB85C \uBC14\uAFB8\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Button \uC2A4\uD1A0\uB9AC\uC5D0 \uBAA8\uB4E0 \uBC30\uACBD\uC744 \uC801\uC6A9\uD558\uB824\uBA74:</span>
<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span>
      grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        cellSize<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        opacity<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
        cellAmount<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        offsetX<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token comment">// \uC2A4\uD1A0\uB9AC\uAC00 &#39;fullscreen&#39; \uB808\uC774\uC544\uC6C3\uC778 \uACBD\uC6B0 \uAE30\uBCF8\uAC12\uC740 0\uC774\uACE0, &#39;padded&#39; \uB808\uC774\uC544\uC6C3\uC778 \uACBD\uC6B0 16</span>
        offsetY<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token comment">// \uC2A4\uD1A0\uB9AC\uAC00 &#39;fullscreen&#39; \uB808\uC774\uC544\uC6C3\uC778 \uACBD\uC6B0 \uAE30\uBCF8\uAC12\uC740 0\uC774\uACE0, &#39;padded&#39; \uB808\uC774\uC544\uC6C3\uC778 \uACBD\uC6B0 16</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1100\u1173\u1105\u1175\u1103\u1173-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#\u1100\u1173\u1105\u1175\u1103\u1173-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A" aria-hidden="true">#</a> \uADF8\uB9AC\uB4DC \uBE44\uD65C\uC131\uD654</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// your-framework\uC744 \uC0AC\uC6A9\uD558\uC2DC\uB294 framework \uC774\uB984\uC73C\uB85C \uBCC0\uACBD\uD574\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Large<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span>
      grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        disable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>\uC774 \uC560\uB4DC\uC628\uC740 &#39;\uBC30\uACBD&#39; \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uC544\uB798 \uB2E4\uC74C \uB9E4\uAC1C\uBCC0\uC218\uB97C Storybook\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4:</p><h4 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h4><p>\uC720\uD615: \uBB38\uC790\uC5F4</p><p>\uAE30\uBCF8 \uBC30\uACBD\uC0C9\uC785\uB2C8\uB2E4. \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC0C9\uC0C1 \uC911 name \uC18D\uC131\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4.</p><h4 id="\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A" aria-hidden="true">#</a> \uBE44\uD65C\uC131\uD654</h4><p>\uC720\uD615: \uBD80\uC6B8</p><p>\uC774 \uC560\uB4DC\uC628\uC758 \uB3D9\uC791\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uC804\uCCB4 \uC2A4\uD1A0\uB9AC\uBD81\uC5D0\uC11C\uC774 \uC560\uB4DC\uC628\uC744 \uBE44\uD65C\uC131\uD654\uD558\uB824\uB294 \uACBD\uC6B0, addon-essentials\uB97C \uB4F1\uB85D\uD560 \uB54C \uADF8\uB807\uAC8C\uD574\uC57C\uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uC815\uBCF4\uB294 essential \uC560\uB4DC\uC628\uC758 \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.</p><p>\uC774 \uB9E4\uAC1C \uBCC0\uC218\uB294 \uB354 \uAD6C\uCCB4\uC801\uC778 \uC218\uC900\uC5D0\uC11C \uC7AC\uC815\uC758\uB97C \uD5C8\uC6A9\uD558\uB294 \uB370 \uAC00\uC7A5 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uD504\uB85C\uC81D\uD2B8 \uC218\uC900\uC5D0\uC11C\uC774 \uB9E4\uAC1C \uBCC0\uC218\uAC00 true\uB85C \uC124\uC815\uB41C \uACBD\uC6B0 \uBA54\uD0C0(\uCEF4\uD3EC\uB10C\uD2B8) \uB610\uB294 \uC2A4\uD1A0\uB9AC \uC218\uC900\uC5D0\uC11C false\uB85C \uC124\uC815\uD558\uC5EC \uB2E4\uC2DC \uD65C\uC131\uD654 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h4 id="\u1100\u1167\u11A8\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11A8\u110C\u1161" aria-hidden="true">#</a> \uACA9\uC790</h4><p>\uC720\uD615:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  cellAmount<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  cellSize<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  disable<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">offsetX</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">offsetY</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  opacity<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC720\uD615: \uC22B\uC790</p><p>\uAE30\uBCF8\uAC12: 5</p><p>\uC18C \uADF8\uB9AC\uB4DC \uB77C\uC778\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD558\uC138\uC694.</p><p>\uC720\uD615: \uC22B\uC790</p><p>\uAE30\uBCF8\uAC12: 20</p><p>\uC8FC\uC694 \uADF8\uB9AC\uB4DC \uC120\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC720\uD615: \uBD80\uC6B8</p><p>\uADF8\uB9AC\uB4DC\uB97C \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><p>\uC720\uD615: \uC22B\uC790</p><p>\uAE30\uBCF8\uAC12: \uC2A4\uD1A0\uB9AC \uB808\uC774\uC544\uC6C3\uC774 <code>fullscreen</code>\uC774\uBA74 0, <code>padded</code>\uC774\uBA74 16</p><p>\uADF8\uB9AC\uB4DC\uC758 \uAC00\uB85C \uC624\uD504\uC14B.</p><p>\uD0C0\uC785: \uC22B\uC790</p><p>\uAE30\uBCF8\uAC12: \uC2A4\uD1A0\uB9AC \uB808\uC774\uC544\uC6C3\uC774 <code>fullscreen</code>\uC774\uBA74 0, <code>padded</code>\uC774\uBA74 16</p><p>\uADF8\uB9AC\uB4DC\uC758 \uC218\uC9C1 \uC624\uD504\uC14B.</p><p>\uC720\uD615: \uC22B\uC790</p><p>\uAE30\uBCF8\uAC12: 0.5</p><p>\uADF8\uB9AC\uB4DC \uC120\uC758 \uD22C\uBA85\uB3C4.</p><h4 id="\u1100\u1161\u11B9" tabindex="-1"><a class="header-anchor" href="#\u1100\u1161\u11B9" aria-hidden="true">#</a> \uAC12</h4><p>\uC720\uD615: { \uC774\uB984: \uBB38\uC790\uC5F4; \uAC12: \uBB38\uC790\uC5F4 }[]</p><p>\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBC30\uACBD\uC0C9. \uC0AC\uC6A9 \uC608\uC2DC\uB294 \uC704\uB97C \uCC38\uC870\uD558\uC138\uC694.</p>`,52),r=[c,l,i];function u(d,k){return a(),e("div",null,r)}var h=s(o,[["render",u],["__file","index.html.vue"]]);export{h as default};
