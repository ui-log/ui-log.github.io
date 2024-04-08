import{_ as s}from"./app.a99075bb.js";import{l as n,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const p={},e=t(`<p>\uD0C0\uC785\uC2A4\uD06C\uB9BD\uD2B8\uB85C \uC774\uC57C\uAE30\uB97C \uC791\uC131\uD558\uBA74 \uB354 \uC0DD\uC0B0\uC801\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCEF4\uD3EC\uB10C\uD2B8 \uC18D\uC131\uC744 \uCC3E\uC544\uBCF4\uAE30 \uC704\uD574 \uD30C\uC77C \uAC04\uC744 \uC62E\uACA8\uB2E4\uB2C8\uC9C0 \uC54A\uC544\uB3C4 \uB429\uB2C8\uB2E4. \uCF54\uB4DC \uD3B8\uC9D1\uAE30\uB294 \uD544\uC218 \uC18D\uC131\uC774 \uB204\uB77D\uB41C \uAC83\uC744 \uC54C\uB824 \uC8FC\uBA70, \uC571 \uB0B4\uC5D0\uC11C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD560 \uB54C\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC18D\uC131 \uAC12\uC744 \uC790\uB3D9 \uC644\uC131\uD574 \uC90D\uB2C8\uB2E4. \uAC8C\uB2E4\uAC00 \uC2A4\uD1A0\uB9AC\uBD81\uC740 \uD574\uB2F9 \uCEF4\uD3EC\uB10C\uD2B8 \uC720\uD615\uC744 \uCD94\uB860\uD558\uC5EC \uCEE8\uD2B8\uB864 \uD14C\uC774\uBE14\uC744 \uC790\uB3D9 \uC0DD\uC131\uD569\uB2C8\uB2E4.</p><p>\uC2A4\uD1A0\uB9AC\uBD81\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C TypeScript\uB97C \uC9C0\uC6D0\uD558\uBBC0\uB85C \uAD6C\uC131\uC774 \uD544\uC694 \uC5C6\uC774 \uC989\uC2DC \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="meta-\u1106\u1175\u11BE-storyobj\u1105\u1169-\u110B\u1175\u110B\u1163\u1100\u1175\u110B\u1174-\u1110\u1161\u110B\u1175\u1111\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#meta-\u1106\u1175\u11BE-storyobj\u1105\u1169-\u110B\u1175\u110B\u1163\u1100\u1175\u110B\u1174-\u1110\u1161\u110B\u1175\u1111\u1175\u11BC" aria-hidden="true">#</a> Meta \uBC0F StoryObj\uB85C \uC774\uC57C\uAE30\uC758 \uD0C0\uC774\uD551</h2><p>\uC774\uC57C\uAE30\uB97C \uC791\uC131\uD560 \uB54C \uC720\uC6A9\uD55C \uB450 \uAC00\uC9C0 \uCE21\uBA74\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uBA54\uD0C0(meta)\uB85C, \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uD574\uB2F9 \uC774\uC57C\uAE30\uB97C \uC124\uBA85\uD558\uACE0 \uAD6C\uC131\uD569\uB2C8\uB2E4. CSF \uD30C\uC77C\uC5D0\uC11C \uC774\uAC83\uC740 \uAE30\uBCF8 \uB0B4\uBCF4\uB0B4\uAE30(default export)\uC785\uB2C8\uB2E4. \uB450 \uBC88\uC9F8\uB294 \uC774\uC57C\uAE30 \uC790\uCCB4\uC785\uB2C8\uB2E4.</p><p>Storybook\uC740 \uAC01\uAC01 Meta\uC640 StoryObj\uB77C\uB294 \uC720\uD2F8\uB9AC\uD2F0 \uD0C0\uC785\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 \uD574\uB2F9 \uD0C0\uC785\uC744 \uC0AC\uC6A9\uD55C CSF \uD30C\uC77C\uC758 \uC608\uC2DC\uAC00 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uC0AC\uC6A9 \uC911\uC778 \uB80C\uB354\uB7EC (\uC608: react, vue3 \uB4F1)\uB85C your-renderer\uB97C \uB300\uCCB4\uD558\uC138\uC694.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/your-renderer&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Basic<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Primary<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    primary<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props-\u1110\u1161\u110B\u1175\u11B8-\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#props-\u1110\u1161\u110B\u1175\u11B8-\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" aria-hidden="true">#</a> Props \uD0C0\uC785 \uB9E4\uAC1C\uBCC0\uC218</h3><p>Meta\uC640 StoryObj \uD0C0\uC785\uC740 \uBAA8\uB450 \uC81C\uB124\uB9AD\uC774\uAE30 \uB54C\uBB38\uC5D0 \uCEF4\uD3EC\uB10C\uD2B8 \uD0C0\uC785\uC774\uB098 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD504\uB86D\uC2A4 \uD0C0\uC785\uC5D0 \uC120\uD0DD\uC801\uC778 \uD504\uB86D \uD0C0\uC785 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4 (\uC608: Meta<code>typeof Button</code>\uC758 typeof Button \uBD80\uBD84). \uC774\uB807\uAC8C \uD568\uC73C\uB85C\uC368 TypeScript\uB294 \uC798\uBABB\uB41C arg\uB97C \uC815\uC758\uD558\uB294 \uAC83\uC744 \uBC29\uC9C0\uD558\uACE0 \uBAA8\uB4E0 \uB370\uCF54\uB808\uC774\uD130, \uD50C\uB808\uC774 \uD568\uC218 \uB610\uB294 \uB85C\uB354\uAC00 \uC790\uC2E0\uC758 \uD568\uC218 \uC778\uC218\uB97C \uD0C0\uC785 \uC9C0\uC815\uD560 \uC218 \uC788\uAC8C \uB429\uB2C8\uB2E4.</p><p>\uC704\uC758 \uC608\uC2DC\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uC720\uD615\uC744 \uC804\uB2EC\uD558\uB294 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. props \uC720\uD615\uC744 \uC804\uB2EC\uD558\uB294 \uC608\uC2DC\uB294 &quot;\uC0AC\uC6A9\uC790 \uC815\uC758 args\uC5D0 \uB300\uD55C \uC720\uD615 \uC9C0\uC815&quot;\uC744 \uCC38\uC870\uD558\uC138\uC694.</p><h2 id="\u1103\u1165-\u1102\u1161\u110B\u1173\u11AB-\u110B\u1172\u1112\u1167\u11BC-\u110B\u1161\u11AB\u110C\u1165\u11AB\u1109\u1165\u11BC\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-satisfies-\u1109\u1161\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1165-\u1102\u1161\u110B\u1173\u11AB-\u110B\u1172\u1112\u1167\u11BC-\u110B\u1161\u11AB\u110C\u1165\u11AB\u1109\u1165\u11BC\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-satisfies-\u1109\u1161\u110B\u116D\u11BC" aria-hidden="true">#</a> \uB354 \uB098\uC740 \uC720\uD615 \uC548\uC804\uC131\uC744 \uC704\uD55C satisfies \uC0AC\uC6A9</h2><p>TypeScript 4.9+\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB2E4\uBA74, \uC0C8\uB85C \uCD94\uAC00\uB41C satisfies \uC5F0\uC0B0\uC790\uB97C \uD65C\uC6A9\uD558\uC5EC \uBCF4\uB2E4 \uC5C4\uACA9\uD55C \uC720\uD615 \uAC80\uC0AC\uB97C \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uD544\uC218 args\uAC00 \uB204\uB77D\uB41C \uACBD\uC6B0\uC5D0\uB3C4 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uBFD0\uB9CC \uC544\uB2C8\uB77C \uC720\uD615 \uC624\uB958\uB97C\uC218\uC2E0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC2A4\uD1A0\uB9AC\uC758 \uC720\uD615\uC744 \uC801\uC6A9\uD558\uAE30 \uC704\uD574 satisfies\uB97C \uC0AC\uC6A9\uD558\uBA74, \uC774\uC57C\uAE30 \uAC04\uC5D0 play \uD568\uC218\uB97C \uACF5\uC720\uD560 \uB54C \uC720\uD615 \uC548\uC804\uC131\uC744 \uC720\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. satisfies\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC73C\uBA74 TypeScript\uB294 play \uD568\uC218\uAC00 \uC815\uC758\uB418\uC9C0 \uC54A\uC558\uC744 \uC218 \uC788\uB2E4\uB294 \uC624\uB958\uB97C \uBC1C\uC0DD\uC2DC\uD0B5\uB2C8\uB2E4. satisfies \uC5F0\uC0B0\uC790\uB294 TypeScript\uAC00 play \uD568\uC218\uAC00 \uC815\uC758\uB418\uC5B4 \uC788\uB294\uC9C0 \uC5EC\uBD80\uB97C \uCD94\uB860\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4.</p><p>\uB9C8\uC9C0\uB9C9\uC73C\uB85C, satisfies\uC758 \uC0AC\uC6A9\uC744 \uD1B5\uD574 meta\uC758 typeof\uB97C StoryObj generic\uC73C\uB85C \uC804\uB2EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 TypeScript\uC5D0 meta \uC720\uD615\uACFC StoryObj \uC720\uD615 \uAC04\uC758 \uC5F0\uACB0\uC744 \uC54C\uB9AC\uAC8C \uB418\uC5B4 args \uC720\uD615\uC744 meta \uC720\uD615\uC5D0\uC11C \uCD94\uB860\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB9D0\uD574, TypeScript\uB294 args\uAC00 \uC774\uC57C\uAE30 \uBC0F meta \uB808\uBCA8\uC5D0\uC11C \uBAA8\uB450 \uC815\uC758\uB420 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uC774\uD574\uD558\uACE0, meta \uB808\uBCA8\uC5D0\uC11C \uD544\uC694\uD55C arg\uAC00 \uC815\uC758\uB418\uC5B4 \uC788\uC9C0\uB9CC \uC774\uC57C\uAE30 \uB808\uBCA8\uC5D0\uB294 \uC815\uC758\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC744 \uB54C \uC624\uB958\uB97C \uBC1C\uC0DD\uC2DC\uD0A4\uC9C0 \uC54A\uC744 \uAC83\uC785\uB2C8\uB2E4.</p><h2 id="\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-args\u110B\u1174-\u110B\u1172\u1112\u1167\u11BC\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-args\u110B\u1174-\u110B\u1172\u1112\u1167\u11BC\u1112\u116A" aria-hidden="true">#</a> \uC0AC\uC6A9\uC790 \uC815\uC758 args\uC758 \uC720\uD615\uD654</h2><p>\uAC00\uB054\uC529 \uC774\uC57C\uAE30\uB294 \uAD6C\uC131 \uC694\uC18C props\uC5D0 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC740 args\uB97C \uC815\uC758\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0, \uAD6C\uC131 \uC694\uC18C\uC758 props \uC720\uD615\uACFC \uC0AC\uC6A9\uC790 \uC815\uC758 args \uC720\uD615\uC744 \uACB0\uD569\uD558\uAE30 \uC704\uD574 \uAD50\uCC28 \uC720\uD615\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, footer arg\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC790\uC2DD \uAD6C\uC131 \uC694\uC18C\uB97C \uCC44\uC6B0\uB294 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Page <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Page&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">PagePropsAndCustomArgs</span> <span class="token operator">=</span> React<span class="token punctuation">.</span>ComponentProps<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Page<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span>PagePropsAndCustomArgs<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Page<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> footer<span class="token punctuation">,</span> <span class="token operator">...</span>args <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Page <span class="token punctuation">{</span><span class="token operator">...</span>args<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span><span class="token punctuation">{</span>footer<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Page<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span>PagePropsAndCustomArgs<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> CustomFooter<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    footer<span class="token operator">:</span> <span class="token string">&#39;Built with Storybook&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[e];function r(c,i){return n(),a("div",null,o)}var y=s(p,[["render",r],["__file","index.html.vue"]]);export{y as default};
