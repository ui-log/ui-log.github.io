import{_ as i}from"./app.3052dcfb.js";import{l as a,m as c,E as n,G as e,p as t,Y as p,K as s}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var o="/assets/MasteringCSSGridAComprehensiveGuide_0.f1fd67ce.png";const l={},r=s(`<h1 id="_1-css-grid-\u1100\u1175\u1107\u1169\u11AB-\u1100\u1162\u1102\u1167\u11B7-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_1-css-grid-\u1100\u1175\u1107\u1169\u11AB-\u1100\u1162\u1102\u1167\u11B7-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 1. CSS Grid \uAE30\uBCF8 \uAC1C\uB150 \uC774\uD574\uD558\uAE30:</h1><h1 id="_2-\u1100\u1173\u1105\u1175\u1103\u1173-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-\u1100\u1173\u1105\u1175\u1103\u1173-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2. \uADF8\uB9AC\uB4DC \uCEE8\uD14C\uC774\uB108 \uC124\uC815\uD558\uAE30:</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-\u1112\u1162\u11BC\u1100\u116A-\u110B\u1167\u11AF-\u110C\u1165\u11BC\u110B\u1174\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-\u1112\u1162\u11BC\u1100\u116A-\u110B\u1167\u11AF-\u110C\u1165\u11BC\u110B\u1174\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3. \uD589\uACFC \uC5F4 \uC815\uC758\uD558\uAE30:</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=s(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 200px<span class="token punctuation">;</span> <span class="token comment">/* \uB450 \uAC1C\uC758 \uD589: 100px, 200px */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 2fr<span class="token punctuation">;</span> <span class="token comment">/* 1:2 \uBE44\uC728\uB85C \uB450 \uAC1C\uC758 \uC5F4 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u1100\u1173\u1105\u1175\u1103\u1173-\u110B\u1161\u110B\u1175\u1110\u1166\u11B7-\u1107\u1162\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#_4-\u1100\u1173\u1105\u1175\u1103\u1173-\u110B\u1161\u110B\u1175\u1110\u1166\u11B7-\u1107\u1162\u110E\u1175" aria-hidden="true">#</a> 4. \uADF8\uB9AC\uB4DC \uC544\uC774\uD15C \uBC30\uCE58:</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / 2<span class="token punctuation">;</span> <span class="token comment">/* 1\uD589\uBD80\uD130 2\uD589\uAE4C\uC9C0 */</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span> <span class="token comment">/* 1\uC5F4\uBD80\uD130 3\uC5F4\uAE4C\uC9C0 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u1100\u1173\u1105\u1175\u1103\u1173-\u1100\u1161\u11AB\u1100\u1167\u11A8" tabindex="-1"><a class="header-anchor" href="#_5-\u1100\u1173\u1105\u1175\u1103\u1173-\u1100\u1161\u11AB\u1100\u1167\u11A8" aria-hidden="true">#</a> 5. \uADF8\uB9AC\uB4DC \uAC04\uACA9:</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  grid<span class="token operator">-</span>gap<span class="token operator">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* \uADF8\uB9AC\uB4DC \uC544\uC774\uD15C \uC0AC\uC774\uC758 \uAC04\uACA9\uC744 20px\uB85C \uC124\uC815\uD569\uB2C8\uB2E4 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-\u1100\u1173\u1105\u1175\u1103\u1173-\u110B\u1161\u110B\u1175\u1110\u1166\u11B7-\u110C\u1165\u11BC\u1105\u1167\u11AF\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_6-\u1100\u1173\u1105\u1175\u1103\u1173-\u110B\u1161\u110B\u1175\u1110\u1166\u11B7-\u110C\u1165\u11BC\u1105\u1167\u11AF\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 6. \uADF8\uB9AC\uB4DC \uC544\uC774\uD15C \uC815\uB82C\uD558\uAE30:</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span> <span class="token comment">/* \uD2B8\uB799 \uB0B4\uC5D0\uC11C \uD56D\uBAA9\uC744 \uC218\uD3C9\uC73C\uB85C \uC815\uB82C\uD569\uB2C8\uB2E4 */</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span> <span class="token comment">/* \uD2B8\uB799 \uB0B4\uC5D0\uC11C \uD56D\uBAA9\uC744 \uC218\uC9C1\uC73C\uB85C \uC815\uB82C\uD569\uB2C8\uB2E4 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u1100\u1173\u1105\u1175\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#_7-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u1100\u1173\u1105\u1175\u1103\u1173" aria-hidden="true">#</a> 7. \uBC18\uC751\uD615 \uADF8\uB9AC\uB4DC:</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=s(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span> <span class="token comment">/* \uB354 \uC791\uC740 \uD654\uBA74\uC5D0\uC11C\uB294 \uB2E8\uC77C \uC5F4 \uB808\uC774\uC544\uC6C3 */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="\uC774\uBBF8\uC9C0"></p><h1 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860:</h1>',3);function v(k,h){return a(),c("div",null,[r,(a(),n(p("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(a(),n(p("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(a(),n(p("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m])}var w=i(l,[["render",v],["__file","index.html.vue"]]);export{w as default};