import{_ as a}from"./app.3052dcfb.js";import{l as s,m as n,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const e={},t=o(`<p>\uB3D9\uB8CC \uBC0F \uAC1C\uBC1C\uC790 \uCEE4\uBBA4\uB2C8\uD2F0\uC5D0 \uC791\uC5C5\uBB3C\uC744 \uC18C\uAC1C\uD558\uAE30 \uC704\uD574 \uC774\uC57C\uAE30\uB97C \uC784\uBCA0\uB4DC\uD558\uC5EC \uC0BD\uC785\uD558\uC138\uC694. \uC784\uBCA0\uB4DC\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 Storybook\uC774 \uAC8C\uC2DC\uB418\uC5B4 \uACF5\uAC1C\uC801\uC73C\uB85C \uC811\uADFC \uAC00\uB2A5\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>Storybook\uC740 <code>iframe</code> \uC784\uBCA0\uB4DC\uB97C \uAE30\uBCF8\uC801\uC73C\uB85C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. Chromatic\uC744 \uC0AC\uC6A9\uD558\uC5EC Storybook\uC744 \uAC8C\uC2DC\uD558\uB294 \uACBD\uC6B0, oEmbed \uD45C\uC900\uC744 \uC9C0\uC6D0\uD558\uB294 Notion, Medium \uBC0F \uBB34\uC218\uD788 \uB9CE\uC740 \uB2E4\uB978 \uD50C\uB7AB\uD3FC\uC5D0\uC11C\uB3C4 \uC774\uC57C\uAE30\uB97C \uC784\uBCA0\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1110\u116E\u11AF\u1107\u1161\u1105\u1169-\u110B\u1175\u110B\u1163\u1100\u1175-\u110B\u1175\u11B7\u1107\u1166\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1110\u116E\u11AF\u1107\u1161\u1105\u1169-\u110B\u1175\u110B\u1163\u1100\u1175-\u110B\u1175\u11B7\u1107\u1166\u1103\u1173" aria-hidden="true">#</a> \uD234\uBC14\uB85C \uC774\uC57C\uAE30 \uC784\uBCA0\uB4DC</h2><p>\uD234\uBC14\uB85C \uC774\uC57C\uAE30\uB97C \uC784\uBCA0\uB4DC\uD558\uB824\uBA74 \uAC8C\uC2DC\uB41C \uC774\uC57C\uAE30 URL\uC744 \uBD99\uC5EC \uB123\uC73C\uC138\uC694. \uC608\uC2DC\uB85C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>5ccbc373887ca40020446347<span class="token operator">-</span>wtuhidckxo<span class="token punctuation">.</span>chromatic<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token operator">?</span>path<span class="token operator">=</span><span class="token operator">/</span>story<span class="token operator">/</span>shadowboxcta<span class="token operator">--</span><span class="token keyword">default</span>

<span class="token comment">// iframe \uC0BD\uC785</span>
<span class="token operator">&lt;</span>iframe
  src<span class="token operator">=</span><span class="token string">&quot;https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/?path=/story/shadowboxcta--default&amp;full=1&amp;shortcuts=false&amp;singleStory=true&quot;</span>
  width<span class="token operator">=</span><span class="token string">&quot;800&quot;</span>
  height<span class="token operator">=</span><span class="token string">&quot;260&quot;</span>
<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1110\u116E\u11AF\u1107\u1161-\u110B\u1165\u11B9\u110B\u1175-\u110B\u1175\u110B\u1163\u1100\u1175-\u1109\u1161\u11B8\u110B\u1175\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1110\u116E\u11AF\u1107\u1161-\u110B\u1165\u11B9\u110B\u1175-\u110B\u1175\u110B\u1163\u1100\u1175-\u1109\u1161\u11B8\u110B\u1175\u11B8" aria-hidden="true">#</a> \uD234\uBC14 \uC5C6\uC774 \uC774\uC57C\uAE30 \uC0BD\uC785</h2><p>Storybook \uD234\uBC14 \uC5C6\uC774 \uAC04\uB2E8\uD55C \uC774\uC57C\uAE30\uB97C \uC0BD\uC785\uD558\uB824\uBA74, Storybook \uC624\uB978\uCABD \uC0C1\uB2E8\uC758 &quot;open canvas in new tab&quot; \uC544\uC774\uCF58\uC744 \uD074\uB9AD\uD558\uC5EC \uCE94\uBC84\uC2A4 URL\uC744 \uC5BB\uC73C\uC138\uC694. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>5ccbc373887ca40020446347<span class="token operator">-</span>wtuhidckxo<span class="token punctuation">.</span>chromatic<span class="token punctuation">.</span>com<span class="token operator">/</span>iframe<span class="token punctuation">.</span>html<span class="token operator">?</span>id<span class="token operator">=</span><span class="token operator">/</span>story<span class="token operator">/</span>shadowboxcta<span class="token operator">--</span><span class="token keyword">default</span><span class="token operator">&amp;</span>viewMode<span class="token operator">=</span>story

<span class="token comment">// iframe \uC0BD\uC785</span>
<span class="token operator">&lt;</span>iframe
  src<span class="token operator">=</span><span class="token string">&quot;https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--default&amp;viewMode=story&amp;shortcuts=false&amp;singleStory=true&quot;</span>
  width<span class="token operator">=</span><span class="token string">&quot;800&quot;</span>
  height<span class="token operator">=</span><span class="token string">&quot;200&quot;</span>
<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u116E\u11AB\u1109\u1165-\u1109\u1161\u11B8\u110B\u1175\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u1109\u1165-\u1109\u1161\u11B8\u110B\u1175\u11B8" aria-hidden="true">#</a> \uBB38\uC11C \uC0BD\uC785</h2><p>\uC2A4\uD1A0\uB9AC \uCE74\uB4DC\uC5D0 \uB300\uD574 \uC0DD\uC131\uB41C \uB3C5\uD2B9\uD55C \uC790\uB3D9 \uC0DD\uC131 \uBB38\uC11C \uD56D\uBAA9\uC73C\uB85C viewMode=story\uB97C \uB300\uCCB4\uD558\uC5EC \uBB38\uC11C \uD398\uC774\uC9C0\uB97C \uC0BD\uC785\uD558\uC2ED\uC2DC\uC624.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>5ccbc373887ca40020446347<span class="token operator">-</span>wtuhidckxo<span class="token punctuation">.</span>chromatic<span class="token punctuation">.</span>com<span class="token operator">/</span>iframe<span class="token punctuation">.</span>html<span class="token operator">?</span>id<span class="token operator">=</span>shadowboxcta<span class="token operator">--</span>docs<span class="token operator">&amp;</span>viewMode<span class="token operator">=</span>docs<span class="token operator">&amp;</span>shortcuts<span class="token operator">=</span><span class="token boolean">false</span><span class="token operator">&amp;</span>singleStory<span class="token operator">=</span><span class="token boolean">true</span>

<span class="token comment">// iframe \uC0BD\uC785</span>
<span class="token operator">&lt;</span>iframe
  src<span class="token operator">=</span><span class="token string">&quot;https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--docs&amp;viewMode=docs&amp;shortcuts=false&amp;singleStory=true&quot;</span>
  width<span class="token operator">=</span><span class="token string">&quot;800&quot;</span>
  height<span class="token operator">=</span><span class="token string">&quot;400&quot;</span>
<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1103\u1161\u1105\u1173\u11AB-\u1111\u1173\u11AF\u1105\u1162\u11BA\u1111\u1169\u11B7\u110B\u1166-\u1109\u1173\u1110\u1169\u1105\u1175-\u1109\u1161\u11B8\u110B\u1175\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u1105\u1173\u11AB-\u1111\u1173\u11AF\u1105\u1162\u11BA\u1111\u1169\u11B7\u110B\u1166-\u1109\u1173\u1110\u1169\u1105\u1175-\u1109\u1161\u11B8\u110B\u1175\u11B8" aria-hidden="true">#</a> \uB2E4\uB978 \uD50C\uB7AB\uD3FC\uC5D0 \uC2A4\uD1A0\uB9AC \uC0BD\uC785</h2><p>\uBAA8\uB4E0 \uD50C\uB7AB\uD3FC\uB9C8\uB2E4 \uC784\uBCA0\uB4DC \uC9C0\uC6D0 \uC218\uC900\uC774 \uB2E4\uB985\uB2C8\uB2E4. \uC678\uBD80 \uCF58\uD150\uCE20\uB97C \uC784\uBCA0\uB4DC\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uAD8C\uC7A5\uC0AC\uD56D\uC740 \uD574\uB2F9 \uC11C\uBE44\uC2A4\uC758 \uBB38\uC11C\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694.</p>`,13),p=[t];function r(c,i){return s(),n("div",null,p)}var v=a(e,[["render",r],["__file","index.html.vue"]]);export{v as default};
