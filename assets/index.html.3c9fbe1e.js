import{_ as s}from"./app.a99075bb.js";import{l as a,m as t,p,K as n}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var o="/assets/Typesofaddons_0.8266e490.png",e="/assets/Typesofaddons_1.4422ec1d.png",c="/assets/Typesofaddons_2.24cc37c0.png";const i={},l=n('<p>\uAC01 Storybook \uC560\uB4DC\uC628\uC740 UI \uAE30\uBC18 \uB610\uB294 \uD504\uB9AC\uC14B \uB450 \uAC00\uC9C0 \uC77C\uBC18 \uBC94\uC8FC\uB85C \uBD84\uB958\uB429\uB2C8\uB2E4. \uAC01 \uC885\uB958\uC758 \uC560\uB4DC\uC628 \uAE30\uB2A5\uC774 \uC5EC\uAE30\uC5D0 \uBB38\uC11C\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uB4DC\uC628\uC744 \uB9CC\uB4E4 \uB54C \uCC38\uACE0\uD558\uC138\uC694.</p><h2 id="ui-\u1100\u1175\u1107\u1161\u11AB-\u110B\u1162\u1103\u1173\u110B\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#ui-\u1100\u1175\u1107\u1161\u11AB-\u110B\u1162\u1103\u1173\u110B\u1169\u11AB" aria-hidden="true">#</a> UI \uAE30\uBC18 \uC560\uB4DC\uC628</h2><p>UI \uAE30\uBC18 \uC560\uB4DC\uC628\uC740 \uB2E4\uC74C \uC694\uC18C\uB85C Storybook\uC758 UI\uB97C \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="\u1111\u1162\u1102\u1165\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1111\u1162\u1102\u1165\u11AF" aria-hidden="true">#</a> \uD328\uB110</h3><p>\uD328\uB110 \uC560\uB4DC\uC628\uC744 \uC0AC\uC6A9\uD558\uBA74 Storybook\uC758 \uC560\uB4DC\uC628 \uD328\uB110\uC5D0 \uC790\uCCB4 UI\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC5B4\uC694. \uC774\uAC83\uC740 \uC0DD\uD0DC\uACC4\uC5D0\uC11C \uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uC560\uB4DC\uC628 \uC720\uD615\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uACF5\uC2DD @storybook/actions \uBC0F @storybook/a11y\uAC00 \uC774 \uD328\uD134\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.</p><p><img src="'+o+`" alt="Typesofaddons_0.png"></p><p>\uB2E4\uC74C \uBCF4\uC77C\uB7EC\uD50C\uB808\uC774\uD2B8 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC Storybook\uC758 UI\uC5D0 \uC0C8\uB85C\uC6B4 \uD328\uB110\uC744 \uCD94\uAC00\uD558\uC138\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AddonPanel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/components&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobals<span class="token punctuation">,</span> addons<span class="token punctuation">,</span> types <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/manager-api&#39;</span><span class="token punctuation">;</span>

addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;my/panel&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  addons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;my-panel-addon/panel&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;Example Storybook panel&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//\u{1F447} Storybook\uC5D0\uC11C UI \uC694\uC18C\uC758 \uC720\uD615\uC744 \uC124\uC815\uD569\uB2C8\uB2E4</span>
    type<span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">PANEL</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> active <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>AddonPanel active<span class="token operator">=</span><span class="token punctuation">{</span>active<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Storybook\uC758 \uD328\uB110 \uC560\uB4DC\uC628\uC785\uB2C8\uB2E4<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>AddonPanel<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1110\u116E\u11AF\u1107\u1161" tabindex="-1"><a class="header-anchor" href="#\u1110\u116E\u11AF\u1107\u1161" aria-hidden="true">#</a> \uD234\uBC14</h3><p>\uD234\uBC14 \uC560\uB4DC\uC628\uC744 \uC0AC\uC6A9\uD558\uBA74 Storybook\uC758 \uD234\uBC14\uC5D0 \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uB3C4\uAD6C\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uACF5\uC2DD @storybook/backgrounds \uBC0F @storybook/addon-outline\uC774 \uC774 \uD328\uD134\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.</p><p><img src="`+e+`" alt="Types of addons"></p><p>\uB2E4\uC74C \uBCF4\uC77C\uB7EC\uD50C\uB808\uC774\uD2B8 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC Storybook\uC758 \uD234\uBC14\uC5D0 \uC0C8 \uBC84\uD2BC\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> addons<span class="token punctuation">,</span> types <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/manager-api&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IconButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/components&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OutlineIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/icons&#39;</span><span class="token punctuation">;</span>

addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;my-addon&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  addons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;my-addon/toolbar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;Example Storybook toolbar&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//\u{1F447} \uC2A4\uD1A0\uB9AC\uBD81\uC5D0\uC11C UI \uC694\uC18C\uC758 \uC720\uD615\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.</span>
    type<span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">TOOL</span><span class="token punctuation">,</span>
    <span class="token comment">//\u{1F447} \uC774\uC57C\uAE30 \uCE94\uBC84\uC2A4\uB97C \uBCF4\uACE0 \uC788\uB294 \uACBD\uC6B0 \uD234\uBC14 UI \uC694\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.</span>
    <span class="token function-variable function">match</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> tabId<span class="token punctuation">,</span> viewMode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>tabId <span class="token operator">&amp;&amp;</span> viewMode <span class="token operator">===</span> <span class="token string">&#39;story&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> active <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>IconButton active<span class="token operator">=</span><span class="token punctuation">{</span>active<span class="token punctuation">}</span> title<span class="token operator">=</span><span class="token string">&quot;\uC2A4\uD1A0\uB9AC\uBD81 \uD234\uBC14 \uBCF4\uC774\uAE30&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>OutlineIcon <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>IconButton<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1110\u1162\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1110\u1162\u11B8" aria-hidden="true">#</a> \uD0ED</h3><p>\uD0ED \uC560\uB4DC\uC628\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC2A4\uD1A0\uB9AC\uBD81\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uD0ED\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uACF5\uC2DD @storybook/addon-docs\uB294 \uC774\uB7EC\uD55C \uD328\uD134\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.</p><img src="`+c+'">',16),u=n(`<p>\uC774 \uBCF4\uC77C\uB7EC\uD50C\uB808\uC774\uD2B8 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC Storybook\uC758 UI\uC5D0 \uC0C8\uB85C\uC6B4 \uD0ED\uC744 \uCD94\uAC00\uD558\uC138\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> addons<span class="token punctuation">,</span> types <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/manager-api&#39;</span><span class="token punctuation">;</span>

addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;my-addon&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  addons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;my-addon/tab&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">TAB</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&#39;Example Storybook tab&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Storybook\uC5D0\uC11C \uD0ED \uD615\uC2DD\uC758 \uC560\uB4DC\uC628\uC785\uB2C8\uB2E4<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1111\u1173\u1105\u1175\u1109\u1166\u11BA-\u110B\u1162\u1103\u1173\u110B\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u1105\u1175\u1109\u1166\u11BA-\u110B\u1162\u1103\u1173\u110B\u1169\u11AB" aria-hidden="true">#</a> \uD504\uB9AC\uC14B \uC560\uB4DC\uC628</h2><p>Storybook \uD504\uB9AC\uC14B \uC560\uB4DC\uC628\uC740 babel, webpack \uBC0F \uC560\uB4DC\uC628 \uAD6C\uC131\uC758 \uADF8\uB8F9\uD654\uB41C \uCEEC\uB809\uC158\uC73C\uB85C, Storybook\uACFC \uB2E4\uB978 \uAE30\uC220\uC744 \uD1B5\uD569\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uACF5\uC2DD \uD504\uB9AC\uC14B-create-react-app\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC774 \uBCF4\uC77C\uB7EC\uD50C\uB808\uC774\uD2B8 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB098\uB9CC\uC758 \uD504\uB9AC\uC14B \uC560\uB4DC\uC628\uC744 \uC791\uC131\uD560 \uB54C \uCC38\uACE0\uD558\uC138\uC694.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">managerWebpack</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uC5EC\uAE30\uC11C config \uC5C5\uB370\uC774\uD2B8</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">webpackFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">babel</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook \uC560\uB4DC\uC628 \uC0DD\uD0DC\uACC4\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uC138\uC694.</p><ul><li>\uB2E4\uB978 \uC885\uB958\uC758 \uC560\uB4DC\uC628 \uC720\uD615</li><li>\uC560\uB4DC\uC628 \uAC1C\uBC1C\uC758 \uAE30\uBCF8\uC744 \uC704\uD55C \uC560\uB4DC\uC628 \uC791\uC131</li><li>\uD504\uB9AC\uC14B \uAC1C\uBC1C\uC744 \uC704\uD55C \uD504\uB9AC\uC14B</li><li>\uC694\uAD6C \uC0AC\uD56D \uBC0F \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uB808\uC2DC\uD53C\uC5D0 \uB300\uD55C \uD1B5\uD569 \uCE74\uD0C8\uB85C\uADF8</li><li>\uC0AC\uC6A9 \uAC00\uB2A5\uD55C API\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uB294 API \uCC38\uC870 \uD398\uC774\uC9C0</li></ul>`,8);function r(k,d){return a(),t("div",null,[l,p(" ``` "),u])}var h=s(i,[["render",r],["__file","index.html.vue"]]);export{h as default};
