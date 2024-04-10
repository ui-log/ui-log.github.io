import{_ as o}from"./app.63e06a35.js";import{l as n,m as i,E as a,Y as t,G as e,p,C as s,K as c}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const l={},u=s("h1",{id:"scss\u110B\u1166\u1109\u1165-for-each-\u1107\u1161\u11AB\u1107\u1169\u11A8\u1106\u116E\u11AB-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#scss\u110B\u1166\u1109\u1165-for-each-\u1107\u1161\u11AB\u1107\u1169\u11A8\u1106\u116E\u11AB-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8","aria-hidden":"true"},"#"),p(" scss\uC5D0\uC11C @for @each \uBC18\uBCF5\uBB38 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95")],-1),r=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"\u{1F4A1}\uC774 \uD3EC\uC2A4\uD305\uC744 \uC77D\uC73C\uBA74"),s("p",null,"scss\uC5D0\uC11C for, each \uBC18\uBCF5\uBB38\uC744 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")],-1),d=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),k=c(`<h2 id="_1-for-i-from-start-to-end" tabindex="-1"><a class="header-anchor" href="#_1-for-i-from-start-to-end" aria-hidden="true">#</a> 1. for \${i} from \${start} to \${end}</h2><p>for\uBB38\uC758 \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uBC29\uBC95\uC73C\uB85C</p><p><code>for \${i} from \${start} to \${end}</code>\uB85C \uC791\uC131\uD558\uBA74 i\uB97C \uC778\uB371\uC2A4\uB85C \uD558\uACE0 start\uBD80\uD130 end <strong>\uBBF8\uB9CC</strong>\uAE4C\uC9C0 \uBC18\uBCF5\uD569\uB2C8\uB2E4. \uC774\uD558\uAC00 \uC544\uB2C8\uB77C \uBBF8\uB9CC\uC774\uB77C\uB294 \uC810\uB9CC \uCC38\uACE0\uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4.</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$colorList</span></span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">,</span> #e67e22<span class="token punctuation">,</span> #f1c40f<span class="token punctuation">,</span> #2ecc71<span class="token punctuation">,</span> #c0392b<span class="token punctuation">,</span> #3498db<span class="token punctuation">,</span> #2c3e50<span class="token punctuation">,</span> #9b59b6<span class="token punctuation">,</span> #bdc3c7<span class="token punctuation">,</span> #7f8c8d<span class="token punctuation">,</span> #2980b9<span class="token punctuation">;</span>

<span class="token comment">// 1~10\uAE4C\uC9C0 \uBC18\uBCF5</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token selector">1 to 11 </span><span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$colorList</span><span class="token punctuation">,</span> <span class="token variable">$i</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=c(`<p>\uC5EC\uAE30\uC11C nth\uB294 \uAE30\uBCF8 \uB0B4\uC7A5 \uD568\uC218\uB85C\uC11C scss\uC758 \uBC30\uC5F4\uC5D0\uC11C \uD2B9\uC815 \uAC12\uC744 \uC54C\uC544\uB0BC \uC218 \uC788\uB294 \uD568\uC218\uC785\uB2C8\uB2E4. \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB85C \uCE58\uBA74 <code>colorList[i]</code> \uC640 \uAC19\uC740 \uAC1C\uB150\uC774\uACA0\uC8E0.</p><h2 id="_2-for-i-from-start-through-end" tabindex="-1"><a class="header-anchor" href="#_2-for-i-from-start-through-end" aria-hidden="true">#</a> 2. for \${i} from \${start} through \${end}</h2><p>\uCCAB\uBC88\uC9F8 for\uBB38\uACFC\uC758 \uCC28\uC774\uC810\uC740 to\uAC00 through\uB85C \uBCC0\uACBD\uB418\uC5C8\uB2E4\uB294 \uC810 \uBFD0\uC778\uB370\uC694. start\uBD80\uD130 end<strong>\uC774\uD558</strong> \uAE4C\uC9C0 \uBC18\uBCF5\uD569\uB2C8\uB2E4.</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$colorList</span></span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">,</span> #e67e22<span class="token punctuation">,</span> #f1c40f<span class="token punctuation">,</span> #2ecc71<span class="token punctuation">,</span> #c0392b<span class="token punctuation">,</span> #3498db<span class="token punctuation">,</span> #2c3e50<span class="token punctuation">,</span> #9b59b6<span class="token punctuation">,</span> #bdc3c7<span class="token punctuation">,</span> #7f8c8d<span class="token punctuation">,</span> #2980b9<span class="token punctuation">;</span>

<span class="token comment">// 1~11\uAE4C\uC9C0 \uBC18\uBCF5</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token selector">1 to 11 </span><span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$colorList</span><span class="token punctuation">,</span> <span class="token variable">$i</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-each-item-in-list" tabindex="-1"><a class="header-anchor" href="#_3-each-item-in-list" aria-hidden="true">#</a> 3. @each \${item} in \${list}</h2><p>\uB2E4\uC74C\uC740 @each \uBB38\uBC95\uC778\uB370\uC694. \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC758 for each \uBB38\uBC95\uACFC \uB3D9\uC77C\uD55C \uBC29\uC2DD\uC774\uB77C\uACE0 \uC0DD\uAC01\uD574\uC8FC\uC2DC\uBA74 \uB429\uB2C8\uB2E4.</p>`,6),m=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),h=c(`<div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// index \uCC3E\uB294 \uBC29\uBC95</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$color</span> in <span class="token variable">$colorList</span> </span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 \uC791\uC131\uD560 \uC218 \uC788\uC744\uD150\uB370\uC694.</p><p>each\uBB38\uC758 \uBB38\uC81C\uB294 index\uB97C\uC54C \uC218 \uC5C6\uB2E4\uB294 \uC810\uC778\uB370\uC694. \uADF8 \uBD80\uBD84\uC740 \uC774\uB807\uAC8C \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$color</span> in <span class="token variable">$colorList</span> </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$i</span></span><span class="token punctuation">:</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token variable">$colorList</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">#{$color}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index\uB77C\uB294 \uB0B4\uC7A5 \uD568\uC218\uB97C \uD1B5\uD574\uC11C \uBC30\uC5F4\uC758 \uD2B9\uC815 \uAC12\uC774 \uBA87\uBC88\uC9F8\uC5D0 \uC788\uB294 \uAC12\uC778\uC9C0\uB97C \uC54C\uC544\uB0BC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uADF8\uB807\uAC8C \uC54C\uC544\uB0B8 $i \uAC12\uC73C\uB85C nth-child\uC5D0 \uB123\uC5B4\uC8FC\uBA74\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC8E0.</p><h2 id="_4-map-\u1112\u1167\u11BC\u1110\u1162\u110B\u1174-for-a-b-in-map" tabindex="-1"><a class="header-anchor" href="#_4-map-\u1112\u1167\u11BC\u1110\u1162\u110B\u1174-for-a-b-in-map" aria-hidden="true">#</a> 4. Map \uD615\uD0DC\uC758 for \${a},\${b} in \${map}</h2><p>index \uB0B4\uC7A5\uD568\uC218\uB97C \uD1B5\uD574\uC11C index\uB97C \uC54C\uC544\uB0BC \uC218\uB3C4 \uC788\uC9C0\uB9CC \uC544\uB798\uC640 \uAC19\uC774 map\uD615\uD0DC\uB85C \uBC30\uC5F4\uC744 \uC800\uC7A5\uD55C\uB2E4\uBA74 \uBCC4\uB3C4\uC758 \uB0B4\uC7A5\uD568\uC218 \uC5C6\uC774 \uBC14\uB85C each\uBB38\uC744 \uD1B5\uD574\uC11C \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">1</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">,</span>
  <span class="token property">2</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">,</span>
  <span class="token property">3</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">,</span>
  <span class="token property">4</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">,</span>
  <span class="token property">5</span><span class="token punctuation">:</span> #c0392b<span class="token punctuation">,</span>
  <span class="token property">6</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">,</span>
  <span class="token property">7</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">,</span>
  <span class="token property">8</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">,</span>
  <span class="token property">9</span><span class="token punctuation">:</span> #bdc3c7<span class="token punctuation">,</span>
  <span class="token property">10</span><span class="token punctuation">:</span> #7f8c8d<span class="token punctuation">,</span>
  <span class="token property">11</span><span class="token punctuation">:</span> #2980b9<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span>, <span class="token variable">$color</span> in <span class="token variable">$colors</span> </span><span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">#{$color}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@each \uB4A4\uC5D0 \uC624\uB294 \uAC12\uC5D0 map\uC758 key, value\uB85C \uD560\uB2F9\uD558\uBA74 \uADF8 \uAC12\uC744 \uBC18\uBCF5\uBB38\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB798\uC11C \uBCC4\uB3C4\uB85C index\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0\uB3C4 nth-child\uC5D0 \uC778\uB371\uC2A4 \uAC12\uC744 \uB123\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC624\uB298\uC740 scss\uC758 for\uBB38\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574\uC11C \uC54C\uC544\uBCF4\uC558\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uC5D0\uB294 \uB2E4\uB978 scss \uBB38\uBC95\uC5D0 \uB300\uD574\uC11C \uC54C\uC544\uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4.</p>`,11);function g(f,y){return n(),i("div",null,[u,r,(n(),a(t("script"),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686",crossorigin:"anonymous",async:""})),d,(n(),a(t("script"),null,{default:e(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),a(t("script"),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686",crossorigin:"anonymous",async:""})),v,(n(),a(t("script"),null,{default:e(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),a(t("script"),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686",crossorigin:"anonymous",async:""})),m,(n(),a(t("script"),null,{default:e(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h])}var B=o(l,[["render",g],["__file","index.html.vue"]]);export{B as default};
