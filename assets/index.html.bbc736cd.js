import{_ as l}from"./app.3052dcfb.js";import{l as n,m as r,E as t,G as p,p as s,Y as e,C as a,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/DevelopingAccessibleandResponsiveTableswithCSSandJavaScript_0.7621a622.png";const i={},d=a("p",null,[a("img",{src:c,alt:"\uAC1C\uBC1C"})],-1),u=a("p",null,"\uC6F9 \uAC1C\uBC1C \uC601\uC5ED\uC5D0\uC11C \uB370\uC774\uD130 \uD14C\uC774\uBE14\uC758 \uC811\uADFC\uC131\uACFC \uBC18\uC751\uC131\uC744 \uBCF4\uC7A5\uD558\uB294 \uAC83\uC740 \uCF58\uD150\uCE20\uB97C \uBAA8\uB450\uC5D0\uAC8C \uC77D\uAE30 \uC27D\uACE0 \uB113\uC740 \uB514\uBC14\uC774\uC2A4 \uBC94\uC704\uC5D0\uC11C \uAE30\uB2A5\uC801\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uD558\uB294 \uB370 \uC911\uC694\uD569\uB2C8\uB2E4. \uD14C\uC774\uBE14\uC740 \uAD6C\uC870\uD654\uB41C \uB370\uC774\uD130\uB97C \uD45C\uC2DC\uD558\uB294 \uB370 \uAE30\uBCF8\uC801\uC778 \uC694\uC18C\uC774\uC9C0\uB9CC, \uC791\uC740 \uD654\uBA74\uACFC \uC811\uADFC\uC131 \uC7A5\uCE58\uC5D0\uC11C\uB294 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAE30\uC0AC\uC5D0\uC11C\uB294 CSS\uC640 JavaScript\uB97C \uD65C\uC6A9\uD55C \uAE30\uC220\uC744 \uD0D0\uC0C9\uD558\uC5EC \uB370\uC774\uD130 \uD14C\uC774\uBE14\uC744 \uC811\uADFC\uC131 \uC788\uB294 \uBC18\uC751\uD615\uC73C\uB85C \uB9CC\uB4DC\uB294 \uBC29\uBC95\uC744 \uC0B4\uD3B4\uBCF4\uBA70, \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uAC00 \uB514\uBC14\uC774\uC2A4\uB098 \uB2A5\uB825\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uB370\uC774\uD130\uB97C \uD6A8\uACFC\uC801\uC73C\uB85C \uC0C1\uD638\uC791\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4.",-1),k=a("h1",{id:"\u1110\u1166\u110B\u1175\u1107\u1173\u11AF\u110B\u1166\u1109\u1165-\u110C\u1165\u11B8\u1100\u1173\u11AB\u1109\u1165\u11BC-\u1109\u1161\u1105\u1169-\u110C\u1161\u11B8\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1110\u1166\u110B\u1175\u1107\u1173\u11AF\u110B\u1166\u1109\u1165-\u110C\u1165\u11B8\u1100\u1173\u11AB\u1109\u1165\u11BC-\u1109\u1161\u1105\u1169-\u110C\u1161\u11B8\u1100\u1175","aria-hidden":"true"},"#"),s(" \uD14C\uC774\uBE14\uC5D0\uC11C \uC811\uADFC\uC131 \uC0AC\uB85C \uC7A1\uAE30")],-1),v=a("p",null,"\uC6F9 \uB514\uC790\uC778\uC5D0\uC11C\uC758 \uC811\uADFC\uC131\uC740 \uC7A5\uC560\uB97C \uAC00\uC9C4 \uC0AC\uC6A9\uC790\uAC00 \uC6F9\uC0AC\uC774\uD2B8\uC640 \uB3C4\uAD6C\uB97C \uC778\uC2DD\uD558\uACE0 \uC774\uD574\uD558\uBA70 \uD0D0\uC0C9\uD558\uACE0 \uC0C1\uD638\uC791\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uAC83\uC744 \uBCF4\uC7A5\uD569\uB2C8\uB2E4. \uD14C\uC774\uBE14\uC758 \uACBD\uC6B0, \uC774\uB294 \uC2A4\uD06C\uB9B0 \uB9AC\uB354 \uBC0F \uAE30\uD0C0 \uBCF4\uC870 \uAE30\uC220\uC774 \uC815\uD655\uD558\uAC8C \uD574\uC11D\uD558\uACE0 \uC804\uB2EC\uD560 \uC218 \uC788\uB3C4\uB85D \uD14C\uC774\uBE14 \uB0B4\uBD80\uC758 \uC815\uBCF4\uB97C \uD65C\uC131\uD654\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.",-1),h=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=o(`<h1 id="\u1109\u1173\u110F\u1173\u1105\u1175\u11AB-\u1105\u1175\u1103\u1165\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1109\u1175\u1106\u1166\u11AB\u1110\u1175\u11A8-html" tabindex="-1"><a class="header-anchor" href="#\u1109\u1173\u110F\u1173\u1105\u1175\u11AB-\u1105\u1175\u1103\u1165\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1109\u1175\u1106\u1166\u11AB\u1110\u1175\u11A8-html" aria-hidden="true">#</a> \uC2A4\uD06C\uB9B0 \uB9AC\uB354\uB97C \uC704\uD55C \uC2DC\uBA58\uD2F1 HTML</h1><p>\uD14C\uC774\uBE14\uC744 \uC811\uADFC \uAC00\uB2A5\uD558\uAC8C \uB9CC\uB4E4\uAE30 \uC704\uD574 \uC2DC\uBA58\uD2F1 HTML\uC744 \uC0AC\uC6A9\uD574\uBCF4\uC138\uC694. <code>table</code>, <code>th</code>, \uBC0F <code>caption</code> \uC694\uC18C\uB97C \uC801\uC808\uD558\uAC8C \uC0AC\uC6A9\uD558\uC5EC \uD14C\uC774\uBE14 \uAD6C\uC870, \uD5E4\uB529, \uADF8\uB9AC\uACE0 \uD574\uB2F9 \uC124\uBA85\uC744 \uC815\uC758\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">|</span> Product <span class="token operator">|</span> Quantity <span class="token operator">|</span> Sales   <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span>
<span class="token operator">|</span> Widgets <span class="token operator">|</span> <span class="token number">50</span>       <span class="token operator">|</span> $1<span class="token punctuation">,</span><span class="token number">000</span>  <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="aria-\u110B\u1167\u11A8\u1112\u1161\u11AF-\u1106\u1175\u11BE-\u1109\u1169\u11A8\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#aria-\u110B\u1167\u11A8\u1112\u1161\u11AF-\u1106\u1175\u11BE-\u1109\u1169\u11A8\u1109\u1165\u11BC" aria-hidden="true">#</a> ARIA \uC5ED\uD560 \uBC0F \uC18D\uC131</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=a("p",null,'\uC6F9 \uC694\uC18C\uC758 \uC5ED\uD560\uACFC \uC0C1\uD0DC\uC5D0 \uB300\uD55C \uBCF4\uC870 \uAE30\uC220\uC758 \uCD94\uAC00 \uC138\uBD80 \uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uB294 \uB3C4\uAD6C\uC778 Accessible Rich Internet Applications (ARIA) \uC5ED\uD560 \uBC0F \uC18D\uC131\uC740 \uD45C\uC758 \uACBD\uC6B0 role="table" \uB610\uB294 role="grid"\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC2A4\uD06C\uB9B0 \uB9AC\uB354\uAC00 \uB370\uC774\uD130\uB97C \uD574\uC11D\uD558\uB294 \uBC29\uC2DD\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.',-1),y=a("p",null,"\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 Flexbox\uB97C \uD65C\uC6A9\uD55C \uBC18\uC751\uD615 \uC6F9 \uB514\uC790\uC778 \uB9CC\uB4E4\uAE30\uB97C \uC77D\uC5B4\uBCF4\uC138\uC694.",-1),g=a("h1",{id:"css\u1105\u1173\u11AF-\u1112\u116A\u11AF\u110B\u116D\u11BC\u1112\u1161\u11AB-\u110B\u1173\u11BC\u1103\u1161\u11B8\u1109\u1165\u11BC-\u1112\u1163\u11BC\u1109\u1161\u11BC",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#css\u1105\u1173\u11AF-\u1112\u116A\u11AF\u110B\u116D\u11BC\u1112\u1161\u11AB-\u110B\u1173\u11BC\u1103\u1161\u11B8\u1109\u1165\u11BC-\u1112\u1163\u11BC\u1109\u1161\u11BC","aria-hidden":"true"},"#"),s(" CSS\uB97C \uD65C\uC6A9\uD55C \uC751\uB2F5\uC131 \uD5A5\uC0C1")],-1),_=a("p",null,"\uC811\uADFC\uC131\uC758 \uAE30\uCD08\uAC00 \uB9C8\uB828\uB41C \uD6C4, \uB2E4\uC74C \uACFC\uC81C\uB294 \uD14C\uC774\uBE14\uC774 \uC5B4\uB5A4 \uD654\uBA74 \uD06C\uAE30\uC5D0\uC11C\uB3C4 \uBA4B\uC9C0\uAC8C \uBCF4\uC774\uACE0 \uAE30\uB2A5\uC774 \uC720\uC9C0\uB418\uB3C4\uB85D \uBCF4\uC7A5\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),f=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),x=o(`<h1 id="\u110B\u1169\u1107\u1165\u1111\u1173\u11AF\u1105\u1169\u110B\u116E-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165" tabindex="-1"><a class="header-anchor" href="#\u110B\u1169\u1107\u1165\u1111\u1173\u11AF\u1105\u1169\u110B\u116E-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165" aria-hidden="true">#</a> \uC624\uBC84\uD50C\uB85C\uC6B0 \uCEE8\uD14C\uC774\uB108</h1><p>\uD55C \uAC00\uC9C0 \uAC04\uB2E8\uD55C \uAE30\uC220\uC740 \uD14C\uC774\uBE14\uC744 overflow-x: auto;\uAC00 \uC788\uB294 div\uB85C \uAC10\uC2F8\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD14C\uC774\uBE14\uC740 \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uB808\uC774\uC544\uC6C3\uC744 \uC720\uC9C0\uD558\uBA74\uC11C \uC791\uC740 \uD654\uBA74\uC6A9 \uAC00\uB85C \uC2A4\uD06C\uB864\uBC14\uB97C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>table<span class="token operator">-</span>container <span class="token punctuation">{</span>
  overflow<span class="token operator">-</span>x<span class="token operator">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u1100\u1173\u1105\u1175\u1103\u1173-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA" tabindex="-1"><a class="header-anchor" href="#\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u1100\u1173\u1105\u1175\u1103\u1173-\u1105\u1166\u110B\u1175\u110B\u1161\u110B\u116E\u11BA" aria-hidden="true">#</a> \uBC18\uC751\uD615 \uADF8\uB9AC\uB4DC \uB808\uC774\uC544\uC6C3</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=o(`<p>\uB354 \uBC1C\uC804\uB41C \uC194\uB8E8\uC158\uC73C\uB85C, CSS Grid\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD14C\uC774\uBE14\uC744 \uB354 \uBC18\uC751 \uD615 \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uD14C\uC774\uBE14 \uD5E4\uB354\uB97C \uC228\uAE30\uACE0 \uAC01 \uD589\uC744 \uADF8\uB9AC\uB4DC\uB85C \uD45C\uC2DC\uD558\uC5EC \uC791\uC740 \uD654\uBA74\uC5D0\uC11C \uB370\uC774\uD130\uAC00 \uAC00\uB3C5\uC131 \uC788\uAC8C \uD45C\uC2DC\uB418\uB3C4\uB85D \uD558\uB294 \uAC83\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@<span class="token function">media</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 600px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  table<span class="token punctuation">,</span> thead<span class="token punctuation">,</span> tbody<span class="token punctuation">,</span> th<span class="token punctuation">,</span> td<span class="token punctuation">,</span> tr <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  thead tr <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token operator">-</span>9999px<span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token operator">-</span>9999px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  tr <span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  td <span class="token punctuation">{</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
    padding<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> right<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token literal-property property">td</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> 6px<span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> 6px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">45</span><span class="token operator">%</span><span class="token punctuation">;</span>
    padding<span class="token operator">-</span>right<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    white<span class="token operator">-</span>space<span class="token operator">:</span> nowrap<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> left<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* \uB370\uC774\uD130 \uB808\uC774\uBE14\uB9C1 */</span>
  <span class="token literal-property property">td</span><span class="token operator">:</span>nth<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\uC81C\uD488&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token literal-property property">td</span><span class="token operator">:</span>nth<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\uC218\uB7C9&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token literal-property property">td</span><span class="token operator">:</span>nth<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\uB9E4\uCD9C&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1109\u1161\u11BC\u1112\u1169-\u110C\u1161\u11A8\u110B\u116D\u11BC\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-javascript-\u1112\u116A\u11AF\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u11BC\u1112\u1169-\u110C\u1161\u11A8\u110B\u116D\u11BC\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-javascript-\u1112\u116A\u11AF\u110B\u116D\u11BC" aria-hidden="true">#</a> \uC0C1\uD638 \uC791\uC6A9\uC744 \uC704\uD55C JavaScript \uD65C\uC6A9</h1><p>\uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uB354 \uD5A5\uC0C1\uC2DC\uD0A4\uAE30 \uC704\uD574 JavaScript\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790 \uC0C1\uD638 \uC791\uC6A9\uC774\uB098 \uD654\uBA74 \uD06C\uAE30\uC5D0 \uB530\uB77C \uD14C\uC774\uBE14\uC744 \uB3D9\uC801\uC73C\uB85C \uC870\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),S=o('<h1 id="\u110C\u1165\u11BC\u1105\u1167\u11AF-\u1106\u1175\u11BE-\u1111\u1175\u11AF\u1110\u1165\u1105\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11BC\u1105\u1167\u11AF-\u1106\u1175\u11BE-\u1111\u1175\u11AF\u1110\u1165\u1105\u1175\u11BC" aria-hidden="true">#</a> \uC815\uB82C \uBC0F \uD544\uD130\uB9C1</h1><p>\uC815\uB82C \uBC0F \uD544\uD130\uB9C1 \uAE30\uB2A5\uC744 \uAD6C\uD604\uD558\uBA74 \uC0AC\uC6A9\uC790\uAC00 \uB300\uD615 \uD14C\uC774\uBE14\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uD0D0\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD14C\uC774\uBE14 \uD5E4\uB354\uC5D0 \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB97C \uCD94\uAC00\uD558\uC5EC \uC815\uB82C \uAE30\uB2A5\uC744 \uD2B8\uB9AC\uAC70\uD560 \uC218 \uC788\uC73C\uBA70, \uC785\uB825 \uD544\uB4DC\uB294 \uC0AC\uC6A9\uC790 \uCFFC\uB9AC\uC5D0 \uAE30\uBC18\uD558\uC5EC \uAD00\uB828 \uD589\uC744 \uC228\uAE30\uAC70\uB098 \uD45C\uC2DC\uD558\uB294 \uD544\uD130\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h1 id="\u110E\u116E\u11A8\u1109\u1169-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u1109\u1166\u11A8\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110E\u116E\u11A8\u1109\u1169-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u1109\u1166\u11A8\u1109\u1167\u11AB" aria-hidden="true">#</a> \uCD95\uC18C \uAC00\uB2A5\uD55C \uC139\uC158</h1><p>\uB9E4\uC6B0 \uD070 \uD14C\uC774\uBE14\uC758 \uACBD\uC6B0 JavaScript\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCD95\uC18C \uAC00\uB2A5\uD55C \uC139\uC158\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC0AC\uC6A9\uC790\uB294 \uAC00\uC7A5 \uAD00\uB828 \uC788\uB294 \uC815\uBCF4\uC5D0 \uC9D1\uC911\uD558\uACE0 \uD544\uC694\uC5D0 \uB530\uB77C \uC139\uC158\uC744 \uD655\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),j=a("h1",{id:"\u110B\u116F\u1103\u1173\u1111\u1173\u1105\u1166\u1109\u1173-\u1109\u1161\u110B\u1175\u1110\u1173\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1111\u1167\u11AB\u1105\u1175\u1112\u1161\u11AB-\u1112\u1169\u1109\u1173\u1110\u1175\u11BC",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u110B\u116F\u1103\u1173\u1111\u1173\u1105\u1166\u1109\u1173-\u1109\u1161\u110B\u1175\u1110\u1173\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1111\u1167\u11AB\u1105\u1175\u1112\u1161\u11AB-\u1112\u1169\u1109\u1173\u1110\u1175\u11BC","aria-hidden":"true"},"#"),s(" \uC6CC\uB4DC\uD504\uB808\uC2A4 \uC0AC\uC774\uD2B8\uB97C \uC704\uD55C \uD3B8\uB9AC\uD55C \uD638\uC2A4\uD305")],-1),C=a("p",null,"\uC6CC\uB4DC\uD504\uB808\uC2A4 \uC0AC\uC774\uD2B8\uB97C \uC704\uD55C \uC88B\uC740 \uD638\uC2A4\uD305\uC744 \uCC3E\uACE0 \uACC4\uC2E0\uAC00\uC694? Host4Biz\uC5D0 \uC8FC\uBAA9\uD574\uBCF4\uC138\uC694. \uC720\uB7FD\uC5D0 \uD604\uB300\uC801\uC778 \uC11C\uBC84\uC640 \uC6B0\uD06C\uB77C\uC774\uB098 \uD300\uC744 \uBCF4\uC720\uD55C \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uD638\uC2A4\uD305 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4.",-1),A=a("p",null,"\uADF8\uB9AC\uACE0 MYHOST10 \uD504\uB85C\uBAA8\uC158 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA74 \uCCAB \uACB0\uC81C \uC2DC 10% \uD560\uC778 \uD61C\uD0DD\uC744 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 \uC5EC\uAE30\uC5D0\uC11C \uB4F1\uB85D\uD558\uACE0 \uACB0\uC81C \uC804\uC5D0 \uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",-1),J=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),q=a("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),s(" \uACB0\uB860")],-1),T=a("p",null,"CSS\uC640 JavaScript\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC811\uADFC \uAC00\uB2A5\uD558\uACE0 \uBC18\uC751 \uD615 \uD14C\uC774\uBE14\uC744 \uAC1C\uBC1C\uD558\uB294 \uAC83\uC740 \uD3EC\uAD04\uC801\uC774\uACE0 \uC0AC\uC6A9\uC790 \uCE5C\uD654\uC801\uC778 \uC6F9 \uACBD\uD5D8\uC744 \uB9CC\uB4E4\uAE30 \uC704\uD574 \uC911\uC694\uD569\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uB294 \uC2DC\uBA58\uD2F1 HTML\uC758 \uACAC\uACE0\uD55C \uAE30\uBC18\uC73C\uB85C \uC2DC\uC791\uD558\uACE0 CSS\uC640 JavaScript\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAE30\uB2A5\uACFC \uB808\uC774\uC544\uC6C3\uC744 \uD5A5\uC0C1\uC2DC\uD0B4\uC73C\uB85C\uC368, \uB370\uC774\uD130 \uD14C\uC774\uBE14\uC774 \uC7A5\uC560\uB97C \uAC00\uC9C4 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC811\uADFC \uAC00\uB2A5\uD558\uBA70 \uBAA8\uB4E0 \uD654\uBA74 \uD06C\uAE30\uB098 \uC7A5\uCE58\uC5D0 \uC801\uC751\uD560 \uC218 \uC788\uB3C4\uB85D \uBCF4\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC811\uADFC \uAC00\uB2A5\uC131\uACFC \uBC18\uC751 \uD615\uC131\uC5D0 \uB300\uD55C \uC774\uC911 \uCD08\uC810\uC740 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uBFD0\uB9CC \uC544\uB2C8\uB77C \uC6F9 \uAC1C\uBC1C\uC758 \uCD5C\uACE0\uC758 \uC2E4\uCC9C \uBC29\uBC95\uACFC\uB3C4 \uC77C\uCE58\uD558\uC5EC, \uC6F9\uC0AC\uC774\uD2B8\uB97C \uBCF4\uB2E4 \uB113\uC740 \uAD00\uAC1D\uC5D0\uAC8C \uB9E4\uB825\uC801\uC73C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4.",-1);function B(H,M){return n(),r("div",null,[d,u,k,v,h,(n(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,y,g,_,f,(n(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(n(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(n(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,(n(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,C,A,J,(n(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,T])}var E=l(i,[["render",B],["__file","index.html.vue"]]);export{E as default};
