import{_ as c}from"./app.63e06a35.js";import{l as n,m as l,E as t,G as p,p as a,Y as e,C as s,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var u="/assets/HowToWriteCleanCodeWithThese5JavascriptTipsAndTricks_0.7dab559c.png";const i={},r=s("img",{src:u},null,-1),d=s("p",null,"\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uB294 \uB9CE\uC740 \uAE30\uB2A5\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB9E4\uB144 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uB4E4\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4. \uADF8\uB798\uC11C \uC6B0\uB9AC\uB294 \uD56D\uC0C1 \uD504\uB85C\uADF8\uB798\uBC0D \uC9C0\uC2DD\uC744 \uD5A5\uC0C1\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4. \uC774 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uD301\uACFC \uD2B8\uB9AD\uC744 \uD0D0\uC0C9\uD558\uACE0 \uC801\uC6A9\uD568\uC73C\uB85C\uC368 \uB354 \uC9E7\uACE0 \uBE60\uB974\uBA70 \uAC04\uB2E8\uD55C \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uACE0, \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C\uC758 \uBCC0\uD654\uBB34\uC30D\uD55C \uC138\uACC4\uC640 \uD568\uAED8 \uCD5C\uC2E0 \uC815\uBCF4\uB97C \uC720\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),k=s("p",null,"\uC774 \uBB38\uC11C\uC5D0\uC11C \uC5B8\uAE09\uB41C \uBAA8\uB4E0 \uAE30\uB2A5\uB4E4\uC740 ES6 \uC774\uC0C1\uC5D0\uC11C \uC18C\uAC1C\uB418\uC5C8\uC2B5\uB2C8\uB2E4(\uC804\uAC1C \uC5F0\uC0B0\uC790, \uCC44\uC6B0\uAE30, Intl.DateTimeFormat). \uC774\uB7EC\uD55C \uBC14\uB85C \uAC00\uAE30\uB97C \uD1B5\uD574 \uAE54\uB054\uD55C \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uCF54\uB4DC\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC73C\uBA70, \uB3D9\uC2DC\uC5D0 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uCD5C\uC801\uD654\uB97C \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),m=s("h2",{id:"_1-\u1109\u1169\u11A8\u1109\u1165\u11BC\u1107\u1167\u11AF-\u1100\u1162\u11A8\u110E\u1166-\u1107\u1162\u110B\u1167\u11AF-\u1100\u1173\u1105\u116E\u11B8\u1112\u116A",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-\u1109\u1169\u11A8\u1109\u1165\u11BC\u1107\u1167\u11AF-\u1100\u1162\u11A8\u110E\u1166-\u1107\u1162\u110B\u1167\u11AF-\u1100\u1173\u1105\u116E\u11B8\u1112\u116A","aria-hidden":"true"},"#"),a(" 1. \uC18D\uC131\uBCC4 \uAC1D\uCCB4 \uBC30\uC5F4 \uADF8\uB8F9\uD654")],-1),b=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),v=o(`<p>\uB9CE\uC740 \uAC1C\uBC1C\uC790\uB4E4\uC774 \uAC1D\uCCB4 \uBC30\uC5F4\uC744 \uC18D\uC131\uBCC4\uB85C \uADF8\uB8F9\uD654\uB41C \uBC30\uC5F4\uB85C \uBCC0\uD658\uD558\uB294 \uB370 \uC5B4\uB824\uC6C0\uC744 \uACAA\uC2B5\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC740 \uD2B9\uD788 \uB450 \uBC30\uC5F4\uC744 \uBCD1\uD569\uD560 \uB54C \uC720\uC6A9\uD569\uB2C8\uB2E4. \uAC01 \uD56D\uBAA9\uC744 id\uB85C \uC5F0\uACB0\uD558\uC5EC \uAC80\uC0C9\uD560 \uB54C, \uC2DC\uAC04 \uBCF5\uC7A1\uB3C4\uB294 O(N\xB2)\uAC00 \uB429\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uB450 \uBC30\uC5F4 \uC911 \uD558\uB098\uB97C \uB9F5\uC73C\uB85C \uBCC0\uD658\uD558\uBA74 \uC0C1\uC218 \uC2DC\uAC04\uBCF5\uC7A1\uB3C4\uC778 O(1)\uC73C\uB85C \uD56D\uBAA9\uC5D0 \uBC14\uB85C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uBCD1\uD569\uC758 \uBCF5\uC7A1\uC131\uC774 O(N)\uC73C\uB85C \uC904\uC5B4\uB4E4\uBA70, \uD3EC\uC778\uD130\uB4E4 \uB355\uBD84\uC5D0 \uBA54\uBAA8\uB9AC \uC18C\uBE44\uB3C4 \uBBF8\uBBF8\uD574\uC9D1\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">groupArrayOfObjects</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> property</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> array<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">map<span class="token punctuation">,</span> fruit</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> group <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>fruit<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      group<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fruit<span class="token punctuation">)</span><span class="token punctuation">;</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>fruit<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">,</span> group<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> map<span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u1109\u116E\u11BA\u110C\u1161-\u1102\u1162\u1105\u1175\u11B7\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-\u1109\u116E\u11BA\u110C\u1161-\u1102\u1162\u1105\u1175\u11B7\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2. \uC22B\uC790 \uB0B4\uB9BC\uD558\uAE30</h2><p>\uC22B\uC790 \uB0B4\uB9BC\uC740 \uB9E4\uC6B0 \uAC04\uB2E8\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uAE34 \uC0B0\uC220 \uC5F0\uC0B0\uC744 \uC218\uD589\uD560 \uB54C \uB354 \uAC04\uACB0\uD558\uAC8C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=o('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">1.245</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token number">1.245</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774\uC911 \uBB3C\uACB0\uD45C(~~)\uB294 \uC815\uD655\uD788 floor\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uADF8\uB4E4\uC740 \uB0B4\uB9BC(\uBC18\uB0B4\uB9BC)\uC744 \uD558\uC9C0 \uC54A\uACE0 \uC22B\uC790\uC758 \uC18C\uC218 \uBD80\uBD84\uC744 \uC81C\uAC70\uD569\uB2C8\uB2E4. \uB450 \uC5F0\uC0B0\uC758 \uACB0\uACFC\uB97C \uBE44\uAD50\uD558\uBA74 \uB3D9\uC77C\uD569\uB2C8\uB2E4.</p><h2 id="_3-\u1102\u1161\u11AF\u110D\u1161-\u1112\u1167\u11BC\u1109\u1175\u11A8-\u110C\u1175\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_3-\u1102\u1161\u11AF\u110D\u1161-\u1112\u1167\u11BC\u1109\u1175\u11A8-\u110C\u1175\u110C\u1165\u11BC" aria-hidden="true">#</a> 3. \uB0A0\uC9DC \uD615\uC2DD \uC9C0\uC815</h2><p>\uB0A0\uC9DC \uD615\uC2DD \uC9C0\uC815\uC740 \uAF64 \uADC0\uCC2E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9CE\uC740 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB4E4\uC774 \uB0A0\uC9DC \uD615\uC2DD \uC9C0\uC815\uC744 \uC218\uD589\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 dateformat\uAC00 \uADF8 \uC911 \uD558\uB098\uC785\uB2C8\uB2E4. dateformat\uC740 \uAC00\uC7A5 \uB110\uB9AC \uC0AC\uC6A9\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC720\uC77C\uD55C \uC635\uC158\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uBC88\uB4E4 \uD06C\uAE30\uB97C \uC904\uC774\uACE0 \uC2F6\uC744 \uB54C \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC5C6\uC774 \uB0A0\uC9DC \uD615\uC2DD\uC744 \uC9C0\uC815\uD558\uACE0 \uC2F6\uB2E4\uBA74 Intl.DateTimeFormat\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.```</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),f=o(`<p>\uB0A0\uC9DC \uD615\uC2DD\uC744 \uBCC0\uACBD\uD558\uB294 \uAC83\uC740 \uAC04\uB2E8\uD558\uACE0 \uAC04\uACB0\uD558\uBA70 \uC9C1\uAD00\uC801\uC785\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uC635\uC158 \uC911 \uC120\uD0DD\uD560 \uC218 \uC788\uACE0 \uD604\uC7AC \uC5B8\uC5B4\uB85C \uB0A0\uC9DC\uB97C \uD45C\uC2DC\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token parameter">date<span class="token punctuation">,</span> locale</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> dateFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>DateTimeFormat</span><span class="token punctuation">(</span>locale<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">hour</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">minute</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">second</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> dateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u1106\u1169\u1103\u1173\u11AB-\u1109\u116E\u11BA\u110C\u1161\u1105\u1173\u11AF-2\u110C\u1161\u1105\u1175\u1105\u1169-\u1112\u1167\u11BC\u1109\u1175\u11A8\u1112\u116A\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_4-\u1106\u1169\u1103\u1173\u11AB-\u1109\u116E\u11BA\u110C\u1161\u1105\u1173\u11AF-2\u110C\u1161\u1105\u1175\u1105\u1169-\u1112\u1167\u11BC\u1109\u1175\u11A8\u1112\u116A\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 4. \uBAA8\uB4E0 \uC22B\uC790\uB97C 2\uC790\uB9AC\uB85C \uD615\uC2DD\uD654\uD558\uAE30</h2><p>\uB0A0\uC9DC\uB97C \uBE44\uAD50\uD560 \uB54C \uB0A0\uC9DC\uC758 \uAE38\uC774\uB294 \uB0A0\uC9DC\uC5D0 \uB530\uB77C \uB2E4\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uB450 \uB0A0\uC9DC\uB294 \uC5F0-\uC6D4-\uC77C\uB85C \uD615\uC2DD\uD654\uD560 \uB54C \uC11C\uB85C \uB2E4\uB978 \uAE38\uC774\uB97C \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> <span class="token number">1.</span> <span class="token number">2024</span> <span class="token operator">=&gt;</span> <span class="token number">2024</span>\uB144 <span class="token number">1</span>\uC6D4 <span class="token number">1</span>\uC77C
<span class="token number">10.2</span><span class="token punctuation">.</span> <span class="token number">2024</span> <span class="token operator">=&gt;</span> <span class="token number">2024</span>\uB144 <span class="token number">2</span>\uC6D4 <span class="token number">10</span>\uC77C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB7EC\uD55C \uACBD\uC6B0\uC5D0 \uC22B\uC790\uB97C 2\uC790\uB9AC\uB85C \uCC44\uC6B0\uB294 \uAC83\uC774 \uD3B8\uB9AC\uD569\uB2C8\uB2E4. (\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uC6D4\uC740 1\uBD80\uD130 \uC2DC\uC791\uD558\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C 0\uBD80\uD130 \uC2DC\uC791\uD55C\uB2E4\uB294 \uAC83\uC774 \uC544\uB2D9\uB2C8\uB2E4.)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">formatDate2Digit</span><span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> <span class="token function-variable function">pad</span> <span class="token operator">=</span> <span class="token parameter">num</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token punctuation">[</span>date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">pad</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">pad</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> 
      <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token function">pad</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">pad</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">pad</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u1107\u1162\u110B\u1167\u11AF-\u1107\u1169\u11A8\u1109\u1161\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_5-\u1107\u1162\u110B\u1167\u11AF-\u1107\u1169\u11A8\u1109\u1161\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 5. \uBC30\uC5F4 \uBCF5\uC0AC\uD558\uAE30</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=o(`<p>\uB85C\uB4DC\uCE90\uC2DC\uB098 \uB2E4\uB978 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAE4A\uC740 \uBCF5\uC0AC\uB97C \uD558\uC9C0 \uC54A\uC544\uB3C4 \uAD1C\uCC2E\uC544\uC694. \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C\uB294 \uBCF5\uC0AC\uD558\uB294 \uAC83\uC774 \uC774\uB807\uAC8C \uAC04\uB2E8\uD574\uC694. \uC804\uAC1C \uC5F0\uC0B0\uC790\uB97C \uC18C\uAC1C\uD55C \uD6C4\uC5D0\uB294 \uD55C \uC904\uB85C \uBCF5\uC0AC\uB97C \uD560 \uC218 \uC788\uC5B4\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>fruits<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860</h2><p>\uC55E\uC73C\uB85C \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uB294 \uD301\uC774 \uC788\uAE30\uB97C \uBC14\uB798\uC694. \uC800\uC5D0\uAC8C\uB294 \uD2B9\uD788 \uD070 \uBCF5\uC7A1\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC791\uC131\uD560 \uB54C \uD2B9\uD788 \uC720\uC6A9\uD55C\uB370\uC694. \uC2DC\uAC04\uC744 \uC808\uC57D\uD558\uACE0 \uCF54\uB4DC\uC758 \uAE38\uC774\uC640 \uBC88\uB4E4 \uD06C\uAE30\uB97C \uC904\uC774\uBA70 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC758 \uD544\uC694\uC131\uC744 \uD574\uACB0\uD560 \uC218 \uC788\uC5B4\uC694. \uAC00\uC7A5 \uB9CE\uC740 \uC2DC\uAC04\uC744 \uC808\uC57D\uD574 \uC8FC\uB294 \uD301\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5);function _(w,j){return n(),l("div",null,[r,d,k,m,b,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var O=c(i,[["render",_],["__file","index.html.vue"]]);export{O as default};
