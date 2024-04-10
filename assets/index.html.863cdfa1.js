import{_ as n}from"./app.63e06a35.js";import{l as s,m as a,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const t={},o=p(`<p>\uB85C\uB354\uB294 \uC774\uC57C\uAE30\uC640 \uB370\uCF54\uB808\uC774\uD130\uC6A9 \uB370\uC774\uD130\uB97C \uB85C\uB4DC\uD558\uB294 \uBE44\uB3D9\uAE30 \uD568\uC218\uC785\uB2C8\uB2E4. \uC774\uC57C\uAE30\uC758 \uB85C\uB354\uB294 \uC774\uC57C\uAE30\uAC00 \uB80C\uB354\uB9C1\uB418\uAE30 \uC804\uC5D0 \uC2E4\uD589\uB418\uBA70, \uB85C\uB4DC\uB41C \uB370\uC774\uD130\uB294 \uB80C\uB354 \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uD1B5\uD574 \uC774\uC57C\uAE30\uC5D0 \uC8FC\uC785\uB429\uB2C8\uB2E4.</p><p>\uB85C\uB354\uB294 \uBAA8\uB4E0 \uC5D0\uC14B\uC744 \uB85C\uB4DC\uD558\uAC70\uB098, \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC9C0\uC5F0\uB85C\uB4DC\uD558\uAC70\uB098, \uC6D0\uACA9 API\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC740 \uB300\uADDC\uBAA8 \uC774\uC57C\uAE30 \uAC00\uC838\uC624\uAE30\uB97C \uCC98\uB9AC\uD558\uAE30 \uC704\uD55C \uC131\uB2A5 \uCD5C\uC801\uD654\uB85C \uC124\uACC4\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 args\uB294 \uC774\uC57C\uAE30 \uB370\uC774\uD130\uB97C \uAD00\uB9AC\uD558\uB294 \uAD8C\uC7A5 \uBC29\uBC95\uC785\uB2C8\uB2E4. Args \uC8FC\uBCC0\uC758 \uB3C4\uAD6C \uBC0F \uAE30\uC220 \uC0DD\uD0DC\uACC4\uB97C \uAD6C\uCD95 \uC911\uC774\uBA70, \uC774\uC640 \uB85C\uB4DC\uB41C \uB370\uC774\uD130\uAC00 \uD638\uD658\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uB85C\uB354\uB294 \uACE0\uAE09 \uAE30\uB2A5(\uC989, \uD0C8\uCD9C\uAD6C)\uC73C\uB85C, \uB2E4\uB978 \uC218\uB2E8\uC73C\uB85C \uCDA9\uC871\uD560 \uC218 \uC5C6\uB294 \uD2B9\uC815\uD55C \uD544\uC694\uC131\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4.</p><h2 id="api-\u1103\u1166\u110B\u1175\u1110\u1165-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#api-\u1103\u1166\u110B\u1175\u1110\u1165-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" aria-hidden="true">#</a> API \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30</h2><p>\uC2A4\uD1A0\uB9AC\uB294 \uB0B4\uBD80 \uB370\uC774\uD130\uB85C \uC815\uC758\uB41C \uB0B4\uC6A9\uC774\uB098 \uC2A4\uD1A0\uB9AC\uC640 \uD568\uAED8 \uC804\uB2EC\uB418\uB294 args\uB85C \uB80C\uB354\uB9C1\uB418\uB294 \uB3C5\uB9BD\uB41C \uAD6C\uC131 \uC694\uC18C \uC608\uC2DC\uC785\uB2C8\uB2E4.</p><p>\uB85C\uB354\uB294 \uC2A4\uD1A0\uB9AC \uB370\uC774\uD130\uB97C \uC678\uBD80\uC5D0\uC11C\uB85C\uB4DC\uD574\uC57C \uD560 \uB54C \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4(\uC608: \uC6D0\uACA9 API\uC5D0\uC11C). \uD560 \uC77C \uBAA9\uB85D\uC5D0 \uD45C\uC2DC\uD560 \uD560 \uC77C \uD56D\uBAA9\uC744 \uAC00\uC838\uC624\uB294 \uB2E4\uC74C \uC608\uC2DC\uB97C \uACE0\uB824\uD574\uBCF4\uC138\uC694:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> fetch <span class="token keyword">from</span> <span class="token string">&#39;node-fetch&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TodoItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./TodoItem&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> TodoItem<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> TodoItem<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span>args<span class="token punctuation">,</span> <span class="token punctuation">{</span> loaded<span class="token operator">:</span> <span class="token punctuation">{</span> todo <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>TodoItem <span class="token punctuation">{</span><span class="token operator">...</span>args<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>todo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> TodoItem<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Primary<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  loaders<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      todo<span class="token operator">:</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://jsonplaceholder.typicode.com/todos/1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC6D0\uACA9 API \uD638\uCD9C\uB85C\uBD80\uD130 \uC5BB\uC740 \uC751\uB2F5\uC740 \uC2A4\uD1A0\uB9AC \uCEE8\uD14D\uC2A4\uD2B8\uC758 \uB85C\uB4DC\uB41C \uD544\uB4DC\uB85C \uACB0\uD569\uB418\uBA70, \uC774\uB294 \uC2A4\uD1A0\uB9AC \uD568\uC218\uC758 \uB450 \uBC88\uC9F8 \uC778\uC218\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, React\uC5D0\uC11C\uB294 \uC2A4\uD1A0\uB9AC args\uAC00 \uC6B0\uC120\uB418\uAC8C \uB418\uB3C4\uB85D \uBA3C\uC800 \uC804\uAC1C\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD504\uB808\uC784\uC6CC\uD06C(\uC608: Angular)\uC5D0\uC11C\uB294 \uBCF4\uD1B5 \uD558\uB294 \uB300\uB85C \uC2A4\uD1A0\uB9AC\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1100\u1173\u11AF\u1105\u1169\u1107\u1165\u11AF-\u1105\u1169\u1103\u1165" tabindex="-1"><a class="header-anchor" href="#\u1100\u1173\u11AF\u1105\u1169\u1107\u1165\u11AF-\u1105\u1169\u1103\u1165" aria-hidden="true">#</a> \uAE00\uB85C\uBC8C \uB85C\uB354</h2><p>.storybook/preview.js \uD30C\uC77C\uC758 loaders \uB0B4\uBCF4\uB0B4\uAE30\uB97C \uD1B5\uD574 \uBAA8\uB4E0 \uC2A4\uD1A0\uB9AC\uC5D0 \uB85C\uB354\uB97C \uC124\uC815\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694 (\uC774 \uD30C\uC77C\uC740 \uBAA8\uB4E0 \uC2A4\uD1A0\uB9AC\uB97C \uAD6C\uC131\uD558\uB294 \uD30C\uC77C\uC774\uC5D0\uC694):</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uD504\uB808\uC784\uC6CC\uD06C (\uC608: react, vue3)\uB85C your-framework\uB97C \uAD50\uCCB4\uD574\uC8FC\uC138\uC694</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-framework&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  loaders<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      currentUser<span class="token operator">:</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://jsonplaceholder.typicode.com/users/1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC608\uC5D0\uC11C, &quot;\uD604\uC7AC \uC0AC\uC6A9\uC790&quot;\uB97C \uBAA8\uB4E0 \uC2A4\uD1A0\uB9AC\uC5D0\uC11C loaded.currentUser\uB85C \uBD88\uB7EC\uC62C \uC218 \uC788\uC5B4\uC694.</p><h2 id="\u1105\u1169\u1103\u1165-\u1109\u1161\u11BC\u1109\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1105\u1169\u1103\u1165-\u1109\u1161\u11BC\u1109\u1169\u11A8" aria-hidden="true">#</a> \uB85C\uB354 \uC0C1\uC18D</h2><p>\uD30C\uB77C\uBBF8\uD130\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C, \uB85C\uB354\uB294 \uC804\uC5ED\uC73C\uB85C \uC815\uC758\uD560 \uC218 \uC788\uACE0, \uCEF4\uD3EC\uB10C\uD2B8 \uB808\uBCA8 \uB610\uB294 \uAC1C\uBCC4 \uC2A4\uD1A0\uB9AC\uC5D0 \uB300\uD574 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4 (\uC6B0\uB9AC\uAC00 \uBCF8 \uAC83\uCC98\uB7FC).</p><p>\uC2A4\uD1A0\uB9AC\uBD81\uC758 \uCE94\uBC84\uC2A4\uC5D0 \uC2A4\uD1A0\uB9AC\uAC00 \uB80C\uB354\uB9C1\uB418\uAE30 \uC804\uC5D0 \uBAA8\uB4E0 \uB808\uBCA8\uC5D0 \uC815\uC758\uB41C \uBAA8\uB4E0 \uB85C\uB354\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4.</p><ul><li>\uBAA8\uB4E0 \uB85C\uB354\uB294 \uBCD1\uB82C\uB85C \uC2E4\uD589\uB428</li><li>\uBAA8\uB4E0 \uACB0\uACFC\uB294 \uC2A4\uD1A0\uB9AC \uCEE8\uD14D\uC2A4\uD2B8\uC758 \uB85C\uB4DC\uB41C \uD544\uB4DC\uC785\uB2C8\uB2E4</li><li>\uC911\uBCF5\uB418\uB294 \uD0A4\uAC00 \uC788\uB2E4\uBA74 &quot;\uB098\uC911\uC5D0&quot; \uB85C\uB354\uAC00 \uC6B0\uC120\uAD8C\uC744 \uAC16\uC2B5\uB2C8\uB2E4 (\uB0AE\uC740 \uC6B0\uC120\uC21C\uC704\uC5D0\uC11C \uB192\uC740 \uC6B0\uC120\uC21C\uC704\uB85C): \uC804\uC5ED \uB85C\uB354\uB294 \uC815\uC758\uB41C \uC21C\uC11C\uB300\uB85C \uCEF4\uD3EC\uB10C\uD2B8 \uB85C\uB354\uB294 \uC815\uC758\uB41C \uC21C\uC11C\uB300\uB85C \uC2A4\uD1A0\uB9AC \uB85C\uB354\uB294 \uC815\uC758\uB41C \uC21C\uC11C\uB300\uB85C</li><li>\uC804\uC5ED \uB85C\uB354\uB294 \uC815\uC758\uB41C \uC21C\uC11C\uB300\uB85C</li><li>\uCEF4\uD3EC\uB10C\uD2B8 \uB85C\uB354\uB294 \uC815\uC758\uB41C \uC21C\uC11C\uB300\uB85C</li><li>\uC2A4\uD1A0\uB9AC \uB85C\uB354\uB294 \uC815\uC758\uB41C \uC21C\uC11C\uB300\uB85C</li></ul>`,16),e=[o];function c(l,i){return s(),a("div",null,e)}var y=n(t,[["render",c],["__file","index.html.vue"]]);export{y as default};
